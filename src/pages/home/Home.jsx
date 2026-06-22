

import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhyMe from "./components/WhyMe.jsx";

function App() {
  return (
    <>

      <Hero className="pt-25 pb-5" />
      <Services />
      <WhyMe />
      <Portfolio />
      <Testimonials />
      <Contact />
      
    </>
  );
}

export default App;
