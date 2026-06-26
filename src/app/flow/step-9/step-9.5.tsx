export default function ManfaatStorybook() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Mengapa Ini Sangat Berguna?
      </h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-gray-600">
        <li>
          <strong>Isolasi:</strong> Tes komponen dengan berbagai kondisi
          (Loading, Disabled, Empty, Error) tanpa harus membuat halaman baru.
        </li>
        <li>
          <strong>Dokumentasi Hidup:</strong> Tim bisa melihat semua komponen
          yang tersedia beserta contoh penggunaannya tanpa bertanya-tanya.
        </li>
        <li>
          <strong>UI Testing:</strong> Pastikan komponen tetap terlihat bagus
          di berbagai ukuran layar melalui panel viewport. Storybook bisa
          diintegrasikan dengan alat visual regression testing seperti{' '}
          <strong>Chromatic</strong> untuk mendeteksi perubahan UI secara
          otomatis di setiap pull request.
        </li>
      </ul>
    </li>
  )
}