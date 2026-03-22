import { memo } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import myImg from "./images/img 5.jpeg";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faqs", label: "FAQ" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/muhammad-musab-37a2312a5/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    ariaLabel: "Visit Muhammad Musab's LinkedIn profile",
  },
  {
    href: "https://www.instagram.com/musab_2077",
    icon: FaInstagram,
    label: "Instagram",
    ariaLabel: "Visit Muhammad Musab's Instagram profile",
  },
];

const Footer = () => {
  return (
    <footer
      className="border-t mt-10 border-gray-800 md:px-12"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <img
              className="rounded-md h-10 w-10 object-cover"
              src={myImg}
              alt="Muhammad Musab profile photo"
              width={40}
              height={40}
              loading="lazy"
            />
            <span className="text-2xl text-white font-semibold">Musab</span>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-8 text-sm" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact email */}
          <a
            href="mailto:muhammadmusab2077@gmail.com"
            className="text-blue-400 hover:underline"
            aria-label="Send email to Muhammad Musab"
          >
            muhammadmusab2077@gmail.com
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-gray-800">
          {/* Social links */}
          <ul
            className="flex flex-wrap gap-6"
            role="list"
            aria-label="Social media links"
          >
            {SOCIAL_LINKS.map(({ href, icon: Icon, label, ariaLabel }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            <small>© 2025 — Copyright to Muhammad Musab</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
