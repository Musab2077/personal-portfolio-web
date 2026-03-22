import { memo } from "react";
import CommonHeader from "./CommonHeader";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    text: "Musab delivered a robust backend with seamless AI integration. The API performance exceeded expectations.",
  },
  {
    name: "Ahmed Raza",
    role: "Startup Founder",
    text: "Exceptional work on our GenAI chatbot. The RAG pipeline was fast, clean, and production-ready.",
  },
  {
    name: "Daniel Wong",
    role: "CTO",
    text: "Strong backend fundamentals with excellent GenAI knowledge. A reliable engineer for scalable systems.",
  },
  {
    name: "Emily Carter",
    role: "SaaS Entrepreneur",
    text: "Our AI search feature went live smoothly. Clean architecture and well-structured APIs.",
  },
  {
    name: "Hassan Ali",
    role: "Tech Lead",
    text: "Secure, optimized backend with intelligent AI workflows. Highly professional delivery.",
  },
];

// Duplicated for infinite scroll visual effect
const ALL_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

const TestimonialCard = memo(({ item }) => (
  <figure
    className="min-w-[320px] max-w-[320px] bg-zinc-900 text-white p-6 rounded-2xl shadow-lg"
    itemScope
    itemType="https://schema.org/Review"
  >
    <blockquote className="text-sm text-zinc-300 mb-4" itemProp="reviewBody">
      "{item.text}"
    </blockquote>
    <figcaption>
      <span className="font-semibold block" itemProp="author">
        {item.name}
      </span>
      <span className="text-xs text-zinc-400" itemProp="description">
        {item.role}
      </span>
    </figcaption>
  </figure>
));
TestimonialCard.displayName = "TestimonialCard";

const Testimonials = () => {
  return (
    <section
      className="relative overflow-hidden w-full py-16 bg-black"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <CommonHeader
        id="testimonials-heading"
        title="Testimonials"
        question="What Clients Say"
        answer="Feedback from those I've worked with"
        designTweek="from-emerald-500/20 via-emerald-500/10"
      />

      {/* Scrolling strip — aria-hidden since content is duplicated */}
      <div
        className="relative z-10 flex gap-6 md:animate-scrollLg animate-scrollSm pt-8"
        aria-hidden="true"
      >
        {ALL_TESTIMONIALS.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </div>

      {/* Accessible static version for screen readers & crawlers */}
      <ul className="sr-only" aria-label="Client testimonials list">
        {TESTIMONIALS.map((item) => (
          <li key={item.name}>
            <strong>{item.name}</strong>, {item.role}: {item.text}
          </li>
        ))}
      </ul>

      {/* Edge fade vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-30 flex"
        aria-hidden="true"
      >
        <div className="w-24 md:w-64 h-full bg-gradient-to-r from-black to-transparent" />
        <div className="flex-1" />
        <div className="w-24 md:w-64 h-full bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
};

export default memo(Testimonials);
