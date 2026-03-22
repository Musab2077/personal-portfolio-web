import { useEffect, useRef, memo } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "/contact", external: false },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/muhammad-musab-37a2312a5/",
    icon: FaLinkedin,
    label: "LinkedIn profile",
  },
  {
    href: "https://www.upwork.com/freelancers/~01effcbb73f85bc357",
    icon: FaSquareUpwork,
    label: "Upwork profile",
  },
  {
    href: "http://github.com/Musab2077",
    icon: FaGithub,
    label: "GitHub profile",
  },
];

const SideBar = ({ onClick }) => {
  const navigate = useNavigate();
  const closeButtonRef = useRef(null);

  // Focus close button when sidebar opens
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClick();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClick]);

  return (
    <nav
      className="place-items-end fixed right-0 top-0 z-20 animate-slide-in-right"
      aria-label="Mobile navigation"
      role="navigation"
    >
      <div className="py-3 text-white w-52 max-h-full min-h-screen bg-black/90 backdrop-blur-sm border-l border-l-neutral-700">
        {/* Close button */}
        <div className="m-3 text-right">
          <button
            ref={closeButtonRef}
            className="hover:bg-neutral-700 p-1 rounded-md transition-colors"
            onClick={onClick}
            aria-label="Close navigation menu"
          >
            <RxCross2 className="size-5" />
          </button>
        </div>

        {/* Nav links */}
        <ul role="list">
          {NAV_ITEMS.map(({ label, href }) => (
            <li
              key={label}
              className="border-y-neutral-700 border-x-0 border hover:bg-neutral-700 transition-colors"
            >
              <a
                href={href}
                className="block p-3 hover:underline w-full"
                onClick={
                  label === "Contact"
                    ? (e) => {
                        e.preventDefault();
                        navigate("/contact");
                        onClick();
                      }
                    : onClick
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social links */}
        <ul
          className="flex justify-around mt-3 text-xl text-[#27AE60]"
          role="list"
          aria-label="Social media links"
        >
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="block hover:text-green-700 hover:scale-110 transition-transform"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default memo(SideBar);
