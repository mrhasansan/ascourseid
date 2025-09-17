import { Link, NavLink } from "react-router";
import { useState } from "react";
import { Logo } from "../components/logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = "px-3 py-2 text-[17px] font-semibold text-blue-800 hover:text-blue-900";

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-auto" />
          <span className="font-semibold">AS COURSE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={({ isActive }) => `${navClass} ${isActive ? "text-slate-900" : ""}`}>
            Beranda
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${navClass} ${isActive ? "text-slate-900" : ""}`}>
            Tentang Kami
          </NavLink>
          <NavLink to="/programs" className={({ isActive }) => `${navClass} ${isActive ? "text-slate-900" : ""}`}>
            Program
          </NavLink>
          <NavLink to="/testimonies" className={({ isActive }) => `${navClass} ${isActive ? "text-slate-900" : ""}`}>
            Testimoni
          </NavLink>
          <Link to="/register" className="ml-1 rounded-full bg-blue-600 text-white px-4 py-2 font-semibold shadow">
            Daftar
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button type="button" className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-300" aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">Buka menu</span>
          {/* ikon hamburger / close */}
          {!open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div id="mobile-menu" className={`md:hidden border-t border-slate-200 bg-white ${open ? "block" : "hidden"}`}>
        <ul className="mx-auto max-w-6xl px-5 py-3 space-y-1">
          <li>
            <Link className="block rounded-lg px-3 py-2 hover:bg-slate-50" to="/" onClick={() => setOpen(false)}>
              Beranda
            </Link>
          </li>
          <li>
            <Link className="block rounded-lg px-3 py-2 hover:bg-slate-50" to="/about" onClick={() => setOpen(false)}>
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link className="block rounded-lg px-3 py-2 hover:bg-slate-50" to="/program" onClick={() => setOpen(false)}>
              Program
            </Link>
          </li>
          <li>
            <Link className="block rounded-lg px-3 py-2 hover:bg-slate-50" to="/testimoni" onClick={() => setOpen(false)}>
              Testimoni
            </Link>
          </li>
          <li>
            <Link className="block rounded-lg px-3 py-2 bg-blue-600 text-white" to="/daftar" onClick={() => setOpen(false)}>
              Daftar
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
