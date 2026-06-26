import { CodeBlock } from "../utils/code-block";

export default function AuthCoreConfiguration() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Konfigurasi Inti Auth
      </h2>
      <p className="mt-3 text-gray-600">
        Buat file <code>src/server/auth.ts</code> untuk mengatur semua logika
        autentikasi. File ini mengekspor <code>auth</code>, <code>handlers</code>,
        <code>signIn</code>, dan <code>signOut</code> yang siap dipakai di
        Server Component, API Route, atau Middleware.
      </p>

      <div className="mt-4 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-600 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Prasyarat:</strong> Tambahkan variabel berikut di{' '}
        <code>.env</code> (ganti nilainya):
        <div className="font-mono text-xs mt-1 bg-[#dde2e8] p-2 rounded-lg">
          AUTH_SECRET="secret_anda" ← buat dengan perintah{' '}
          <code>npx auth secret</code>
          <br />
          AUTH_GOOGLE_ID="id_dari_google_cloud"
          <br />
          AUTH_GOOGLE_SECRET="secret_dari_google_cloud"
        </div>
      </div>

      <CodeBlock
        lang="ts"
        code={`import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await db.user.findUnique({
          where: { email: credentials.email as string },
        })

        if (!user || !user.password) return null

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isPasswordCorrect) return null

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
})`}
      />

      <div className="mt-3 space-y-2 text-sm text-gray-600">
        <p>
          Sekarang kamu bisa menggunakan <code>auth()</code> di Server Component
          untuk mendapatkan sesi, atau <code>signIn</code> di Client Component.
        </p>
        <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Catatan:</strong> Jika tidak memerlukan login dengan Google,
          kamu bisa menghapus provider Google dari array. Untuk login dengan
          kredensial, pastikan field <code>password</code> di model User sudah
          ada.
        </div>
      </div>
    </li>
  )
}