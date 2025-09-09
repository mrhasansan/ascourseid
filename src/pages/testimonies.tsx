export function Testimonies() {
  interface Testimony {
    name: string;
    role: string;
    quote: string;
  }

  const testimonies: Testimony[] = [
    {
      name: "Aulia",
      role: "Siswa SMA",
      quote: "Belajar jadi lebih mudah dan terarah, hasil ujian saya meningkat drastis.",
    },
    {
      name: "Nadia",
      role: "Mahasiswa",
      quote: "Metode simple membuat konsep sulit jadi gampang dipahami.",
    },
    {
      name: "Raka",
      role: "Peserta OSN",
      quote: "Pelatihannya interaktif dan menyenangkan, saya jadi lebih percaya diri menghadapi OSN.",
    },
    {
      name: "Dewi",
      role: "Alumni SMA",
      quote: "Materi singkat tapi padat, sangat membantu untuk persiapan masuk PTN.",
    },
    {
      name: "Sari",
      role: "Orang Tua Siswa",
      quote: "Komunikasi pengajar bagus dan progres anak terlihat tiap minggu.",
    },
    {
      name: "Mira",
      role: "Siswa Kelas XII",
      quote: "Tryout dan review soal membuat saya lebih percaya diri jelang UTBK.",
    },
  ];

  return (
    <section id="testimoni" className="py-14 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-semibold text-center mb-8">Testimoni</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonies.map((t, idx) => (
            <blockquote key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <p className="text-slate-700 italic mb-3">“{t.quote}”</p>
              <footer className="text-sm font-semibold text-slate-900">
                {t.name} — <span className="font-normal text-slate-600">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
