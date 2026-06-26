import { CopyButton } from "../utils/copy-button";

export default function Versioning() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Versioning (Rilis v1.0.0)
      </h2>
      <p className="mt-3 text-gray-600">
        Tandai versi stabil pertama dengan Git Tag.
      </p>
      <div className="relative mt-3 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton
          text={`git add .
git commit -m "chore: final release v1.0.0"
git tag -a v1.0.0 -m "First stable release of the boilerplate"
git push origin main --tags`}
        />
        <code>
          git add .
          <br />
          git commit -m &quot;chore: final release v1.0.0&quot;
          <br />
          git tag -a v1.0.0 -m &quot;First stable release of the boilerplate&quot;
          <br />
          git push origin main --tags
        </code>
      </div>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Tips:</strong> Gunakan semantic versioning (SemVer). Untuk
        rilis pertama, <code>v1.0.0</code> sudah tepat. Untuk perbaikan bug,
        naikkan ke <code>v1.0.1</code>. Untuk fitur baru, naikkan ke{' '}
        <code>v1.1.0</code>.
      </div>
    </li>
  )
}