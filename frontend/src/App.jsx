import { lazy, Suspense, useEffect, useCallback, useState } from "react";
import NavBarConfig from "./components/NavBarConfig";
import Bot from "./components/Bot";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { handleSideButton } from "./components/scrollFunc";
import { useNavigate } from "react-router-dom";

// Lazy-loaded sections for code splitting (faster initial load)
const Description = lazy(() => import("./components/Description"));
const SideBar = lazy(() => import("./components/SideBar"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Faqs = lazy(() => import("./components/Faqs"));
const Footer = lazy(() => import("./components/Footer"));

// Section loading skeleton
const SectionSkeleton = () => (
  <div className="w-full py-20 flex justify-center" aria-hidden="true">
    <div className="w-32 h-4 bg-neutral-800 rounded animate-pulse" />
  </div>
);

const BACKEND_URL = "https://backend-for-portfolio-web.vercel.app";

function App() {
  const [sideButtons, setSideButton] = useState(false);
  const [botChat, setBotChat] = useState(false);
  const navigate = useNavigate();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  // Warm up backend (non-blocking, best-effort)
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${BACKEND_URL}/`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Backend warmup failed:", err);
          navigate("/error");
        }
      });
    return () => controller.abort();
  }, [navigate]);

  const toggleSideButton = useCallback(
    () => handleSideButton(setSideButton, sideButtons),
    [sideButtons],
  );

  const toggleBot = useCallback(() => setBotChat((prev) => !prev), []);

  const openBot = useCallback(() => setBotChat(true), []);

  return (
    <>
      {/* Overlay for sidebar */}
      {sideButtons && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-10"
          onClick={toggleSideButton}
          aria-hidden="true"
        />
      )}

      <Suspense fallback={null}>
        {sideButtons && <SideBar onClick={toggleSideButton} />}
      </Suspense>

      {/* Skip to main content for accessibility/SEO */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <div
        className={`bg-black/95 overflow-x-hidden text-white relative z-0 pb-12 ${
          sideButtons ? "opacity-80 pointer-events-none" : ""
        }`}
      >
        <NavBarConfig handleSideButton={toggleSideButton} />

        <main id="main-content">
          <div className="md:px-12">
            {/* Hero / About */}
            <section id="about" aria-label="About Muhammad Musab">
              <Suspense fallback={<SectionSkeleton />}>
                <Description
                  learnMoreButton={
                    <button
                      className="bg-white rounded-lg p-1 px-2 sm:p-1 sm:px-4 transition-colors duration-700 hover:bg-neutral-400"
                      onClick={openBot}
                      aria-label="Open chat to learn more about Musab"
                    >
                      Learn More
                    </button>
                  }
                />
              </Suspense>
            </section>

            {/* Services */}
            <section
              id="services"
              aria-label="Services offered by Muhammad Musab"
            >
              <Suspense fallback={<SectionSkeleton />}>
                <Services />
              </Suspense>
            </section>
          </div>

          {/* Testimonials */}
          <section id="testimonials" aria-label="Client testimonials">
            <Suspense fallback={<SectionSkeleton />}>
              <Testimonials />
            </Suspense>
          </section>

          {/* FAQs */}
          <section id="faqs" aria-label="Frequently asked questions">
            <Suspense fallback={<SectionSkeleton />}>
              <Faqs />
            </Suspense>
          </section>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>

      {/* Chatbot */}
      <Bot onClick={toggleBot} botChat={botChat} />
    </>
  );
}

export default App;
