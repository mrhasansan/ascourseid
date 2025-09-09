import { Logo } from "../components/logo";
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-6 flex items-center justify-between flex-wrap gap-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-auto" />
          <strong>AS COURSE</strong>
        </div>
        <small>Online (Nasional) · Offline (Yogyakarta) · © {new Date().getFullYear()} As Course</small>
      </div>
    </footer>
  );
}
