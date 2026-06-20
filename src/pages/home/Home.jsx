
import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhyMe from "./components/WhyMe.jsx";

function App() {
  return (
    <>
      <Navbar  />
      <Hero className="pt-10" />
      <Services />
      <WhyMe />
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
