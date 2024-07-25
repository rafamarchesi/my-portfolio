import Hero from './sections/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Skills from './sections/Skills/Skills';
import Services from './sections/Services/Services';
import Footer from '../../components/Footer/Footer';
import FloatingButton from '../../components/FloatingButton'; 
import Projects from './sections/Projects/Projects';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />      
      <Footer />
      <FloatingButton /> 
    </>
  );
};

export default Home;
