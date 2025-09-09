import LogoImg from "../assets/logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={LogoImg} alt="As Course Logo" className={className} />;
}
