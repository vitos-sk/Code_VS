import { ThemeContextProvider } from "./context/ThemeContext";
import { GlobalStyles } from "./globalStyles";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsScroll from "./components/SkillsScroll";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Navigation />
      <main>
        <Hero />
        <About />
        <SkillsScroll />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeContextProvider>
  );
}
