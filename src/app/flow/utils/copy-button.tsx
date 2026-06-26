"use client"

import { useState } from "react"

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 rounded-xl bg-[#e0e5ec] px-3 py-1 text-xs font-medium text-gray-600 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all duration-200 hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] active:shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]"
    >
      {copied ? 'Tersalin ✓' : 'Salin'}
    </button>
  )
}
