import Hero from "../sections/Hero/Hero.jsx";
import Work from "../sections/Works/Work.jsx";
import Skills from '../sections/Skills/Skills';
import About from '../sections/About/About.jsx';
import Contact from '../sections/Contact/Contact';
import Services from "../sections/Services/Services.jsx";
import Qualification from "../sections/Qualification/Qualification.jsx";

export default function Home() {
  return (
    <>
      <main className="home-main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
    </>
  );
}


