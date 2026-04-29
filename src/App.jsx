import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Curriculum from "./components/Curriculum";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Testimonials />
      <Curriculum />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;