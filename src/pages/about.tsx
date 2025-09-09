export function About() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Tentang Kami</h2>

        <div className="grid md:grid-cols-2 gap-5 items-center bg-slate-50 rounded-2xl p-6 border border-slate-200">
          {/* Kolom kiri: Gambar acak dari Unsplash */}
          <div className="flex justify-center">
            <img src="https://www.21kschool.com/id/wp-content/uploads/sites/21/2024/09/Learning-Methods.png" alt="Ilustrasi Belajar" className="rounded-xl shadow-md object-cover w-full h-full max-h-96" />
          </div>

          {/* Kolom kanan: Penjelasan */}
          <div>
            <p className="text-slate-700">
              <strong>As Course</strong> adalah bimbingan belajar resmi untuk SMA dan mahasiswa dengan tagline <em>“Make it Simple.”</em> Kami hadir untuk membantu siswa menguasai pelajaran, lolos Olimpiade Sains Nasional, serta sukses
              masuk perguruan tinggi melalui metode belajar yang ringkas, terstruktur, dan mudah dipahami.
            </p>

            <ul className="mt-4 list-disc list-inside text-slate-600 space-y-1">
              <li>Konsep inti disajikan secara jelas, simpel, dan aplikatif.</li>
              <li>Latihan bertahap dengan pembahasan mendalam khas Olimpiade.</li>
              <li>Pembelajaran personal yang menyesuaikan kebutuhan setiap siswa.</li>
              <li>Dibimbing langsung oleh pengajar berpengalaman di bidangnya.</li>
            </ul>
          </div>
        </div>
        {/* Bidang yang Kami Latih */}
        <div className="mt-5 text-center">
          <h3 className="font-semibold text-slate-800 mb-4">Bidang yang Kami Latih</h3>
          <ul className="flex flex-wrap justify-center gap-2 text-sm">
            {["Matematika", "Fisika", "Kimia", "Biologi", "Informatika", "Astronomi", "Ekonomi", "Geografi", "Kebumian", "IPA", "IPS", "Bahasa Inggris", "Sosiologi", "Bahasa Indonesia", "Sejarah", "TPS", "TKA"].map((b) => (
              <li key={b} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
