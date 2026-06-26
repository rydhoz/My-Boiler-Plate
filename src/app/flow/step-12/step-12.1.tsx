import { CodeBlock } from "../utils/code-block";

export default function WriteReadme() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Menulis README.md (The Face of Your Project)
      </h2>
      <p className="mt-3 text-gray-600">
        README adalah pintu masuk utama. Buatlah sejelas mungkin agar siapa pun
        bisa menjalankan project dalam 5 menit.
      </p>
      <p className="mt-1 text-sm text-gray-600">
        Struktur yang disarankan:
      </p>
      <CodeBlock
        lang="markdown"
        code={`# 🚀 Ultimate Next.js Fullstack Boilerplate

Sebuah starter kit modern untuk membangun aplikasi SaaS/Web dengan cepat, aman, dan terukur.

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Database:** PostgreSQL / SQLite via Prisma ORM
- **Authentication:** Auth.js (NextAuth v5)
- **Styling:** Tailwind CSS + Shadcn UI
- **State Management:** Zustand (UI) & TanStack Query (Server)
- **Validation:** Zod + React Hook Form
- **Testing:** Vitest & Playwright
- **Observability:** Sentry & Umami

## 🚀 Cara Memulai (Quick Start)

### 1. Clone Repository
\`\`\`bash
git clone https://github.com/username/my-boilerplate.git
cd my-boilerplate
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Setup Environment
Salin file example menjadi .env:
\`\`\`bash
cp .env.example .env
\`\`\`
Lalu isi nilai DATABASE_URL dan AUTH_SECRET di dalam file .env.

### 4. Database Migration
\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

### 5. Jalankan Aplikasi
\`\`\`bash
npm run dev
\`\`\`
Buka http://localhost:3000 di browser kamu.

## 📂 Struktur Folder & Filosofi
- **src/app:** Routing dan Page (App Router).
- **src/components:** Komponen UI (Shared & Feature-based).
- **src/services:** Logika bisnis & Server Actions.
- **src/lib:** Konfigurasi library (Prisma, Auth, dll).
- **src/hooks:** Custom hooks untuk logika client-side.
- **src/stores:** Global UI state menggunakan Zustand.
- **src/validations:** Schema Zod untuk validasi input.

## 📜 Git Convention
Gunakan Conventional Commits:
- feat: Fitur baru.
- fix: Perbaikan bug.
- docs: Perubahan dokumentasi.
- style: Perubahan format/styling.
- refactor: Perubahan kode tanpa menambah fitur/fix bug.
- chore: Update dependensi atau konfigurasi build.

Contoh: \`git commit -m "feat: implement user profile update"\``}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Catatan:</strong> Ganti <code>AUTH_SECRET</code> (bukan{' '}
        <code>NEXTAUTH_SECRET</code>) karena kita menggunakan Auth.js v5.
        Tambahkan badge shields.io untuk mempercantik README.
      </div>
    </li>
  )
}