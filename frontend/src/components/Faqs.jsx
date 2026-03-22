import { useState, useRef, useEffect, useCallback, memo } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import CommonHeader from "./CommonHeader";

const FAQItem = memo(({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);
  const id = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div
      className="border-t-2 bg-gradient-to-r from-[#001918] to-black/95 border-gray-700 rounded-lg mb-4 overflow-hidden"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          className="w-full flex justify-between items-center px-4 py-3 text-left text-white transition-colors rounded-lg hover:bg-white/5"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={id}
          itemProp="name"
        >
          <span>{question}</span>
          {isOpen ? (
            <FiChevronUp
              className="text-gray-400 flex-shrink-0 ml-2 transition-transform duration-300"
              aria-hidden="true"
            />
          ) : (
            <FiChevronDown
              className="text-gray-400 flex-shrink-0 ml-2 transition-transform duration-300"
              aria-hidden="true"
            />
          )}
        </button>
      </h3>

      <div
        id={id}
        ref={contentRef}
        role="region"
        aria-labelledby={buttonId}
        style={{ maxHeight: height }}
        className="px-4 text-gray-300 bg-gradient-to-r from-[#001918] to-black/95 overflow-hidden transition-all duration-500 rounded-b-lg"
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div className="py-3" itemProp="text">
          {answer}
        </div>
      </div>
    </div>
  );
});
FAQItem.displayName = "FAQItem";

const FAQS = [
  {
    question: "What kind of backend systems do you build for AI applications?",
    answer:
      "I design and develop scalable backend systems using frameworks like FastAPI and Flask, integrating AI models through REST APIs. These systems handle authentication, data pipelines, model inference, logging, and deployment-ready architectures.",
  },
  {
    question: "What is your experience with Generative AI?",
    answer:
      "I specialize in building LLM-powered applications, including chatbots, AI assistants, and RAG (Retrieval-Augmented Generation) systems. I work with transformer-based models, vector databases, prompt engineering, and API-based LLM integrations.",
  },
  {
    question: "Do you fine-tune models or use pre-trained ones?",
    answer:
      "Depending on the use case, I primarily use pre-trained models with advanced prompting and RAG pipelines. When required, I also perform fine-tuning or parameter-efficient tuning to improve task-specific performance.",
  },
  {
    question: "How do you handle scalability and performance in AI backends?",
    answer:
      "I implement asynchronous processing, caching, background tasks, and containerized deployments using Docker. For production systems, I focus on optimized inference, load balancing, and efficient database design.",
  },
  {
    question: "What databases and tools do you work with?",
    answer:
      "I work with PostgreSQL, MongoDB, and vector databases like FAISS or Pinecone for semantic search. I also use tools such as Redis, Celery, and cloud platforms to support high-performance AI applications.",
  },
  {
    question: "Can you integrate AI features into existing products?",
    answer:
      "Yes. I integrate AI capabilities into existing systems with minimal disruption—adding features like intelligent search, chat interfaces, automation, and decision support while ensuring security, reliability, and maintainability.",
  },
];

const Faqs = () => {
  return (
    <section
      className="relative max-w-2xl mx-auto pt-12"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <CommonHeader
        id="faq-heading"
        designTweek="from-emerald-700/20 via-emerald-800/5"
        title="FAQ'S SECTION"
        question="Got Questions?"
        answer="I've Got Answers!"
      />
      {FAQS.map((faq, index) => (
        <FAQItem
          key={faq.question}
          index={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </section>
  );
};

export default memo(Faqs);
