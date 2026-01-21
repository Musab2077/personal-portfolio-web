import React, { useRef, useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import NavBar from "./NavBar";
import NavBarConfig from "./NavBarConfig";
import { handleSideButton, scrollToComponent } from "./scrollFunc";
import { useNavigate } from "react-router-dom";
import { LuAsterisk } from "react-icons/lu";

// import { Mail, Linkedin, Instagram, Youtube } from "lucide-react";

export default function ContactForm() {
  const [sideButtons, setSideButton] = useState(false);
  const aboutRef = useRef();
  const servicesRef = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="bg-black/95">
        <NavBarConfig
          scrollToAbout={() =>
            scrollToComponent(aboutRef, setSideButton, true, navigate)
          }
          scrollToServices={() =>
            scrollToComponent(servicesRef, setSideButton, true, navigate)
          }
          handleSideButton={() => handleSideButton(setSideButton, sideButtons)}
        />
        {/* BACKGROUND LAYER */}
        <div className="relative inset-0 z-0 pointer-events-none">
          {/* Glow */}
          <div className="flex justify-center blur-3xl">
            <div
              className="
              rounded-full
              w-28 h-16
              sm:w-32 sm:h-20
              md:w-40 md:h-24
              lg:w-44 lg:h-28
            "
              style={{
                background:
                  "radial-gradient(circle, rgba(20,184,166,0.5) 20%, rgba(20,184,166,0.35) 45%, transparent 70%)",
                boxShadow: `
                  0 0 40px rgba(20,184,166,0.5),
                  0 0 70px rgba(20,184,166,0.4),
                  0 0 110px rgba(20,184,166,0.3)
                `,
                filter: "blur(3px)",
              }}
            />
          </div>

          {/* Grid Image */}
          <img
            src="https://framerusercontent.com/images/eVPQSYBoVqwchmpN78sjyYtovY.svg"
            alt="Grid background"
            className="absolute inset-0 w-full opacity-40"
            style={{
              maskImage:
                "radial-gradient(circle at center top, black 55%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at center top, black 55%, transparent 75%)",
              filter:
                "drop-shadow(0 0 80px rgba(20,184,166,0.6)) drop-shadow(0 0 40px rgba(20,184,166,0.4))",
            }}
          />
        </div>

        <div className="relative px-4 min-h-screen text-white font-sans mx-9 ">
          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                <span className="relative inline-block border-l border-[#8cff00] rounded-2xl px-2 font-semibold text-lg">
                  REACH ME OUT
                  <span
                    className="
                      absolute
                      top-0.5 left-1.5
                      h-[1px]
                      w-1/2
                      bg-[#95d843]
                    "
                  />
                </span>
              </p>
              <h1 className="text-3xl font-bold mb-8">LET'S CREATE TOGETHER</h1>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {/* Left Column */}
              <div>
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-3">
                    <span className="text-lime-400 mt-1">
                      <LuAsterisk className="size-6" />
                    </span>
                    <p className="text-gray-300">
                      Hassle-Free Communication: Connect directly with me
                      anytime
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lime-400 mt-1">
                      <LuAsterisk className="size-6" />
                    </span>
                    <p className="text-gray-300">
                      See the Magic: Request a demo of my AI solutions in action
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-lime-400 p-2 rounded">
                      <AiTwotoneMail className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Reach Out to Me
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Need assistance? Drop me a message anytime.
                  </p>
                  <a
                    href="mailto:muhammadmusab2077@gmail.com"
                    className="text-lime-400 hover:underline break-all"
                  >
                    muhammadmusab2077@gmail.com
                  </a>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="namexyz@gmail.com"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write here..."
                      rows="5"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 rounded-lg transition duration-200"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-8">
              {/* Top Footer */}
              <div className="flex flex-wrap items-center justify-between gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-xl font-semibold">Musab</span>
                </div>

                <nav className="flex flex-wrap gap-8 text-sm">
                  <a
                    href="#work"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Work
                  </a>
                  <a
                    href="#process"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Process
                  </a>
                  <a
                    href="#testimonial"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Testimonial
                  </a>
                  <a
                    href="#faq"
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
                    href="#linkedin"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                    <span className="text-sm">Linkedin</span>
                  </a>
                  <a
                    href="#instagram"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FaInstagram className="w-4 h-4" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="#behance"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <span className="text-sm">Behance</span>
                  </a>
                  <a
                    href="#twitter"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <span className="text-sm">Twitter / X</span>
                  </a>
                  <a
                    href="#youtube"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <BsYoutube className="w-4 h-4" />
                    <span className="text-sm">Youtube</span>
                  </a>
                </div>

                <div className="flex items-center gap-8 text-sm text-gray-400">
                  <span>© 2025 — Copyright to Muhammad Musab</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
