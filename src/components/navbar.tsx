import { Link, NavLink } from "react-router";
import { useState } from "react";
import { Logo } from "../components/logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = "px-3 py-2 text-[17px] font-semibold text-blue-800 hover:text-blue-900";

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-8 w-auto" />
          <span className="font-semibold">AS COURSE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-slate-900" : "hover:text-slate-900")}>
            Beranda
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-slate-900" : "hover:text-slate-900")}>
            Tentang Kami
          </NavLink>
          <NavLink to="/program" className={({ isActive }) => (isActive ? "text-slate-900" : "hover:text-slate-900")}>
            Program
          </NavLink>
          <NavLink to="/testimoni" className={({ isActive }) => (isActive ? "text-slate-900" : "hover:text-slate-900")}>
            Testimoni
          </NavLink>
          <Link to="/daftar" className="rounded-full bg-blue-600 text-white px-4 py-2 font-semibold shadow">
            Daftar
          </Link>
        </nav>
        <details className="md:hidden">
          <summary className="list-none p-2 rounded-lg border border-slate-300 cursor-pointer">Menu</summary>
          <div className="absolute right-4 mt-2 w-48 rounded-xl border border-slate-200 bg-white shadow">
            <ul className="p-2 text-sm">
              <li>
                <Link className="block rounded-lg px-3 py-2 hover:bg-slate-50" to="/">
                  Beranda
                </Link>
              </li>
              <li>
                <Link className="block rounded-lg px-3 py-2 hover:bg-slate-50" to="/about">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link className="block rounded-lg px-3 py-2 hover:bg-slate-50" to="/program">
                  Program
                </Link>
              </li>
              <li>
                <Link className="block rounded-lg px-3 py-2 hover:bg-slate-50" to="/testimoni">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link className="block rounded-lg px-3 py-2 bg-blue-600 text-white" to="/daftar">
                  Daftar
                </Link>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}
