export default function Footer() {
  return (
    <footer className="mt-auto px-4 pb-4">
      <div className="rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] p-6">
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2026 My Boilerplate. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}