import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import myImg from "./images/img 5.jpeg";

const Footer = () => {
  return (
    <footer className="border-t mt-10 border-gray-800 md:px-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Footer */}
        <div className="flex flex-wrap items-center justify-between gap-8 mb-8">
          <div className="flex space-x-2">
            <img
              className="rounded-md h-10 w-10"
              src={myImg}
              alt="description"
            />
            <h3 className="text-2xl text-white">Musab</h3>
          </div>

          <nav className="flex flex-wrap gap-8 text-sm">
            <a
              href="/#work"
              className="text-gray-400 hover:text-white transition"
            >
              Work
            </a>
            <a
              href="/#process"
              className="text-gray-400 hover:text-white transition"
            >
              Process
            </a>
            <a
              href="/#testimonial"
              className="text-gray-400 hover:text-white transition"
            >
              Testimonial
            </a>
            <a
              href="/#faq"
              className="text-gray-400 hover:text-white transition"
            >
              FAQ
            </a>
          </nav>

          <a
            href="mailto:muhammadmusab2077@gmail.com"
            className="text-blue-400 hover:underline"
          >
            muhammadmusab2077@gmail.com
          </a>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-6">
            <a
              href="www.linkedin.com/in/muhammad-musab-37a2312a5"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn className="w-4 h-4" />
              <span className="text-sm">Linkedin</span>
            </a>
            <a
              href="https://www.instagram.com/musab_2077"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <FaInstagram className="w-4 h-4" />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-400">
            <span>© 2025 — Copyright to Muhammad Musab</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
