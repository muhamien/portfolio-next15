import { NextRequest, NextResponse } from 'next/server';

interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{
    name: string;
    external_urls: {
      spotify: string;
    };
  }>;
  album: {
    name: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    external_urls: {
      spotify: string;
    };
  };
  external_urls: {
    spotify: string;
  };
  duration_ms: number;
  preview_url: string | null;
}

interface PlayHistory {
  track: SpotifyTrack;
  played_at: string;
  context: {
    type: string;
    href: string;
    external_urls: {
      spotify: string;
    };
  } | null;
}

interface SpotifyRecentlyPlayedResponse {
  items: PlayHistory[];
  next: string | null;
  cursors: {
    after: string;
    before: string;
  };
  limit: number;
  href: string;
}

const SPOTIFY_RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

async function getAccessToken() {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    throw new Error('Missing Spotify credentials');
  }

  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to get access token');
  }

  return response.json();
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';

    const { access_token } = await getAccessToken();

    const response = await fetch(
      `${SPOTIFY_RECENTLY_PLAYED_ENDPOINT}?limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 204) {
        // No content - user hasn't played anything recently
        return NextResponse.json({
          items: [],
          message: 'No recently played tracks',
        });
      }
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data: SpotifyRecentlyPlayedResponse = await response.json();

    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching recently played tracks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recently played tracks' },
      { status: 500 }
    );
  }
}

