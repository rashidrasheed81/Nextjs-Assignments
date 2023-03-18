import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeHero from "./components/HomeHero";
import Projects from "./components/projects/Projects";


export default function Home() {
  return (
    <>
    
    <HomeHero/>
    <About/>
    <Projects/>
    <Contact/>

    </>
  )
}
