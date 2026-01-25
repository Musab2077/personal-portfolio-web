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
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";

function App() {
  const [sideButtons, setSideButton] = useState(false);
  const backendURL = "https://backend-for-portfolio-web.vercel.app";
  const [botChat, setBotChat] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    fetch(`${backendURL}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Backend is running");
      })
      .catch((error) => {
        console.error("Error:", error);
        navigate("/error");
      });
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
        <SideBar onClick={() => handleSideButton(setSideButton, sideButtons)} />
      )}
      <div
        className={`bg-black/95 overflow-x-hidden text-white relative z-0  pb-12 ${
          sideButtons && "opacity-80"
        }`}
        onClick={() => {
          if (sideButtons) {
            setSideButton(false);
          }
        }}
      >
        <NavBarConfig
          handleSideButton={() => handleSideButton(setSideButton, sideButtons)}
        />
        <div className="md:px-12">
          <section id="about">
            <Description
              learnMoreButton={
                <button
                  className="bg-white rounded-lg p-1 px-2 sm:p-1 sm:px-4 transition-colors duration-700 hover:bg-neutral-400"
                  onClick={() => setBotChat(true)}
                >
                  Learn More
                </button>
              }
            />
          </section>
          <section id="services">
            <Services />
          </section>
        </div>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faqs">
          <Faqs />
        </section>
        <Footer />
      </div>
      <Bot
        onClick={() => setBotChat(!botChat)}
        botChat={botChat}
      />
    </>
  );
}

export default App;
