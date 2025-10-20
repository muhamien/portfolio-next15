'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
}

interface PlayHistory {
  track: SpotifyTrack;
  played_at: string;
}

export default function RecentlyPlayed() {
  const [tracks, setTracks] = useState<PlayHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/spotify/recently-played?limit=5');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTracks(data.items || []);
      } catch (err) {
        console.error('Error fetching recently played tracks:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch tracks');
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyPlayed();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMins < 60) return `${diffInMins}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${diffInDays}d ago`;
  };

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg"
      >
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
          <span className="ml-3 text-gray-600 dark:text-gray-300">Loading recently played...</span>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg"
      >
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-4">🎵</div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Unable to load tracks
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{error}</p>
        </div>
      </motion.div>
    );
  }

  if (tracks.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg"
      >
        <div className="text-center">
          <div className="text-gray-400 text-4xl mb-4">🎵</div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            No recent tracks
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Start listening to music on Spotify!
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg"
    >
      <div className="flex items-center mb-6">
        <div className="bg-purple-500 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Recently Played
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            My latest Spotify tracks
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {tracks.map((item, index) => (
          <motion.a
            key={`${item.track.id}-${item.played_at}`}
            href={item.track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center space-x-4 bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex-shrink-0">
              {item.track.album.images.length > 0 ? (
                <Image
                  src={item.track.album.images[0].url}
                  alt={item.track.album.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              ) : (
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
                {item.track.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {item.track.artists.map(artist => artist.name).join(', ')}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {item.track.album.name} • {formatDate(item.played_at)}
              </p>
            </div>

            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

