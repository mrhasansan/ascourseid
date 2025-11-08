import Ilustration2 from "../assets/ilustration2.png";

export function Programs() {
  return (
    <main className="w-full bg-white text-slate-900">
      {/* Hero Program */}
      <section className="border-b border-slate-100 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          {/* Left: Text */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0052cc]">Program As Course</p>
            <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Belajar simpel, terarah, dan relevan.</h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
              As Course membantu siswa SMA, mahasiswa, dan peserta OSN memahami konsep inti tanpa pusing. Semua program dirancang dengan prinsip
              <span className="font-semibold text-[#0052cc]"> "Make It Simple"</span>, sehingga materi sulit dipecah menjadi langkah yang jelas dan mudah diterapkan.
            </p>
          </div>

          {/* Right: Illustration */}
          <div className="w-full max-w-md">
            <img src={Ilustration2} alt="Ilustrasi siswa belajar dengan pendekatan simpel, terarah, dan relevan" className="w-full rounded-3xl shadow-sm" />
          </div>
        </div>
      </section>

      {/* Grid Program Utama */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Program SMA */}
          <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-gray-50/70 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Program SMA</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Untuk kelas X–XII yang ingin menguatkan konsep, peningkatan nilai, dan siap ujian sekolah maupun masuk perguruan tinggi.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              <li>• Matematika, Fisika, Kimia, Biologi, Bahasa Inggris, Bahasa Indonesi, Geografi, Ekonomi, Sosiologi.</li>
              <li>• Kelas reguler & private (online / offline).</li>
              <li>• Drill soal ujian + review konsep inti.</li>
              <li>• Laporan progres berkala ke siswa & orang tua.</li>
            </ul>
            <div className="mt-4 text-xs text-slate-500">Cocok untuk siswa yang butuh pendampingan rutin dan jalur ke PTN.</div>
          </div>

          {/* Program Mahasiswa */}
          <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-gray-50/70 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Program Mahasiswa</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Untuk mahasiswa sains, teknik, kesehatan, dan ekonomi yang ingin memahami materi kuliah tanpa harus belajar sendirian.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              <li>• Pendampingan mata kuliah dasar & lanjutan.</li>
              <li>• Bimbingan tugas, proyek, & penelitian.</li>
              <li>• Konsultasi rencana studi & beasiswa.</li>
            </ul>
            <div className="mt-4 text-xs text-slate-500">Format fleksibel, fokus pada pemahaman dan latihan soal</div>
          </div>

          {/* Program OSN */}
          <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-gray-50/70 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Program OSN SMA </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Kelas intensif untuk siswa yang serius menuju OSN tingkat kabupaten hingga nasional.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              <li>• Matematika, Fisika, Kimia, Biologi, Astronomi, Informatika, Kebumian, Ekonomi, Geografi.</li>
              <li>• Kurikulum bertahap: dasar kuat → advance → simulasi.</li>
              <li>• Pembahasan soal OSN tahun-tahun sebelumnya.</li>
              <li>• Kelas kecil untuk diskusi dan mentoring dekat.</li>
            </ul>
            <div className="mt-4 text-xs text-slate-500">Dirancang agar siswa naik level tanpa merasa tenggelam materi.</div>
          </div>
        </div>
      </section>

      {/* Section: Cara Kerja Singkat */}
      <section className="bg-gray-50 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-10">
          <h3 className="text-xl font-semibold text-slate-900">Cara Kerja As Course</h3>
          <div className="mt-4 grid gap-4 text-sm text-slate-600 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052cc]">1. Diagnosa</p>
              <p className="mt-2">Konsultasi awal untuk cek kebutuhan, target, dan level siswa.</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052cc]">2. Rencana Belajar</p>
              <p className="mt-2">Susun jadwal, materi, dan jenis kelas yang paling pas.</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0052cc]">3. Monitoring</p>
              <p className="mt-2">Kelas berjalan, evaluasi rutin, dan update progres yang transparan.</p>
            </div>
          </div>

          <div className="mt-6">
            <a href="#join" className="inline-flex items-center rounded-xl bg-[#0052cc] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0041a3] transition">
              Diskusikan Program yang Tepat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
