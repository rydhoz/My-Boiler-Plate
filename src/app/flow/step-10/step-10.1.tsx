import { CodeBlock } from "../utils/code-block";

export default function DockerfileMultistage() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Dockerfile (Multi-stage Build)
      </h2>
      <p className="mt-3 text-gray-600">
        Multi-stage build menjaga image produksi tetap ringan — hanya berisi
        hasil build dan runtime dependencies, bukan{' '}
        <code>devDependencies</code>. Buat file <code>Dockerfile</code> di root:
      </p>
      <CodeBlock
        lang="dockerfile"
        code={`# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong> Gunakan <code>npm ci</code> untuk
        instalasi yang deterministik. Jalankan sebagai user non‑root untuk
        keamanan. Aktifkan <code>output: 'standalone'</code> di{' '}
        <code>next.config.js</code> agar build menghasilkan folder{' '}
        <code>.next/standalone</code>.
      </div>
    </li>
  )
}