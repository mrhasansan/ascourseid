export function About() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Tentang Kami</h2>
        <div className="grid md:grid-cols-2 gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <div>
            <p className="text-slate-700">
              <strong>As Course</strong> berfokus pada Olimpiade Sains Nasional, les untuk siswa SMA kelas X–XII, serta persiapan masuk perguruan tinggi dan pendampingan mahasiswa. Kami menyederhanakan konsep sulit menjadi langkah yang
              jelas, terstruktur, dan mudah dipraktikkan.
            </p>
            <ul className="mt-4 list-disc list-inside text-slate-600 space-y-1">
              <li>Rangkuman konsep inti yang to the point.</li>
              <li>Contoh langsung diikuti latihan bertahap.</li>
              <li>
                Kelas <strong>online</strong> (nasional) & <strong>offline</strong> di <strong>Yogyakarta</strong>.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <h3 className="font-semibold mb-2">Visi</h3>
            <p className="text-slate-700">Membuat belajar lebih sederhana, efektif, dan berorientasi hasil.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
