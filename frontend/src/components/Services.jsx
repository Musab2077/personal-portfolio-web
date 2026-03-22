import { memo } from "react";
import { FaDev } from "react-icons/fa";
import { SiMlflow } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { VscRobot } from "react-icons/vsc";
import BoxWithService from "./BoxWithService";
import CommonHeader from "./CommonHeader";

const ICON_CLASS = "text-[#27AE60] mb-1";

const SERVICES = [
  {
    icon: <FaDev className={ICON_CLASS} aria-hidden="true" />,
    heading1: "Web",
    heading2: "Development",
    detail:
      "Making websites from engaging frontend designs to secure backend systems tailored to your business needs.",
  },
  {
    icon: <SiMlflow className={ICON_CLASS} aria-hidden="true" />,
    heading1: "AI",
    heading2: "Development",
    detail:
      "I build intelligent systems that automate tasks, enhance user experience, and drive data-driven decisions.",
  },
  {
    icon: <LuBrainCircuit className={ICON_CLASS} aria-hidden="true" />,
    heading1: "Machine Learning and",
    heading2: "Deep Learning",
    detail:
      "I develop intelligent models that solve real-world problems and enhance product capabilities.",
  },
  {
    icon: <VscRobot className={ICON_CLASS} aria-hidden="true" />,
    heading1: "ML-Ops",
    heading2: "",
    detail:
      "I handle deployment, monitoring, and scaling of machine learning models to ensure efficient AI solutions.",
  },
];

const Services = () => {
  return (
    <section className="my-20" aria-labelledby="services-heading">
      <CommonHeader
        id="services-heading"
        title="Services"
        question="What I Do"
      />
      {/* Use article elements for each service — improves crawlability */}
      <div
        className="lg:flex-row sm:grid xl:grid-cols-4 sm:grid-cols-2 flex-col justify-between place-items-center mt-16"
        role="list"
      >
        {SERVICES.map((service, index) => (
          <article
            key={service.heading1}
            role="listitem"
            aria-label={`${service.heading1} ${service.heading2}`.trim()}
            className={index >= 2 ? "sm:mt-10 xl:mt-0" : ""}
          >
            <BoxWithService
              icon={service.icon}
              heading1={service.heading1}
              heading2={service.heading2}
              detail={service.detail}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(Services);
