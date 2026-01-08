"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./hooks/useOutsideClick";
import "../css/Project.css";

const ExpandableProjects = ({ projects }) => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
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
      <h2 style={{ textAlign: "center", color: "var(--color-pink1)", margin: "2rem 0 1.5rem 0", fontWeight: 700, fontSize: "2rem", letterSpacing: "1px" }}>
        Trabalhos Recentes
      </h2>
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
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`title-${active.title}-${id}`} className="p-4">
                <h3 className="font-bold text-neutral-700 dark:text-neutral-200 text-xl">
                  {active.title}
                </h3>
                {Array.isArray(active.desc) ? (
                  <ul className="text-neutral-600 dark:text-neutral-400 mt-2">
                    {active.desc.map((item, index) => (
                      <li key={index} className="mb-1">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-neutral-600 dark:text-neutral-400 mt-2">{active.desc}</p>
                )}
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={index}
            onClick={() => setActive(project)}
            className="project-card cursor-pointer">
            <div className="project-card-title">{project.title}</div>
            {Array.isArray(project.desc) ? (
              <div className="project-card-desc">
                <span style={{ display: "block", marginBottom: 6 }}>{project.desc[0]}</span>
              </div>
            ) : (
              <div className="project-card-desc">{project.desc}</div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ExpandableProjects;