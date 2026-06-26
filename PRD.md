Next.js Production-Grade Boilerplate (Long-Term Foundation)
Versi: 1.0
Tanggal: 5 Juni 2026
Penulis: Tim Engineering

1. Ringkasan Eksekutif
   Boilerplate ini dibangun sebagai fondasi standar untuk semua proyek web berbasis Next.js di organisasi. Tujuannya adalah menyediakan kerangka kerja yang siap produksi, scalable, mudah dirawat, dan mengikuti praktik terbaik industri modern. Boilerplate mencakup otentikasi, manajemen state, database, UI komponen, testing, CI/CD, dan monitoring.

2. Tujuan
   Menyediakan struktur proyek yang konsisten untuk memulai proyek baru dalam hitungan menit.

Mengurangi waktu setup dan pengambilan keputusan teknis berulang.

Menjamin kualitas kode, keamanan, dan performa sejak awal.

Memungkinkan pengembangan jangka panjang tanpa perlu menulis ulang fondasi.

Memenuhi kebutuhan aplikasi modern: SSR/SSG, autentikasi multi-provider, form kompleks, state management, dan dokumentasi komponen.

3. Fitur Utama
   Routing & Layouts

App Router Next.js 15 dengan grup rute untuk halaman publik dan terproteksi.

Layout terpisah untuk dashboard (sidebar + navbar) dan halaman autentikasi.

Autentikasi & Otorisasi

Login/register dengan kredensial (email/password) dan provider OAuth (Google).

Manajemen sesi menggunakan Auth.js (NextAuth v5) dengan adapter Prisma.

Middleware rute terproteksi.

Role-based access control (RBAC) siap dikembangkan.

Database & ORM

PostgreSQL untuk production, SQLite untuk development.

Prisma sebagai ORM dengan migrasi otomatis.

Singleton Prisma client untuk menghindari koneksi berlebih.

UI & Styling

Tailwind CSS dengan dark mode (next-themes).

Komponen aksesibel dari shadcn/ui (berbasis Radix UI).

Halaman landing dan dashboard dasar.

Form & Validasi

React Hook Form dengan resolver Zod.

Schema validasi terpusat.

Komponen form yang terintegrasi dengan UI kit.

Data Fetching & State Management

Server Components untuk data awal.

Server Actions untuk mutasi.

TanStack Query untuk client-side fetching dan caching.

Zustand untuk UI state lokal (sidebar, modal, preferensi).

Testing

Unit & integration test dengan Vitest + Testing Library.

End-to-end test dengan Playwright.

Test mencakup komponen, hook, dan alur utama pengguna.

Dokumentasi Komponen

Storybook 8 dengan dukungan Tailwind dan dark mode.

Pengembangan & Kualitas Kode

TypeScript strict.

ESLint, Prettier, Husky, lint-staged, commitlint.

Konvensi commit standar.

CI/CD & Containerization

GitHub Actions untuk lint, type-check, test, build.

Docker multi-stage build.

Docker Compose untuk development environment.

Monitoring & Analitik

Sentry untuk error tracking production.

Dukungan untuk analitik ringan (Umami/Plausible).

Keamanan & Konfigurasi

Validasi environment variable saat startup.

HTTP security headers (CSP, HSTS) di next.config.js.

4. Teknologi yang Digunakan
   Area Teknologi
   Framework Next.js 15 (App Router)
   Bahasa TypeScript (strict mode)
   Styling Tailwind CSS, next-themes, shadcn/ui
   Autentikasi Auth.js (NextAuth v5)
   Database PostgreSQL (prod) / SQLite (dev)
   ORM Prisma
   Validasi Zod
   Form React Hook Form
   State Management Zustand (client), TanStack Query (server state)
   Testing Vitest, Testing Library, Playwright
   Dokumentasi UI Storybook 8
   Linting/Formatting ESLint, Prettier, Husky, lint-staged, commitlint
   CI/CD GitHub Actions
   Containerization Docker, Docker Compose
   Monitoring Sentry
   Analitik Umami atau Plausible (opsional)
5. Arsitektur Aplikasi
   Client Layer: Komponen React, hooks, Zustand stores. Komunikasi dengan server melalui Server Actions atau API route (fetch). TanStack Query mengelola server state.

Server Layer: Server Components untuk render data, Server Actions untuk mutasi, Route Handlers untuk API publik. Prisma digunakan langsung di server.

Database Layer: PostgreSQL/SQLite diakses melalui Prisma. Migrasi dan seeding terotomatisasi.

