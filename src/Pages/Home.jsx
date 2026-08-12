import Hero from "../sections/Hero/Hero.jsx";
import About from '../sections/About/About.jsx';
import Skills from '../sections/Skills/Skills';
import Service from "../sections/Services/Service.jsx";
import Qualification from "../sections/Qualification/Qualification.jsx";
import Work from "../sections/Works/Work.jsx";
// import Contact from '../sections/Contact/Contact';
// import Projects from '../sections/Projects/Projects';

export default function Home() {
  return (
    <>
      <main className="home-main">
        <Hero />
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Work />
      {/* <Projects /> 
      <Contact /> */}
      </main>
    </>
  );
}


