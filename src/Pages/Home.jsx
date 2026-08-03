import Hero from "../sections/Hero/Hero.jsx";
import About from '../sections/About/About.jsx';
// import Skills from '../sections/Skills/Skills';
// import Contact from '../sections/Contact/Contact';
// import Projects from '../sections/Projects/Projects';

export default function Home() {
  return (
    <>
      <main className="main">
        <Hero />
        <About />
        {/* <Skills />
      <Projects />
      <Contact /> */}
      </main>
    </>
  );
}


