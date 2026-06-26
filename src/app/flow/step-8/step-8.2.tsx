import { CodeBlock } from "../utils/code-block";

export default function UnitTestExample() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Unit Test (Service / Utility)
      </h2>
      <p className="mt-3 text-gray-600">
        Uji fungsi murni tanpa DOM. Misalnya, fungsi validasi atau pemrosesan
        data di folder <code>services/</code>.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Contoh: <code>src/__tests__/user.service.test.ts</code>
          </h3>
          <CodeBlock
            lang="ts"
            code={`import { describe, it, expect, vi } from 'vitest'
import { registerUser } from '@/services/user.service'
import { db } from '@/lib/db'

// Mock module database
vi.mock('@/lib/db', () => ({
  db: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
  },
}))

describe('registerUser', () => {
  it('should throw error if email already exists', async () => {
    vi.mocked(db.user.findUnique).mockResolvedValueOnce({ id: '123' } as any)

    await expect(
      registerUser({ email: 'test@test.com', name: 'Test', password: '123456' })
    ).rejects.toThrow('Email sudah terdaftar')
  })

  it('should create user if email is new', async () => {
    vi.mocked(db.user.findUnique).mockResolvedValueOnce(null)
    vi.mocked(db.user.create).mockResolvedValueOnce({ id: '456' } as any)

    await registerUser({ email: 'new@test.com', name: 'New', password: '123456' })
    expect(db.user.create).toHaveBeenCalledTimes(1)
  })
})`}
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Jalankan dengan <code>npx vitest run</code>.
      </p>
    </li>
  )
}