import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import { useState } from "react";
import { MdDarkMode, MdLightMode  } from "react-icons/md";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="relative">
      <button title={`Toggle ${darkMode ? 'lightmode' : 'darkmode'}`} className="absolute bg-white rounded-full top-3 right-5 text-3xl max-md:text-2xl max-sm:text-xl p-2 cursor-pointer transition-all duration-300 ease-in-out" onClick={() => {
        setDarkMode(!darkMode);
      }}>{darkMode ? <MdLightMode  /> : <MdDarkMode />}</button>
      <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
      <HowItWorks darkMode={darkMode} setDarkMode={setDarkMode} />
      <WhyChooseUs darkMode={darkMode} setDarkMode={setDarkMode} />
      <Testimonials darkMode={darkMode} setDarkMode={setDarkMode} />
      <ContactForm darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
