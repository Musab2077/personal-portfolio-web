import CommonHeader from "./CommonHeader";

const testimonials = [
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

export default function Testimonials() {
  return (
    <div className="relative overflow-hidden w-full py-16 bg-black">
      {/* ───────── HEADER ───────── */}
      <CommonHeader
        title="Testimonials"
        question="What Clients Say"
        answer="Feedback from those I've worked with"
        designTweek={"from-emerald-500/20 via-emerald-500/10"}
      />

      {/* ───────── SCROLLING CARDS ───────── */}
      <div className="relative z-10 flex gap-6 md:animate-scrollLg animate-scrollSm pt-8">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-[320px] bg-zinc-900 text-white p-6 rounded-2xl shadow-lg"
          >
            <p className="text-sm text-zinc-300 mb-4">“{item.text}”</p>
            <h3 className="font-semibold">{item.name}</h3>
            <span className="text-xs text-zinc-400">{item.role}</span>
          </div>
        ))}
      </div>

      {/* ───────── LEFT + RIGHT VIGNETTE (FIXED) ───────── */}
      <div className="pointer-events-none absolute inset-0 z-30 flex">
        <div className="w-24 md:w-64 h-full bg-gradient-to-r from-black to-transparent" />
        <div className="flex-1" />
        <div className="w-24 md:w-64 h-full bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
}
