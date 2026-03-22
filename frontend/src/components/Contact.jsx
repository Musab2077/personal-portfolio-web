import { useRef, useState, useCallback, memo } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import NavBarConfig from "./NavBarConfig";
import { handleSideButton } from "./scrollFunc";
import { LuAsterisk } from "react-icons/lu";
import Footer from "./Footer";
import SideBar from "./SideBar";

const SHEET_URL =
  "https://api.sheetbest.com/sheets/9c1115c1-d415-4c4c-9446-95149dc48c2a";

const INITIAL_FORM = { Name: "", Email: "", Message: "" };

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [sideButtons, setSideButton] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.Email)) {
      setEmailValidation(false);
      return;
    }
    setEmailValidation(true);
    setLoading(true);

    const form = new FormData();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Message", formData.Message);
    form.append("Date", new Date().toISOString());

    try {
      await fetch(SHEET_URL, { method: "POST", body: form });
      setFormData(INITIAL_FORM);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSidebar = useCallback(
    () => handleSideButton(setSideButton, sideButtons),
    [sideButtons],
  );

  return (
    <>
      {/* Sidebar overlay */}
      {sideButtons && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-10"
          onClick={() => setSideButton(false)}
          aria-hidden="true"
        />
      )}
      {sideButtons && <SideBar onClick={toggleSidebar} />}

      <div
        className={`bg-black/95 min-h-screen overflow-x-hidden text-white relative z-0 pb-12 ${
          sideButtons ? "opacity-80 pointer-events-none" : ""
        }`}
      >
        <NavBarConfig handleSideButton={toggleSidebar} />

        {/* Background decoration */}
        <div
          className="relative inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="flex justify-center blur-3xl">
            <div
              className="rounded-full w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-44 lg:h-28"
              style={{
                background:
                  "radial-gradient(circle, rgba(20,184,166,0.5) 20%, rgba(20,184,166,0.35) 45%, transparent 70%)",
                boxShadow:
                  "0 0 40px rgba(20,184,166,0.5), 0 0 70px rgba(20,184,166,0.4), 0 0 110px rgba(20,184,166,0.3)",
                filter: "blur(3px)",
              }}
            />
          </div>
          <img
            src="https://framerusercontent.com/images/eVPQSYBoVqwchmpN78sjyYtovY.svg"
            alt=""
            role="presentation"
            className="absolute inset-0 w-full opacity-40"
            loading="lazy"
            style={{
              maskImage:
                "radial-gradient(circle at center top, black 55%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at center top, black 55%, transparent 75%)",
            }}
          />
        </div>

        {/* Page content */}
        <main className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <span className="relative inline-block border-l border-[#8cff00] rounded-2xl px-2 font-semibold text-base sm:text-lg text-white">
                REACH ME OUT
                <span className="absolute top-0.5 left-1.5 h-[1px] w-1/2 bg-[#95d843]" />
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-2">
                LET'S CREATE TOGETHER
              </h1>
            </header>

            {/* Two-column grid — stacks on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left column */}
              <div className="flex flex-col gap-8">
                {/* Bullet points */}
                <ul className="space-y-4" aria-label="Contact highlights">
                  {[
                    "Hassle-Free Communication: Connect directly with me anytime",
                    "See the Magic: Request a demo of my AI solutions in action",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <LuAsterisk
                        className="size-5 sm:size-6 text-lime-400 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-gray-300 text-sm sm:text-base">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Email card */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-lime-400 p-2 rounded">
                      <AiTwotoneMail
                        className="w-5 h-5 text-black"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">
                    Reach Out to Me
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">
                    Need assistance? Drop me a message anytime.
                  </p>
                  <a
                    href="mailto:muhammadmusab2077@gmail.com"
                    className="text-lime-400 hover:underline text-sm sm:text-base break-all"
                    aria-label="Send email to Muhammad Musab"
                  >
                    muhammadmusab2077@gmail.com
                  </a>
                </div>
              </div>

              {/* Right column — Form */}
              <div className="bg-black/60 border border-gray-800 rounded-lg p-5 sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                    <div className="bg-lime-400 text-black rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold">
                      ✓
                    </div>
                    <h2 className="text-xl font-semibold">Message Sent!</h2>
                    <p className="text-gray-400 text-sm">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                    <button
                      className="mt-2 text-lime-400 hover:underline text-sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-gray-400 text-sm mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-gradient-to-r from-[#18252B] to-[#121214] rounded-lg px-4 py-3 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border focus:border-lime-400 transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-gray-400 text-sm mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        placeholder="namexyz@gmail.com"
                        required
                        className={`w-full bg-gradient-to-r from-[#18252B] to-[#121214] rounded-lg px-4 py-3 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border transition ${
                          !emailValidation
                            ? "border border-red-500"
                            : "focus:border-lime-400"
                        }`}
                        aria-describedby={
                          !emailValidation ? "email-error" : undefined
                        }
                      />
                      {!emailValidation && (
                        <p
                          id="email-error"
                          className="text-red-500 text-xs sm:text-sm mt-1"
                          role="alert"
                        >
                          Please enter a valid email address.
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-gray-400 text-sm mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="Message"
                        value={formData.Message}
                        onChange={handleChange}
                        placeholder="Write here..."
                        rows={5}
                        required
                        className="w-full bg-gradient-to-r from-[#18252B] to-[#121214] rounded-lg px-4 py-3 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border focus:border-lime-400 transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full font-semibold py-3 rounded-lg transition duration-200 text-sm sm:text-base ${
                        loading
                          ? "bg-lime-300 text-black/50 cursor-not-allowed"
                          : "bg-lime-400 hover:bg-lime-500 text-black"
                      }`}
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
