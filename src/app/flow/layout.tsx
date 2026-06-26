// src/app/flow/layout.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const steps = [
  { id: 1, name: 'Inisialisasi & Fondasi', href: '/flow/step-1' },
  { id: 2, name: 'Styling & Theming', href: '/flow/step-2' },
  { id: 3, name: 'Database & ORM', href: '/flow/step-3' },
  { id: 4, name: 'Autentikasi', href: '/flow/step-4' },
  { id: 5, name: 'API & Data Fetching', href: '/flow/step-5' },
  { id: 6, name: 'Forms & Validasi', href: '/flow/step-6' },
  { id: 7, name: 'State Management', href: '/flow/step-7' },
  { id: 8, name: 'Testing', href: '/flow/step-8' },
  { id: 9, name: 'Storybook', href: '/flow/step-9' },
  { id: 10, name: 'Container & CI/CD', href: '/flow/step-10' },
  { id: 11, name: 'Monitoring & Analytics', href: '/flow/step-11' },
  { id: 12, name: 'Finalisasi', href: '/flow/step-12' },
  { id: 13, name: 'Maintenance', href: '/flow/step-13' },
]

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [bottomBarCollapsed, setBottomBarCollapsed] = useState(false)

  // Tutup drawer saat path berubah (user klik link)
  useEffect(() => {
      setDrawerOpen(false)
  }, [pathname])

  const currentIndex = useMemo(
    () => steps.findIndex((step) => step.href === pathname),
    [pathname]
  )
  const currentStep = steps[currentIndex]
  const prevStep = currentIndex > 0 ? steps[currentIndex - 1] : null
  const nextStep =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null

  return (
    <div className="flex h-screen bg-[#e0e5ec]">
      {/* Sidebar fixed – hanya tampil di desktop (md ke atas) */}
      <aside className="fixed top-0 left-0 z-10 hidden h-full w-72 overflow-y-auto border-none bg-[#e0e5ec] p-6 md:pb-24 md:block">
        <h2 className="mb-6 text-2xl font-bold tracking-wide text-gray-700 drop-shadow-sm">
          Tahapan
        </h2>
        <nav>
          <ol className="space-y-3">
            {steps.map((step) => {
              const isActive = pathname === step.href
              return (
                <li key={step.id}>
                  <Link
                    href={step.href}
                    className={cn(
                      'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out',
                      isActive
                        ? 'bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]'
                        : 'shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]'
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold',
                        isActive
                          ? 'bg-[#e0e5ec] text-gray-800 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]'
                          : 'bg-[#e0e5ec] text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]'
                      )}
                    >
                      {step.id}
                    </span>
                    <span>{step.name}</span>
                  </Link>
                </li>
              )
            })}
          </ol>
        </nav>
      </aside>

      {/* Hamburger button – hanya mobile */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed top-4 left-4 z-30 rounded-xl bg-[#e0e5ec] p-2 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] md:hidden"
        aria-label="Buka menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay + Drawer mobile */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer panel */}
          <div className="absolute top-0 left-0 h-full w-72 overflow-y-auto bg-[#e0e5ec] p-6 shadow-[9px_0_16px_#bebebe]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-700">Tahapan</h2>
              <button
                onClick={() => setDrawerOpen(false)}
                className="rounded-full bg-[#e0e5ec] p-1 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <nav>
              <ol className="space-y-3">
                {steps.map((step) => {
                  const isActive = pathname === step.href
                  return (
                    <li key={step.id}>
                      <Link
                        href={step.href}
                        onClick={() => setDrawerOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200',
                          isActive
                            ? 'bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]'
                            : 'shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]'
                        )}
                      >
                        <span
                          className={cn(
                            'flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold',
                            isActive
                              ? 'bg-[#e0e5ec] text-gray-800 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]'
                              : 'bg-[#e0e5ec] text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]'
                          )}
                        >
                          {step.id}
                        </span>
                        <span>{step.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </nav>
          </div>
        </div>
      )}

      {/* Main content area */}
      <main
        className={cn(
          'ml-0 h-screen flex-1 overflow-y-auto bg-[#e8edf2] p-6 md:ml-72 md:p-10',
          !bottomBarCollapsed ? 'pb-24 md:pb-10' : 'pb-16 md:pb-10'
        )}
      >
        <div className="min-h-full rounded-4xl bg-[#e0e5ec] p-4 shadow-[9px_9px_16px_#bebebe,-9px_-9px_16px_#ffffff] md:p-8">
          {children}
        </div>
      </main>

      {/* Bottom navigation bar (mobile only) */}
      <div
        className={cn(
          'fixed right-0 bottom-0 left-0 z-30 bg-[#e0e5ec] transition-all duration-300 md:hidden',
          bottomBarCollapsed
            ? 'h-12 shadow-[0_-5px_10px_#bebebe]'
            : 'h-20 shadow-[0_-9px_16px_#bebebe]'
        )}
      >
        {bottomBarCollapsed ? (
          // Collapsed: hanya tombol buka
          <div className="flex h-full items-center justify-center">
            <button
              onClick={() => setBottomBarCollapsed(false)}
              className="rounded-full bg-[#e0e5ec] px-4 py-1 text-sm font-medium text-gray-700 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]"
            >
              Navigasi Langkah
            </button>
          </div>
        ) : (
          // Expanded: panah kiri, judul, panah kanan, tombol tutup
          <div className="flex h-full items-center justify-between px-4">
            {prevStep ? (
              <Link
                href={prevStep.href}
                className="rounded-xl bg-[#e0e5ec] p-2 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <div className="w-10" />
            )}
            <div className="text-center text-sm font-medium text-gray-700">
              Langkah {currentStep?.id ?? '-'} <br />
              <span className="text-xs">{currentStep?.name ?? ''}</span>
            </div>
            {nextStep ? (
              <Link
                href={nextStep.href}
                className="rounded-xl bg-[#e0e5ec] p-2 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <div className="w-10" />
            )}
            <button
              onClick={() => setBottomBarCollapsed(true)}
              className="rounded-full bg-[#e0e5ec] p-1 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]"
              aria-label="Tutup navigasi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
