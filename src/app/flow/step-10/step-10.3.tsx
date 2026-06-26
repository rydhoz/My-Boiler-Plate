import { CodeBlock } from "../utils/code-block";

export default function GitHubActionsCI() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        GitHub Actions CI
      </h2>
      <p className="mt-3 text-gray-600">
        Otomatis menjalankan lint, type check, test, dan build setiap kali push
        ke main atau pull request. Buat file{' '}
        <code>.github/workflows/ci.yml</code>:
      </p>
      <CodeBlock
        lang="yaml"
        code={`name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint & Format Check
        run: |
          npm run lint
          npx prettier --check .

      - name: Type Check
        run: npx tsc --noEmit

      - name: Run Unit Tests
        run: npm run test

      - name: Build Project
        run: npm run build
        env:
          DATABASE_URL: "postgresql://postgres:password@localhost:5432/test"
          AUTH_SECRET: "test-secret"`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Catatan:</strong> Build step memerlukan{' '}
        <code>AUTH_SECRET</code> (bukan <code>NEXTAUTH_SECRET</code>) untuk
        Auth.js v5. Environment variable ini hanya untuk testing, tidak
        digunakan di production.
      </div>
    </li>
  )
}