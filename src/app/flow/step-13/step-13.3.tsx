import { CodeBlock } from "../utils/code-block";

export default function FeatureFlags() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Feature Flags (Rilis Bertahap)
      </h2>
      <p className="mt-3 text-gray-600">
        Sembunyikan fitur yang belum selesai dari user dengan feature flags.
      </p>
      <div className="mt-4 space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Sederhana (via .env)
          </h3>
          <CodeBlock
            lang="env"
            code={`NEXT_PUBLIC_ENABLE_NEW_DASHBOARD=false`}
          />
          <CodeBlock
            lang="tsx"
            code={`{process.env.NEXT_PUBLIC_ENABLE_NEW_DASHBOARD === 'true' && <NewDashboard />}`}
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Profesional (Flagsmith / LaunchDarkly)
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Aktifkan fitur hanya untuk 10% user (Canary Release) atau hanya
            admin, tanpa deploy ulang.
          </p>
        </div>
      </div>
    </li>
  )
}