import { CopyButton } from "./copy-button";

export function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="relative mt-3 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm leading-relaxed break-all whitespace-pre-wrap shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
      <CopyButton text={code} />
      <code className={`language-${lang || 'text'}`}>{code}</code>
    </div>
  )
}