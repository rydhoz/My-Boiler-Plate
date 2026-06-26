export default function Footer() {
  return (
    <footer className="mt-auto px-4 pb-4">
      <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} My Boilerplate. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="/terms"
              className="transition-colors duration-150 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="transition-colors duration-150 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
