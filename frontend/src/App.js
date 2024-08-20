import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
// import Features from "./components/features/Features";
// import Footer from "./components/footer/Footer";
// import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import { useState, useEffect } from "react";
// import Testimonial from "./components/tesimonial/Testimonial";
import SplashScreen from "./components/splashScreeen/splashScreen";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSplashScreen(false);
    }, 1800);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      {splashScreen && <SplashScreen />}
      {!splashScreen && <div>
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          {/* <Features /> */}
          <Projects />
          <Resume />
          {/* <Testimonial /> */}
          <Contact />
          {/* <Footer /> */}
          {/* <FooterBottom /> */}
        </div>

      </div>}
    </div>
  );
}

export default App;
