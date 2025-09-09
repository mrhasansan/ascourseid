import { FaPhoneAlt, FaInstagram, FaYoutube, FaEnvelope, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-16 text-slate-100">
      {/* top accent bar */}
      <div className="h-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600" />

      {/* main footer */}
      <div className="bg-[#184e7a]">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* About + CTA */}
            <div className="space-y-4">
              <div className="mt-4 text-slate-200/90 text-sm space-y-1">
                <div className="font-semibold">Legalitas</div>
                <div>AS Course – PT. Santhosa Citra Pasada</div>
                <div>NPWP: 99.845.448.2-606.000</div>
              </div>
            </div>

            {/* Yogyakarta Office (Map) */}
            <div>
              <h3 className="mb-3 text-lg font-semibold underline decoration-2 decoration-slate-200/70 underline-offset-4">Yogyakarta Office</h3>
              <div className="overflow-hidden rounded-xl ring-1 ring-white/20 shadow">
                <iframe
                  title="Yogyakarta Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0!2d110.3671!3d-7.8014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYogyakarta!5e0!3m2!1sen!2sid!4v00000000000"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full"
                />
              </div>
            </div>

            {/* Contact + Legal */}
            <div>
              <h3 className="mb-3 text-lg font-semibold underline decoration-2 decoration-slate-200/70 underline-offset-4">Contact</h3>
              <ul className="space-y-3 text-slate-100/90 text-sm">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +62 823‑2350‑1954
                </li>
                <li className="flex items-center gap-2">
                  <FaTiktok /> @ascourseid
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope />
                  <a href="mailto:management@as-course.id" className="hover:underline">
                    ascourseid@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram /> @ascourseid
                </li>
                <li className="flex items-center gap-2">
                  <FaYoutube /> @ascourseid
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* copyright bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-4 text-center text-sm text-slate-200/90">Copyright ©{new Date().getFullYear()} All rights reserved | PT. Santhosa Citra Pasada</div>
        </div>
      </div>
    </footer>
  );
}
