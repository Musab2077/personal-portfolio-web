import React, { useRef, useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import NavBarConfig from "./NavBarConfig";
import { handleSideButton, scrollToComponent } from "./scrollFunc";
import { useNavigate } from "react-router-dom";
import { LuAsterisk } from "react-icons/lu";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function ContactForm() {
  const [sideButtons, setSideButton] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const aboutRef = useRef();
  const servicesRef = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
    Date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Message", formData.Message);
    form.append("Date", new Date().toISOString());

    try {
      if (!isValidEmail(formData.Email)) {
        setEmailValidation(false);
        return;
      }
      setEmailValidation(true);
      await fetch(
        "https://api.sheetbest.com/sheets/9c1115c1-d415-4c4c-9446-95149dc48c2a",
        {
          method: "POST",
          body: form, // ✅ NO headers
        },
      );

      // alert("Message sent!");
      setFormData({ Name: "", Email: "", Message: "", Date: "" });
    } catch (err) {
      console.error(err);
      alert("Failed");
    }
  };

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
          // scrollToAbout={() => scrollToComponent(aboutRef, setSideButton)}
          // scrollToServices={() => scrollToComponent(servicesRef, setSideButton)}
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
                <div className="animate-fade-up space-y-4 mb-12">
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
              <div className="bg-black rounded-lg">
                {/* <div className="absolute size-40 bg-gradient-to-b from-[#0E222B] to-transparent blur-2xl"></div> */}
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full bg-gradient-to-r from-[#18252B] to-[#121214] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:border transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        placeholder="namexyz@gmail.com"
                        className="w-full bg-black/95 bg-gradient-to-r from-[#18252B] to-[#121214] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:border transition"
                      />
                      {!emailValidation && (
                        <p className="text-red-500 text-sm mt-1">
                          Please enter a valid email address.
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        name="Message"
                        value={formData.Message}
                        onChange={handleChange}
                        placeholder="Write here..."
                        rows="5"
                        className="w-full bg-black/95 bg-gradient-to-r from-[#18252B] to-[#121214] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:border transition resize-none"
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
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
