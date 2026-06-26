import { CodeBlock } from "../utils/code-block";
import { CopyButton } from "../utils/copy-button";

export default function GitWorkflow() {
    return (
       <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
              4
            </span>
            Git Workflow (The Guard)
          </h2>
          <p className="mt-3 text-gray-600">
            Kita memasang &quot;satpam&quot; otomatis agar tidak ada kode kotor
            atau pesan commit asal-asalan yang masuk ke repository.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                A. Install Tools
              </h3>
              <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-3 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
                <CopyButton text="npm install -D husky lint-staged @commitlint/config-conventional @commitlint/cli\nnpx husky init" />
                <code>
                  npm install -D husky lint-staged
                  @commitlint/config-conventional @commitlint/cli
                </code>
                <br />
                <code>npx husky init</code>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                B. Konfigurasi <code>package.json</code>
              </h3>
              <p className="mt-1 text-gray-600">
                Letakkan <code>lint-staged</code> di level ROOT, bukan di dalam{' '}
                <code>scripts</code>.
              </p>
              <CodeBlock
                code={`{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}`}
                lang="json"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                C. Setup Husky Hooks
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                <li>
                  <strong>Pre-commit:</strong> Buka{' '}
                  <code>.husky/pre-commit</code> → isi:{' '}
                  <code>npx lint-staged</code>
                </li>
                <li>
                  <strong>Commit-msg:</strong> Buat file{' '}
                  <code>.husky/commit-msg</code> → isi:{' '}
                  <code>npx --no-install commitlint --edit $1</code>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                D. Setup Commitlint
              </h3>
              <p className="mt-1 text-gray-600">
                Buat <code>.commitlintrc.json</code>:
              </p>
              <CodeBlock
                code={`{ "extends": ["@commitlint/config-conventional"] }`}
                lang="json"
              />
            </div>
          </div>
        </li>
    )
}