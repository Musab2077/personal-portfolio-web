import { useEffect, useState, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import NavBar, { DesktopIcon, MobileIcon } from "./NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

const BREAKPOINT = 845;

const NavBarConfig = ({
  scrollToAbout,
  scrollToServices,
  handleSideButton,
}) => {
  const [isDesktop, setIsDesktop] = useState(
    () => window.innerWidth > BREAKPOINT,
  );
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    let rafId;
    const handleResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setIsDesktop(window.innerWidth > BREAKPOINT);
      });
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleGetInTouch = useCallback(() => navigate("/contact"), [navigate]);

  return (
    <NavBar
      stretcOnSmDevice={isDesktop}
      getInTouch={
        isDesktop && (
          <button
            className="text-black rounded-lg p-2 px-4 bg-[#8CFF00] hover:shadow-[0_4px_16px_#8CFF00] transition-shadow"
            onClick={handleGetInTouch}
            aria-label="Navigate to contact page"
          >
            Get in Touch
          </button>
        )
      }
    >
      {isDesktop ? (
        <DesktopIcon
          aboutClick={scrollToAbout}
          servicesClick={scrollToServices}
        />
      ) : (
        <MobileIcon
          onClick={handleSideButton}
          aria-label="Open navigation menu"
          aria-expanded={false}
        />
      )}
    </NavBar>
  );
};

export default memo(NavBarConfig);
