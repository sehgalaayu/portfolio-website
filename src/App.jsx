import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { About } from "./pages/About.jsx";
import { Hero } from "./pages/Hero.jsx";
import { Portfolio } from "./pages/Portfolio.jsx";
import { Stack } from "./pages/Stack.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Stack />
      <Footer />
    </>
  );
}
