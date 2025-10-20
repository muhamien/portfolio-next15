# Setup Spotify API untuk Portfolio

Panduan lengkap untuk mengatur integrasi Spotify API pada portfolio Next.js Anda.

## 🎵 Fitur Spotify Playlist

Komponen `SpotifyPlaylist` menampilkan playlist Spotify Anda dengan fitur:
- ✅ Menampilkan 6 playlist teratas
- ✅ Loading state yang smooth
- ✅ Error handling yang robust
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Animasi dengan Framer Motion
- ✅ Link langsung ke Spotify

## 🔧 Setup Environment Variables

### 1. Dapatkan Spotify Credentials

1. Kunjungi [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Login dengan akun Spotify Anda
3. Klik "Create App"
4. Isi form:
   - **App name**: Portfolio Spotify Integration
   - **App description**: Spotify playlist integration for portfolio
   - **Website**: URL portfolio Anda
   - **Redirect URI**: `http://localhost:3000/api/spotify/callback` (untuk development)
5. Setelah app dibuat, catat:
   - **Client ID**
   - **Client Secret**

### 2. Dapatkan Spotify User ID

1. Buka [Spotify Web Player](https://open.spotify.com/)
2. Login ke akun Anda
3. Klik kanan pada nama profil Anda
4. Pilih "Share" > "Copy profile link"
5. User ID adalah bagian setelah "user/" dalam URL
   - Contoh: `https://open.spotify.com/user/31abc123def456ghi789jkl`
   - User ID: `31abc123def456ghi789jkl`

### 3. Setup Environment Variables

Buat file `.env.local` di root project:

```env
# Spotify API Configuration
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
SPOTIFY_USER_ID=your_spotify_user_id_here
```

## 📦 Dependencies

Pastikan dependencies berikut terinstall:

```bash
npm install framer-motion
```

## 🚀 Cara Penggunaan

### 1. Import dan Gunakan Komponen

```tsx
import SpotifyPlaylist from "@/components/home/SpotifyPlaylist";

export default function Home() {
  return (
    <div>
      <SpotifyPlaylist />
    </div>
  );
}
```

### 2. API Endpoint

Komponen menggunakan API endpoint: `/api/spotify/playlists`

Endpoint ini akan:
- Menggunakan Client Credentials flow untuk autentikasi
- Mengambil playlist dari user yang ditentukan
- Filter hanya playlist yang public
- Return data dalam format yang konsisten

## 🎨 Customization

### Styling
Komponen menggunakan Tailwind CSS dengan class yang dapat dikustomisasi:

```tsx
// Container utama
className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900"

// Card playlist
className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg"
```

### Limit Playlist
Ubah jumlah playlist yang ditampilkan dengan mengubah parameter di API call:

```tsx
const response = await fetch('/api/spotify/playlists?limit=10');
```

## 🔒 Security Notes

1. **Jangan expose Client Secret** di frontend
2. **Gunakan environment variables** untuk credentials
3. **Implement rate limiting** jika diperlukan
4. **Validasi input** pada API endpoint

## 🐛 Troubleshooting

### Error: "Spotify credentials not configured"
- Pastikan file `.env.local` ada dan berisi semua required variables
- Restart development server setelah menambah environment variables

### Error: "User not found"
- Pastikan `SPOTIFY_USER_ID` benar
- Pastikan user ID tidak mengandung karakter tambahan

### Error: "Failed to get Spotify access token"
- Periksa `SPOTIFY_CLIENT_ID` dan `SPOTIFY_CLIENT_SECRET`
- Pastikan app di Spotify Dashboard sudah diaktifkan

### Playlist tidak muncul
- Pastikan user memiliki playlist public
- Cek apakah playlist memiliki gambar (cover art)

## 📚 API Reference

Komponen menggunakan [Spotify Web API](https://developer.spotify.com/documentation/web-api/reference/get-list-users-playlists) dengan endpoint:

```
GET https://api.spotify.com/v1/users/{user_id}/playlists
```

### Response Format

```typescript
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
  };
  public: boolean;
  tracks: {
    total: number;
  };
}
```

## 🎯 Next Steps

1. **Setup environment variables** sesuai panduan di atas
2. **Test komponen** dengan menjalankan development server
3. **Customize styling** sesuai kebutuhan
4. **Deploy** dengan environment variables yang sesuai

## 📞 Support

Jika mengalami masalah, periksa:
- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Framer Motion Documentation](https://www.framer.com/motion/)
