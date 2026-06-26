# Next.js Production-Grade Boilerplate

Fondasi siap produksi untuk semua proyek web berbasis Next.js. Boilerplate ini dirancang untuk memulai proyek baru dalam hitungan menit dengan praktik terbaik industri, mencakup otentikasi, manajemen state, database, UI komponen, testing, CI/CD, dan monitoring.

## Daftar Teknologi

- **Framework:** Next.js 15 (App Router)
- **Bahasa:** TypeScript (strict mode)
- **Styling:** Tailwind CSS, next-themes, shadcn/ui
- **Autentikasi:** Auth.js (NextAuth v5)
- **Database:** PostgreSQL (production) / SQLite (development)
- **ORM:** Prisma
- **Validasi:** Zod
- **Form:** React Hook Form
- **State Management:** Zustand (client state), TanStack Query (server state)
- **Testing:** Vitest, Testing Library, Playwright
- **Dokumentasi Komponen:** Storybook 8
- **Linting/Formatting:** ESLint, Prettier, Husky, lint-staged, commitlint
- **CI/CD:** GitHub Actions
- **Containerization:** Docker, Docker Compose
- **Monitoring:** Sentry
- **Analitik:** Umami atau Plausible (opsional)

## Fitur Utama

- Routing dan layout siap pakai untuk halaman publik dan terproteksi
- Autentikasi lengkap (kredensial dan OAuth) dengan manajemen sesi
- Database terintegrasi dengan Prisma ORM dan migrasi otomatis
- Tema gelap/terang dengan next-themes
- Komponen UI aksesibel dari shadcn/ui
- Form dengan validasi Zod dan React Hook Form
- Server Actions untuk mutasi data dan TanStack Query untuk fetching client
- Unit test, integration test, dan end-to-end test
- Storybook untuk dokumentasi komponen
- Pipeline CI/CD dengan GitHub Actions
- Docker multi-stage build untuk production
- Error tracking dengan Sentry

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- Node.js versi 18 atau lebih baru
- npm versi 9 atau lebih baru (atau yarn/pnpm)
- Git

Untuk development dengan Docker:

- Docker dan Docker Compose

## Memulai dengan Cepat

### 1. Clone repositori

```bash
git clone <url-repositori-anda> my-project
cd my-project
```
