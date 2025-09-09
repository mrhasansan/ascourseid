export function Programs() {
  const items = [
    { title: "Olimpiade Sains Nasional", desc: "Pelatihan fokus 9 bidang SMA dengan materi bertahap, latihan soal, dan pembahasan jelas." },
    { title: "Les SMA X–XII", desc: "Pendampingan mata pelajaran inti. Konsep dulu, lalu latihan terarah." },
    { title: "Persiapan PT & Mahasiswa", desc: "Strategi ringkas, tryout, dan klinik tugas untuk nilai maksimal." },
  ];
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Program</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <article key={it.title} className="border border-slate-200 rounded-2xl p-5 shadow-sm bg-white">
              <h3 className="font-semibold text-lg mb-1">{it.title}</h3>
              <p className="text-slate-600">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
