import { Outlet } from "react-router";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { HeroPage } from "./features/landing";

export function AppRoute() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <HeroPage />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
