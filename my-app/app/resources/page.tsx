"use client";
import React, { useEffect, useId, useRef, useState, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function ExpandableCardDemo() {
  const searchParams = useSearchParams();
  const result = searchParams?.get("result");

  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            ></motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="w-[330px]">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className=" w-[110px] px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 pb-4 relative px-4 h-40 overflow-y-auto">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base md:h-fit flex flex-col items-start gap-4 dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      {result && (
        <div className="max-w-2xl mx-auto w-full gap-4 mb-6">
          {result === "goodEnd" ? (
            <>
              <h1 className="text-2xl font-bold">
                Congratulations! You said no to drugs!
              </h1>
              <h1 className="text-xl">
                Help your friends to seek help through these hotlines
              </h1>
            </>
          ) : result === "badEnd" ? (
            <>
              <h1 className="text-2xl font-bold">
                Oh no! You are addicted to drugs!
              </h1>
              <h1 className="text-xl">
                Your friend recommended these hotlines for you to seek help
              </h1>
            </>
          ) : null}
        </div>
      )}

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExpandableCardDemo />
    </Suspense>
  );
}

const cards = [
  {
    description: "Email: secretariat@ncada.org.sg",
    title: "National Council Against Drug Abuse",
    src: "/Anti Drug Ribbon.png",
    ctaText: "Learn More",
    ctaLink: "https://www.ncada.org.sg/",
    content: () => {
      return (
        <p>
          Through its public campaigns, NCADA works to raise awareness about the
          dangers of drug abuse and the impact it has on individuals, families,
          and society. They create educational materials, organize workshops,
          and run media campaigns to inform the public about drug abuse
          prevention. For individuals who are already struggling with addiction,
          NCADA directs them to other resources and programs for rehabilitation
          and reintegration.
        </p>
      );
    },
  },
  {
    description: "Hotline: 1800-325-6666",
    title: "Central Narcotics Bureau",
    src: "/cnb-logo.png",
    ctaText: "Learn More",
    ctaLink: "https://www.cnb.gov.sg/",
    content: () => {
      return (
        <p>
          The CNB is primarily focused on enforcement, but it also plays a role
          in education and support. Through its public awareness campaigns, CNB
          educates the public on the dangers of drugs. While CNB enforces
          anti-drug laws and arrests offenders, it also refers those involved in
          drug-related offenses to rehabilitation programs.
        </p>
      );
    },
  },

  {
    description: "Hotline: 1800-223-1313",
    title: "Health Promotion Board",
    src: "/HPB.png",
    ctaText: "Learn More",
    ctaLink: "https://www.hpb.gov.sg/",
    content: () => {
      return (
        <p>
          Public Campaigns: HPB runs educational campaigns, advertising, and
          outreach programs in schools, workplaces, and the community to prevent
          drug abuse.<br></br> <br></br>
          Health Education: They provide information on healthy lifestyles,
          including strategies for avoiding drug abuse.<br></br> <br></br>
          Referrals to Support Services: HPB helps individuals who need more
          specific support by referring them to relevant services such as SANA,
          CNB, or SAMH.
        </p>
      );
    },
  },
  {
    description: "Hotline: 1800-111-2222 or + 65 63240024",
    title: "Counseling and Support Services",
    src: "/Councelling-Online.png",
    ctaText: "Learn More",
    ctaLink: "https://www.msf.gov.sg/what-we-do/famatfsc/family-counselling",
    content: () => {
      return (
        <p>
          Family Service Centres (FSCs) <br></br>
          How They Help: FSCs offer a wide range of services for families
          affected by drug abuse, including:<br></br>
          Family Counseling: FSCs provide counseling to help families understand
          addiction and develop strategies to support loved ones in recovery.{" "}
          <br></br>
          Crisis Intervention: FSCs offer immediate assistance in times of
          crisis, such as when a family member is in danger of relapse or
          involved in a drug-related incident.<br></br>
        </p>
      );
    },
  },
  {
    description: "Tel: 6732 1122 Email: sana@sana.org.sg",
    title: "The singapore Anti-Narcotics Association (SANA)",
    src: "/SANA.png",
    ctaText: "Learn More",
    ctaLink: "https://www.sana.org.sg/",
    content: () => {
      return (
        <p>
          Counseling: Individual and group counseling to help people struggling
          with drug addiction.<br></br>
          Rehabilitation Programs: Structured rehabilitation services to help
          people recover from drug addiction, including inpatient and outpatient
          care.<br></br>
          Outreach and Education: SANA runs educational programs to raise
          awareness about the dangers of drugs and prevent addiction.<br></br>
          Family Support: SANA provides counseling and guidance to families of
          individuals with drug addiction, helping them cope with the emotional
          and practical challenges of supporting a loved one in recovery.
        </p>
      );
    },
  },
  {
    description: "For treatment and rehabilitation",
    title: "Drug Rehabilitation Centre (DRC)",
    src: "/Drugs.jpg",
    ctaText: "Learn More",
    ctaLink:
      "https://www.sps.gov.sg/files/prison%20news/prison-news-march-2021.pdf",
    content: () => {
      return (
        <p>
          Inpatient Care: A structured and controlled environment for
          individuals to undergo rehabilitation.<br></br>
          Counseling and Therapy: Comprehensive counseling programs that address
          the psychological aspects of addiction, including individual and group
          therapy sessions.<br></br>
          Vocational and Life Skills Training: Programs to equip individuals
          with the skills necessary for reintegration into society, including
          vocational training and social skills development.<br></br>
          Reintegration Support: Support services to help individuals
          reintegrate into society after rehabilitation, such as housing and
          employment assistance.
        </p>
      );
    },
  },
  {
    description: "Hotline: 1800-283-7019",
    title: "Singapore Association for Mental Health (SAMH)",
    src: "/SAMH logo.PNG",
    ctaText: "Learn More",
    ctaLink: "https://www.samhealth.org.sg/",
    content: () => {
      return (
        <p>
          Psychiatric and Psychological Support: Counseling and therapy to help
          individuals deal with both addiction and the mental health issues that
          may contribute to their substance abuse.<br></br>
          Holistic Care: SAMH offers a holistic approach that integrates mental
          health support with addiction counseling, ensuring that individuals
          receive comprehensive care.<br></br>
          Community Support: SAMH runs support groups and provides advocacy for
          people with mental health and addiction challenges.
        </p>
      );
    },
  },
];
