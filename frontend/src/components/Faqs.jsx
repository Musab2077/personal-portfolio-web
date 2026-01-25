import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import CommonHeader from "./CommonHeader";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    // Update height when isOpen changes
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <ul className="border-t-2 bg-gradient-to-r from-[#001918] to-black/95 border-gray-700 rounded-lg mb-4 overflow-hidden transition-all duration-500">
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-left text-white transition-colors rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <FiChevronUp className="text-gray-400 transition-transform duration-300" />
        ) : (
          <FiChevronDown className="text-gray-400 transition-transform duration-300" />
        )}
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="px-4 text-gray-300 bg-gradient-to-r from-[#001918] to-black/95 overflow-hidden transition-all duration-500 rounded-b-lg"
      >
        <div className="py-3">{answer}</div>
      </div>
    </ul>
  );
};

export default function Faqs() {
  const faqS = [
    {
      question:
        "What kind of backend systems do you build for AI applications?",
      answer:
        "I design and develop scalable backend systems using frameworks like FastAPI, Flask, integrating AI models through REST APIs. These systems handle authentication, data pipelines, model inference, logging, and deployment-ready architectures.",
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

  return (
    <div className="relative max-w-2xl mx-auto pt-12">
      <CommonHeader designTweek={"from-emerald-700/20 via-emerald-800/5"} title="FAQ'S SECTION" question="Got Questions?" answer="I've Got Answers!" />
      {faqS.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
