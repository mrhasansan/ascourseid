import { useState } from "react";

export function Register() {
  const GOOGLE_FORM_TENTOR_URL = "https://bit.ly/ascourseidtentor";
  const GOOGLE_FORM_SISWA_URL = "https://bit.ly/ascourseidsiswa";

  const [role, setRole] = useState<"tentor" | "siswa">("tentor");
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const formHref = role === "tentor" ? GOOGLE_FORM_TENTOR_URL : GOOGLE_FORM_SISWA_URL;

  return (
    <div className="min-h-screen w-full bg-gray-100 p-5">
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-16 md:grid-cols-2">
        <section className="relative hidden overflow-hidden rounded-2xl bg-blue-800 md:block">
          <img alt="laptop background" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="relative z-10 flex h-full flex-col justify-end p-10 text-white">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight">Make it Simple.</h2>
            <p className="max-w-md text-lg text-white/90">As Course membantu kamu belajar lebih mudah, cepat, dan menyenangkan. Fokus pada hal penting, tanpa ribet.</p>
          </div>
        </section>

        <section>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.06] md:p-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-blue-800">As Course</h2>
            <h3 className="text-center text-xl font-semibold">Pendaftaran Akun {role === "tentor" ? "Tentor" : "Siswa"}</h3>

            <div className="mx-auto mt-6 flex items-center justify-between">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveStep(n as 1 | 2 | 3)}
                    className={`grid h-8 w-8 place-items-center rounded-full border text-sm transition ${activeStep === n ? "bg-blue-800 text-white border-blue-600" : "border-neutral-300 text-neutral-500 hover:bg-neutral-100"}`}
                  >
                    {n}
                  </button>
                  {n !== 3 && (
                    <div className="flex flex-1 items-center">
                      <div className="h-[2px] w-full bg-neutral-200" />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -ml-2 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mx-auto mt-4 max-w-md rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-700">
              {activeStep === 1 && (
                <p>
                  <strong>Langkah 1 · Pendaftaran</strong> — Isi Google Form melalui tombol di bawah.
                </p>
              )}
              {activeStep === 2 && (
                <p>
                  <strong>Langkah 2 · Interview</strong> — Tim As Course akan menghubungi via WhatsApp/Telepon.
                </p>
              )}
              {activeStep === 3 && (
                <p>
                  <strong>Langkah 3 · Pengumuman</strong> — Hasil seleksi dan penempatan jadwal dikirim setelah verifikasi.
                </p>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-neutral-200 p-1">
              <button type="button" onClick={() => setRole("tentor")} className={`rounded-lg px-3 py-2 text-sm font-medium transition ${role === "tentor" ? "bg-blue-800 text-white" : "text-neutral-700 hover:bg-neutral-100"}`}>
                Daftar sebagai Tentor
              </button>
              <button type="button" onClick={() => setRole("siswa")} className={`rounded-lg px-3 py-2 text-sm font-medium transition ${role === "siswa" ? "bg-blue-800 text-white" : "text-neutral-700 hover:bg-neutral-100"}`}>
                Daftar sebagai Siswa
              </button>
            </div>

            <div className="mt-10 flex justify-end">
              <a
                href={formHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-600/40"
              >
                Isi via Google Form
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
