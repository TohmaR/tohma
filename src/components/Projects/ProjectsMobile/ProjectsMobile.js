import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom";
import "./ProjectsMobile.css"
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import ProjectsList from "../ProjectsList"

gsap.registerPlugin(ScrollTrigger);

function setupAnimationForProject(projectClass, start, end, textStart, textEnd) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${projectClass}`,
      start: `${start}`,
      end: `+=${end}`,
      scrub: 1,
      toggleActions: "restart none none reverse"
    },
  });

  let tlText = gsap.timeline({
    scrollTrigger: {
      trigger: `.${projectClass}`,
      start: `${textStart}`,
      end: `+=${textEnd}`,
      scrub: 1,
      toggleActions: "restart none none reverse"
    },
  });

  tl.to(`.${projectClass}>.projects__video__box`, { y: "100%" }, 0);
  tl.to(`.${projectClass}>.projects__video video`, { transform: "scale(1)" }, 0);
  tlText.to(`.${projectClass} .char`, { y: "-100px", opacity: 1, stagger: 0.03 }, 0);
  tlText.to(`.${projectClass} .projects__number`, { backgroundPosition: "-100%" }, 0);
}

export default function ProjectsDesktop (){
  const videoRef = useRef(null);
  useEffect(() => {
    if ( videoRef.current )
    {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.play();
    }
    Splitting({
      target: "[data-splitting]",
      by: "chars",
      key: null
    });
  
    setupAnimationForProject("projects1", "top 55%", "300", "top 40%", "100");
    setupAnimationForProject("projects2", "top 55%", "300", "top 40%", "100");
    setupAnimationForProject("projects3", "top 55%", "300", "top 40%", "100");
    
  }, []);

    return( 
      <div className="container" id="projects">
        {ProjectsList.map((project, index) => (
          <Link className="projects__link" to={project.link} refresh="true" aria-label="project link">
            <section className={`panel projects${index + 1}`} key={project.key}>
                <div className="projects__container">
                  <motion.div 
                      key={`projects__number__${project.key}`}
                      initial={{ y: 0, opacity : 1}}
                      exit={{ x: -70, opacity: 0 }}
                      transition={{ duration: .4, delay: 0.4 }}
                      className="projects__number">
                          <span>.</span>{project.number}
                  </motion.div>
                  <motion.h2 
                      key={`projects__title__${project.key}`}
                      transition={{ duration: .4, delay: 0.4 }}
                      exit={{ y: 50, opacity: 0 }}
                      className="projects__title" 
                      data-splitting>
                          <span>{project.title}</span>
                  </motion.h2>
                </div>
                <div className="projects__video">
                  <video
                    ref={videoRef}
                    width="100%" 
                    height="100%"
                    autoPlay
                    playsInline
                    loop
                    muted
                    preload="none"
                    loading="lazy"
                  >
                    <source src={project.videoMobile} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="projects__video__box"></div>
                <motion.div  
                  key={`projects__box__${project.key}`}
                  transition={{duration: 1.2, delay: -0.2, ease: [0.740, 0.120, 0.845, 0.210]}}
                  exit={{ y: "-90vh"}}
                  className="projects__video__boxExit">
                </motion.div>
            </section>
          </Link>
        ))}
      </div>
    )
}