import { CodeBlock } from "../utils/code-block";

export default function DockerComposeDev() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Docker Compose (Development)
      </h2>
      <p className="mt-3 text-gray-600">
        Jalankan aplikasi + database PostgreSQL secara bersamaan. Buat file{' '}
        <code>docker-compose.yml</code>:
      </p>
      <CodeBlock
        lang="yaml"
        code={`version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    restart: always
    environment:
      POSTGRES_USER: \${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD:-password}
      POSTGRES_DB: \${POSTGRES_DB:-boilerplate_db}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}
      />
      <p className="mt-2 text-sm text-gray-600">
        Variabel environment dengan sintaks <code>${'{:-default}'}</code> akan
        mengambil nilai dari environment host atau menggunakan nilai default.
      </p>
    </li>
  )
}