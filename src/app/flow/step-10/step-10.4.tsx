export default function StrategiDeployment() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Strategi Deployment (Pilihan)
      </h2>
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Jalur A: Serverless (Vercel)
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Hubungkan repo GitHub ke Vercel. Vercel akan mendeteksi Next.js
            dan melakukan build otomatis. Cocok untuk aplikasi yang tidak
            memerlukan koneksi persisten (WebSocket, dll).
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
            <li><strong>Kelebihan:</strong> Gratis untuk proyek kecil, auto-preview per PR.</li>
            <li><strong>Kekurangan:</strong> Cold start, batasan serverless function.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Jalur B: Docker di VPS / Cloud Run
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Gunakan Docker image yang sudah dibuat. Push ke registry (Docker Hub,
            GHCR), lalu jalankan di VPS atau layanan container seperti Google
            Cloud Run. Anda punya kontrol penuh atas environment.
          </p>
        </div>
      </div>
    </li>
  )
}