export default function RefactoringRutin() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Refactoring Rutin (The Boy Scout Rule)
      </h2>
      <p className="mt-3 text-gray-600">
        &quot;Tinggalkan kode dalam keadaan lebih bersih daripada saat kamu
        menemukannya.&quot;
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
        <li>
          <strong>Split Components:</strong> Jika satu file &gt; 300 baris, pecah
          menjadi komponen kecil.
        </li>
        <li>
          <strong>Simplify Logic:</strong> Pecah fungsi panjang menjadi fungsi
          kecil dengan satu tanggung jawab.
        </li>
        <li>
          <strong>Update Types:</strong> Ubah <code>any</code> yang tersisa
          menjadi tipe spesifik.
        </li>
      </ul>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Tips:</strong> Sisihkan waktu 15 menit setiap hari atau di akhir
        sprint untuk refactoring. Gabungkan dengan proses Code Review agar
        perbaikan kecil dilakukan secara konsisten.
      </div>
    </li>
  )
}