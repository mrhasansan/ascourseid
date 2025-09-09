import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { About } from "./pages/about";
import { Programs } from "./pages/programs";
import { Testimonies } from "./pages/testimonies";

export function AppRoute() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <About />
        <Programs />
        <Testimonies />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
