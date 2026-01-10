"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./hooks/useOutsideClick";
import "../css/stack.css";

export  {Stacks};
function Stacks() {
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setHovered(false);
      }
    }

    if (hovered && typeof hovered === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hovered]);

  useOutsideClick(ref, () => setHovered(null));

  const stacks = [
    {
      name: 'Front-end Development',
      description:
        'Development of modern and responsive web interfaces using React, JavaScript, HTML5, and CSS3. Experience with Next.js, TailwindCSS, Bootstrap, Material UI, and Framer Motion to create interactive, accessible, and high-performance experiences.',
    },
    {
      name: 'Back-end Development',
      description:
        'Development of RESTful APIs and microservices with Node.js, Spring Boot, and Flask. Integration with PostgreSQL and MySQL databases, as well as experience in containerizing applications with Docker.',
    },
    {
      name: 'DevOps',
      description:
        'Automation of deployments, environment versioning, continuous integration, and continuous delivery (CI/CD). Experience with Docker, environment management, and infrastructure best practices.',
    },
    {
      name: 'Quality Assurance (QA)',
      description:
        'Execution of unit and integration tests using Cypress, as well as manual testing, stress testing, and security reviews to ensure application quality and robustness.',
    },
    {
      name: 'Git',
      description:
        'Efficient version control with Git, including branch creation, merges, conflict resolution, and collaboration in agile development teams.',
    },
  ];

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div className="stack-container">
        <h2>Areas of Expertise</h2>
        <div className="stack-list">
          {stacks.map((stack, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHovered(stack.name)}
              onMouseLeave={() => setHovered(null)}
              className="stack-card cursor-pointer">
              <div className="stack-name">{stack.name}</div>
              <AnimatePresence>
                {hovered === stack.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="stack-description">
                    {stack.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


