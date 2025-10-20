import { NextRequest, NextResponse } from 'next/server';

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string | null;
  external_urls: {
    spotify: string;
  };
  images: Array<{
    url: string;
    height: number | null;
    width: number | null;
  }>;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
  };
  public: boolean;
  tracks: {
    total: number;
  };
}

interface SpotifyPlaylistsResponse {
  items: SpotifyPlaylist[];
  total: number;
  limit: number;
  offset: number;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '6';
    const offset = searchParams.get('offset') || '0';

    // Environment variables untuk Spotify API
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const userId = process.env.SPOTIFY_USER_ID;

    if (!clientId || !clientSecret || !userId) {
      return NextResponse.json(
        { error: 'Spotify credentials not configured' },
        { status: 500 }
      );
    }

    // Mendapatkan access token menggunakan Client Credentials flow
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to get Spotify access token');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Mengambil playlist user menggunakan Spotify Web API
    const playlistsResponse = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists?limit=${limit}&offset=${offset}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!playlistsResponse.ok) {
      if (playlistsResponse.status === 404) {
        return NextResponse.json(
          { error: 'User not found or playlists not accessible' },
          { status: 404 }
        );
      }
      throw new Error(`Spotify API error: ${playlistsResponse.status}`);
    }

    const playlistsData: SpotifyPlaylistsResponse = await playlistsResponse.json();

    // Filter hanya playlist yang public atau milik user
    const filteredPlaylists = playlistsData.items.filter(
      playlist => playlist.public || playlist.owner.display_name === userId
    );

    return NextResponse.json({
      ...playlistsData,
      items: filteredPlaylists,
    });

  } catch (error) {
    console.error('Error fetching Spotify playlists:', error);
    return NextResponse.json(
      { error: 'Failed to fetch playlists' },
      { status: 500 }
    );
  }
}
