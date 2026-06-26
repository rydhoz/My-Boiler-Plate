import { CodeBlock } from "../utils/code-block";

export default function IntegrationTestExample() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Integration Test (Component)
      </h2>
      <p className="mt-3 text-gray-600">
        Uji komponen React beserta interaksinya. Kita render komponen dengan
        provider (misal QueryClient) untuk simulasi nyata.
      </p>
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-600">
          Contoh: <code>src/__tests__/RegisterForm.test.tsx</code>
        </h3>
        <CodeBlock
          lang="tsx"
          code={`import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterForm } from '@/components/forms/RegisterForm'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe, it, expect, vi } from 'vitest'

// Mock server action
vi.mock('@/lib/auth-service', () => ({
  registerUser: vi.fn(),
}))

function renderWithProviders() {
  const queryClient = new QueryClient()
  return render(
    <QueryClientProvider client={queryClient}>
      <RegisterForm />
    </QueryClientProvider>
  )
}

describe('RegisterForm', () => {
  it('shows validation errors for empty fields', async () => {
    renderWithProviders()
    await userEvent.click(screen.getByRole('button', { name: /daftar/i }))
    expect(await screen.findByText(/nama minimal 2 karakter/i)).toBeInTheDocument()
    expect(screen.getByText(/format email tidak valid/i)).toBeInTheDocument()
  })

  it('calls registerUser on valid submit', async () => {
    const { registerUser } = await import('@/lib/auth-service')
    renderWithProviders()
    await userEvent.type(screen.getByPlaceholderText(/john doe/i), 'John')
    await userEvent.type(screen.getByPlaceholderText(/email@example.com/i), 'john@test.com')
    await userEvent.type(screen.getAllByPlaceholderText('')[0], '123456') // password
    await userEvent.type(screen.getAllByPlaceholderText('')[1], '123456') // confirm
    await userEvent.click(screen.getByRole('button', { name: /daftar/i }))
    await waitFor(() => expect(registerUser).toHaveBeenCalled())
  })
})`}
        />
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Jalankan <code>npx vitest run</code>. Vitest akan otomatis menemukan
        file di folder <code>__tests__</code>.
      </p>
    </li>
  )
}