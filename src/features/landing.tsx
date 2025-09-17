export function HeroPage() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2000&auto=format&fit=crop" alt="Belajar bersama" className="absolute inset-0 h-full w-full object-cover" />

      {/* Dark overlay + subtle gradient */}
      <div className="absolute inset-0 bg-[#0b1020]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 py-28 sm:py-36 text-center text-white">
        {/* Announcement pill (optional) */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
          <h1 className=" text-2xl font-extrabold text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Make it Simple <span className="text-blue-400">⇌</span> <span className="text-blue-400">Learn What Matters</span>
          </h1>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-4xl">
          Belajar lebih mudah bersama <span className="text-blue-400">As Course</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">Tinggalkan keribetan. Mulai belajar dengan cara yang ringan, hasil tetap maksimal.</p>
      </div>
    </section>
  );
}
