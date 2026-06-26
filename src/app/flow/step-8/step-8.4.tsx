import { CodeBlock } from "../utils/code-block";

export default function E2ETestExample() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        End‑to‑End Test (Playwright)
      </h2>
      <p className="mt-3 text-gray-600">
        Simulasikan alur pengguna secara utuh dari browser. Buat file{' '}
        <code>e2e/auth.spec.ts</code>.
      </p>
      <CodeBlock
        lang="ts"
        code={`import { test, expect } from '@playwright/test'

test('should redirect to login when accessing dashboard without session', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard')
  await expect(page).toHaveURL(/login/)
})

test('should register a new user and redirect to dashboard', async ({ page }) => {
  await page.goto('http://localhost:3000/register')
  await page.fill('input[name="name"]', 'E2E User')
  await page.fill('input[name="email"]', \`e2e\${Date.now()}@test.com\`)
  await page.fill('input[name="password"]', '123456')
  await page.fill('input[name="confirmPassword"]', '123456')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL(/dashboard/)
})`}
      />
      <p className="mt-2 text-sm text-gray-600">
        Jalankan <code>npx playwright test</code>. Pastikan server berjalan di{' '}
        <code>localhost:3000</code>.
      </p>
    </li>
  )
}