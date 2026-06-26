import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /**
   * 1. OPTIMASI GAMBAR
   * Mengizinkan domain luar untuk dioptimalkan oleh next/image.
   * Sangat penting untuk aplikasi yang menggunakan Supabase Storage atau AWS S3.
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // Izinkan semua gambar dari Supabase
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Menggunakan format modern untuk loading lebih cepat
  },

  /**
   * 2. COMPILER & BUNDLING
   * Mengoptimalkan ukuran bundle dan performa build.
   */
  compiler: {
    // Menghapus console.log di production agar aplikasi lebih ringan dan aman
    removeConsole: process.env.NODE_ENV === 'production',
  },

  /**
   * 3. EXPERIMENTAL FEATURES
   * Fitur terbaru Next.js untuk meningkatkan developer experience dan performa.
   */
  experimental: {
    // Mengoptimalkan loading server components (lebih cepat)
    serverComponentsExternalPackages: ['@prisma/client'],

    // Mengaktifkan optimasi untuk pengiriman data antara Server dan Client
    ppr: false, // Partial Prerendering (masih sangat beta, set false dulu tapi sudah siap jika ingin coba)
  },

  /**
   * 4. REDIRECTS & REWRITES
   * Mengatur pengalihan halaman secara sistematis.
   */
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },

  /**
   * 5. STRICT MODE
   * Memastikan React berjalan dalam strict mode untuk menangkap bug potensial.
   */
  reactStrictMode: true,
}

export default nextConfig
