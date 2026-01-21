import { useEffect, useRef, useState } from "react";
import NavBarConfig from "./components/NavBarConfig";
import { DesktopIcon, MobileIcon } from "./components/NavBar";
import Description from "./components/Description";
import SideBar from "./components/SideBar";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import "./App.css";
import Contact from "./components/Contact";
import Bot from "./components/Bot";
import PersonalInfo from "./components/PersonalInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import { handleSideButton, scrollToComponent } from "./components/scrollFunc";
import { useNavigate } from "react-router-dom";

function App() {
  const [sideButtons, setSideButton] = useState(false);
  const aboutRef = useRef();
  const servicesRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {sideButtons && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-10"
          onClick={() => setSideButton(false)}
        ></div>
      )}
      {sideButtons && (
        <SideBar
          aboutClick={() => scrollToComponent(aboutRef, setSideButton)}
          servicesClick={() => scrollToComponent(servicesRef, setSideButton)}
          onClick={() => handleSideButton(setSideButton, sideButtons)}
        />
      )}
      <div
        className={`bg-black/90 overflow-x-hidden text-white md:px-12 relative z-0  pb-12 ${
          sideButtons && "opacity-80"
        }`}
        onClick={() => {
          if (sideButtons) {
            setSideButton(false);
          }
        }}
      >
        <NavBarConfig
          scrollToAbout={() => scrollToComponent(aboutRef, setSideButton)}
          scrollToServices={() => scrollToComponent(servicesRef, setSideButton)}
          handleSideButton={() => handleSideButton(setSideButton, sideButtons)}
        />
        <div>
          <Description learnMoreClick={scrollToComponent} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <PersonalInfo />
        <section ref={servicesRef}>
          <Services />
        </section>
        <Skills />
        <Bot />
      </div>
    </>
  );
}

export default App;
