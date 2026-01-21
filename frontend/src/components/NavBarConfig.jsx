import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar, { DesktopIcon, MobileIcon } from "./NavBar";

const NavBarConfig = ({
  scrollToAbout,
  scrollToServices,
  handleSideButton,
}) => {
  const [smallDevices, setSmallDevices] = useState(window.innerWidth > 845);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setSmallDevices(window.innerWidth > 845);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavBar
      stretcOnSmDevice={smallDevices}
      getInTouch={
        smallDevices && (
          <button
            className="text-black rounded-lg p-2 px-4 bg-[#8CFF00]"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </button>
        )
      }
    >
      {smallDevices ? (
        <DesktopIcon
          aboutClick={scrollToAbout}
          servicesClick={scrollToServices}
        />
      ) : (
        <MobileIcon onClick={handleSideButton} />
      )}
    </NavBar>
  );
};

export default NavBarConfig;
