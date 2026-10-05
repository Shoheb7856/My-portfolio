import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "./theme";
import useLenis from "./hooks/useLenis";

const marqueeItems = [
  "Java",
  "Spring Boot",
  "Microservices",
  "React",
  "Node.js",
  "REST APIs",
  "OAuth 2.0",
  "CI/CD",
];

export default function App() {
  useLenis();

  return (
    <ThemeProvider>
      <Preloader />
      <Cursor />
      <Background />
      <ScrollProgress />
      <ThemeSwitcher />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee items={marqueeItems} />
        <Skills />
        <Experience />
        <Projects />
        <Marquee items={["Design", "Build", "Ship", "Scale", "Optimize"]} direction={-1} />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