Authentication Layer: Auth.js menangani sesi, callback, dan adapter database. Middleware Next.js memproteksi rute.

Infrastructure: Docker untuk development/production, GitHub Actions untuk pipeline, Sentry untuk monitoring.

6. Struktur Folder
   Seluruh kode sumber berada di dalam src/. Berikut struktur utama dan fungsinya:

src/
├── app/ # App Router – halaman dan API
│ ├── (auth)/ # Grup rute: login, register
│ ├── (dashboard)/ # Grup rute: halaman setelah login
│ ├── api/ # Route handlers (NextAuth, users, dll)
│ ├── layout.tsx # Root layout (providers)
│ ├── page.tsx # Landing page
│ ├── not-found.tsx # Halaman 404
│ ├── error.tsx # Error boundary global
│ └── loading.tsx # Loading UI global
├── components/
│ ├── ui/ # Komponen primitif dari shadcn/ui
│ ├── forms/ # Komponen form terintegrasi RHF+Zod
│ ├── layouts/ # Navbar, Sidebar, Footer
│ ├── shared/ # EmptyState, Loader, ErrorBoundary
│ └── features/ # Komponen spesifik domain
├── lib/ # Utilitas (cn, formatDate, api-client, db)
├── hooks/ # Custom React hooks
├── stores/ # Zustand stores (ui-store, user-preferences)
├── services/ # Server actions & client calls (auth.service, user.service)
├── server/ # Kode khusus server (auth config, db queries)
├── types/ # TypeScript types & interfaces global
├── config/ # Konfigurasi situs, env validation
├── styles/
│ └── globals.css # Tailwind directives + CSS variables
├── validations/ # Schema Zod
├── middleware.ts # Middleware proteksi rute
└── instrumentation.ts # Inisialisasi server (Sentry, dll)

Di luar src/:

prisma/ : schema dan migrasi

public/ : aset statis

.github/ : workflow CI/CD

.husky/ : git hooks

Dockerfile & docker-compose.yml

File konfigurasi (tailwind, tsconfig, next.config, dll.)

7. Rencana Implementasi (Tahap per Tahap)
   Tahap 1: Inisialisasi Proyek & Fondasi
   Scaffolding proyek dengan create-next-app (TypeScript, Tailwind, App Router).

Atur ulang struktur folder (src/ sebagai root kode).

Inisialisasi Git, atur .gitignore.

Setup path alias @/\* di tsconfig.json.

Install Prettier, integrasikan dengan ESLint.

Aktifkan mode strict TypeScript.

Setup Husky, lint-staged, dan commitlint untuk kualitas commit.

Buat .env.example dan file src/config/env.ts untuk validasi environment variable.

Hasil: Proyek dasar dengan formatting otomatis dan standar commit.

Tahap 2: Styling, Theming & Layout Dasar
Install next-themes, buat ThemeProvider.

Inisialisasi shadcn/ui (dengan npx shadcn-ui@latest init).

Tambahkan komponen primitif yang diperlukan (Button, Input, Card, dll.).

Bangun layout komponen: Navbar (dengan dark mode toggle), Sidebar, Footer.

Susun root layout dengan font, ThemeProvider, dan slot children.

Buat halaman landing minimal.

Siapkan CSS variables untuk light/dark theme.

Hasil: Tampilan dasar siap, dark mode berfungsi, halaman publik dan dashboard layout siap dipakai.

Tahap 3: Database & ORM Setup
Install Prisma, inisialisasi dengan prisma init.

Setup SQLite untuk development, siapkan variabel DATABASE_URL.

Definisikan model User, Account, Session, VerificationToken (sesuai kebutuhan NextAuth).

Jalankan migrasi awal.

Buat Prisma client singleton di src/lib/db.ts.

(Opsional) Buat seed user dummy.

Hasil: Database terhubung, siap digunakan oleh autentikasi.

Tahap 4: Autentikasi & Otorisasi
Install Auth.js (next-auth@beta) dan Prisma adapter.

Konfigurasi auth.config.ts dengan provider Google dan Credentials (bcrypt).

Buat API route NextAuth (/api/auth/[...nextauth]).

Bungkus aplikasi dengan SessionProvider di root layout.

Tulis server actions untuk login dan register.

Buat middleware Next.js untuk memproteksi rute dashboard.

Bangun halaman login/register menggunakan form sederhana.

Hasil: Pengguna dapat mendaftar, login, mengakses dashboard, dan logout.

Tahap 5: API Layer & Data Fetching
Tentukan strategi: Server Components untuk fetch data, Server Actions untuk mutasi, Route Handlers + TanStack Query untuk client fetching yang kompleks.

