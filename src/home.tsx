import { Outlet } from "react-router";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

export function AppRoute() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
