import { CodeBlock } from "../utils/code-block";

export default function ModelDefinition() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Mendefinisikan Model (Schema)
      </h2>
      <p className="mt-3 text-gray-600">
        Kita akan mengisi file <code>prisma/schema.prisma</code> dengan model
        yang dibutuhkan oleh NextAuth: <code>User</code>, <code>Account</code>,{' '}
        <code>Session</code>, dan <code>VerificationToken</code>.
      </p>

      <div className="mt-4 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-600 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Petunjuk:</strong> Ganti seluruh isi <code>schema.prisma</code>{' '}
        dengan kode di bawah ini, atau tambahkan model‑model tersebut setelah
        blok <code>datasource</code> dan <code>generator</code> yang sudah ada.
      </div>

      <CodeBlock
        code={`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?   // opsional, hanya jika pakai autentikasi kredensial
  accounts      Account[]
  sessions      Session[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}`}
        lang="prisma"
      />

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <p>
          Setelah file disimpan, jalankan perintah berikut untuk membuat file
          database dan menerapkan skema:
        </p>
        <div className="rounded-xl bg-[#e8edf2] p-3 font-mono text-sm shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          npx prisma migrate dev --name init
        </div>
        <p>
          Ini akan membuat file <code>dev.db</code> di folder{' '}
          <code>prisma/</code> dan menghasilkan Prisma Client yang siap digunakan.
        </p>
      </div>
    </li>
  )
}