Buat service layer (contoh: user.service.ts) dengan server actions.

Install TanStack Query, buat Provider, dan custom hooks (misal useUsers).

Buat Route Handlers jika diperlukan API publik.

Implementasi error handling global dengan toast (sonner).

Hasil: Pola data fetching yang jelas, performa optimal.

Tahap 6: Forms & Validasi
Install React Hook Form dan @hookform/resolvers.

Buat schema Zod di src/validations/ (auth, user, dll.).

Bangun komponen form reusable menggunakan shadcn/ui Form blocks.

Integrasikan dengan Server Actions: submit form memanggil action, validasi dijalankan di server, error dikembalikan ke field.

Tangani loading state dengan useTransition.

Hasil: Form yang aman, tervalidasi, dan memberikan feedback pengguna yang baik.

Tahap 7: State Management (Client State)
Install Zustand.

Buat store ui-store.ts untuk sidebar, modal, tema sementara.

Pisahkan dengan tegas: server state di TanStack Query, UI state di Zustand.

Gunakan store di komponen layout.

Hasil: Manajemen state client yang sederhana dan tidak mengganggu data server.

Tahap 8: Testing Setup
Setup Vitest dengan jsdom, Testing Library, dan path alias.

Tulis unit test untuk komponen (contoh: tombol login, form validasi) dan utility.

Test custom hooks.

Setup Playwright untuk E2E, buat skenario login, dashboard, logout.

Pastikan test dapat dijalankan di CI nanti.

Hasil: Kepercayaan tinggi terhadap perubahan kode.

Tahap 9: Dokumentasi Komponen (Storybook)
Install Storybook 8 (dengan Vite).

Konfigurasikan Tailwind, dark mode, dan path alias.

Buat story untuk komponen UI (Button, Input, Card) dan komponen shared.

Jadikan sebagai referensi tim.

Hasil: Katalog komponen interaktif yang mempercepat pengembangan UI.

Tahap 10: Containerization & CI/CD
Tulis Dockerfile multi-stage (build + production).

Buat docker-compose.yml dengan service app dan db (PostgreSQL).

Setup GitHub Actions CI: jalankan lint, type-check, unit test, build pada push ke main/PR.

(Opsional) Tambahkan workflow deploy preview.

Hasil: Lingkungan development yang identik dan pipeline otomatis.

Tahap 11: Monitoring, Error Tracking & Analytics
Integrasikan Sentry menggunakan wizard @sentry/wizard.

Konfigurasikan error reporting di error boundary.

Tambahkan script analitik jika diperlukan (Umami/Plausible).

Hasil: Visibilitas terhadap error production dan data pengunjung (jika diinginkan).

Tahap 12: Dokumentasi & Finalisasi
Tulis README yang komprehensif: cara memulai, struktur folder, teknologi, deployment.

Bersihkan kode, hapus impor tak terpakai.

Konfigurasikan security headers di next.config.js.

Lakukan audit performa dengan Lighthouse.

Tag rilis v1.0.0.

Hasil: Boilerplate siap digunakan oleh seluruh tim.

8. Kriteria Kesuksesan
   Developer baru dapat menjalankan proyek lokal dalam waktu kurang dari 10 menit setelah clone.

Semua fitur autentikasi (register, login, logout, proteksi rute) berfungsi tanpa bug.

Form validasi berjalan di sisi klien dan server.

Dark mode berfungsi tanpa flicker.

Pipeline CI lulus (lint, type-check, unit test, build) setiap commit.

Storybook menampilkan komponen dengan baik.

Skor Lighthouse di atas 90 untuk performa dan aksesibilitas.

9. Risiko dan Mitigasi
   Risiko Mitigasi
   Pembengkakan dependensi Rutin audit dengan npm audit, gunakan Renovate untuk update.
   Perubahan breaking pada Next.js/Auth.js Pantau changelog, tulis test menyeluruh.
   Kompleksitas state management Tegaskan pemisahan server vs client state di dokumentasi.
   Performa menurun dengan banyak provider Lakukan profiling, optimalkan React Query dengan SSR.
   Konflik Tailwind dengan shadcn/ui Ikuti konvensi shadcn/ui, jangan ubah konfigurasi secara liar.
10. Lampiran
    File .env.example akan disediakan.

Diagram arsitektur (akan dibuat setelah fase awal).

Daftar script npm yang tersedia: dev, build, start, lint, test, test:e2e, storybook, prisma:migrate, dll.
