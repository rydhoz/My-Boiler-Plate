export default function HandlingLoadingState() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Handling Loading State
      </h2>
      <p className="mt-3 text-gray-600">
        Gunakan <code>useTransition</code> dari React untuk memberikan
        feedback loading tanpa membekukan UI.
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
        <li>
          <strong>Non-blocking:</strong> UI tidak membeku saat menunggu
          respon server.
        </li>
        <li>
          <strong>isPending:</strong> Mudah mengubah teks tombol menjadi
          &quot;Memproses...&quot; dan menonaktifkan tombol agar user tidak
          klik berkali-kali.
        </li>
      </ul>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Catatan:</strong> Untuk form yang membutuhkan validasi di server,
        kamu juga bisa menggunakan <code>useActionState</code> (React 19) atau{' '}
        <code>useFormState</code> (React 18) yang mengembalikan state error
        langsung dari Server Action.
      </div>
    </li>
  )
}