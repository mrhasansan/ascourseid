import illustration1 from "../assets/ilustration1.png";
import illustration2 from "../assets/ilustratio3.png";

export function About() {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:px-8 lg:px-10">
        {/* Top: About Us */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="text-xl font-semibold tracking-[0.2em] uppercase text-[#0052cc]">Tentang Kami</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              As Course adalah learning partner untuk siswa SMA dan mahasiswa yang ingin belajar dengan cara yang jelas, terarah, dan tidak berbelit. Dengan prinsip{" "}
              <span className="font-semibold text-[#0052cc]">&quot;Make It Simple&quot;</span>, kami memecah materi sulit menjadi langkah yang mudah dipahami dan langsung bisa diterapkan.
            </p>
          </div>

          {/* Foto / logo tim */}
          <div className="flex-1">
            <div className="w-full rounded-3xl bg-white shadow-md overflow-hidden">
              <img src={illustration2} />
            </div>
          </div>
        </div>

        {/* Bottom: Mission + Detail */}
        <div className="flex flex-col gap-8 rounded-3xl bg-white px-4 py-8 shadow-sm md:px-8 md:py-10 lg:flex-row lg:items-center lg:gap-10">
          {/* Foto suasana belajar */}
          <div className="flex-1 ">
            <img src={illustration1} className="rounded-lg" />
          </div>

          {/* Teks misi + layanan */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-slate-900">Misi Kami</h3>
            <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-700">Membuat belajar jadi lebih cerdas dan sederhana.</p>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">
              Kami fokus pada pemahaman konsep inti dengan bahasa yang mudah, contoh yang relevan, dan latihan terukur, sehingga progres jelas dan kepercayaan diri siswa terus naik.
            </p>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">Karena itu, As Course dirancang untuk mendampingi tiga kebutuhan utama berikut:</p>
            <ul className="mt-4 space-y-2 text-sm md:text-base leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-[#0052cc]">Siswa SMA:</span> persiapan ujian sekolah, UTBK, dan seleksi mandiri.
              </li>
              <li>
                <span className="font-semibold text-[#0052cc]">Mahasiswa:</span> pendampingan mata kuliah dan proyek akademik bidang sains, teknik, kesehatan, dan ekonomi.
              </li>
              <li>
                <span className="font-semibold text-[#0052cc]">OSN SMA:</span> Matematika, Fisika, Kimia, Biologi, Astronomi, Informatika, Kebumian, Ekonomi, dan Geografi dengan kurikulum bertahap hingga level nasional.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
