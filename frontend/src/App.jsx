import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
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

function App() {
  const [smallDevices, setSmallDevices] = useState(window.innerWidth > 845);
  const [sideButtons, setSideButton] = useState(false);
  const aboutRef = useRef();
  const servicesRef = useRef();
  const contactRef = useRef();

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setSideButton(false);
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    setSideButton(false);
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setSideButton(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallDevices(window.innerWidth > 845);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSideButton() {
    setSideButton(!sideButtons);
  }

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
          aboutClick={scrollToAbout}
          servicesClick={scrollToServices}
          contactClick={scrollToContact}
          onClick={() => handleSideButton()}
        />
      )}
      <div
        className={`bg-black/90 overflow-x-hidden text-white md:px-12 px-6 relative z-0  pb-12 ${
          sideButtons && "opacity-80"
        }`}
        onClick={() => {
          if (sideButtons) {
            setSideButton(false);
          }
        }}
      >
        <NavBar>
          {smallDevices ? (
            <DesktopIcon
              aboutClick={scrollToAbout}
              servicesClick={scrollToServices}
              contactClick={scrollToContact}
            />
          ) : (
            <MobileIcon onClick={() => handleSideButton()} />
          )}
        </NavBar>
        <div>
          <Description learnMoreClick={scrollToAbout} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <PersonalInfo />
        <section ref={servicesRef}>
          <Services />
        </section>
        <Skills />
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
        <Bot />
      </div>
    </>
  );
}

export default App;
