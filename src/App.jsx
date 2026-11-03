import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./hooks/useTheme";
import { SmoothScroll } from "./hooks/useLenis";
import { Background } from "./components/Background";
import { ScrollProgress } from "./components/ScrollProgress";
import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Credentials } from "./sections/Credentials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { scrollToId } from "./lib/scroll";

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <a
            className="skip-link"
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("main")?.focus({ preventScroll: true });
              scrollToId("home");
            }}
          >
            Skip to content
          </a>
          <Background />
          <div className="relative z-10">
            <ScrollProgress />
            <Cursor />
            <Navbar />
            <main id="main" tabIndex={-1}>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Credentials />
              <Contact />
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </MotionConfig>
    </ThemeProvider>
  );
}
