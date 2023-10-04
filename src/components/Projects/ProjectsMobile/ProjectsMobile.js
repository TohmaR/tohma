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

const transition = {duration: .6, ease: [.6, .01, -.05, .9]}

export default function ProjectsDesktop (){
  useEffect(() => {
    Splitting({
      /* target: String selector, Element, Array of Elements, or NodeList */
      target: "[data-splitting]",
      /* by: String of the plugin name */
      by: "chars",
      /* key: Optional String to prefix the CSS variables */
      key: null
    });
  

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects1",
        start: "top 45%",
        end: "+=300",
        scrub: 1,
        toggleActions: "restart none none reverse"
      },
    });

    let tl1Text = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects1",
        start: "top 25%",
        end: "+=100",
        scrub: 1,
        toggleActions: "restart none none reverse"
      },
    });
    
    tl1.to(".projects1>.projects__photo__box",{y: "100%"},0)
    tl1.to(".projects1>.projects__photo img",{transform: "scale(1)"},0)

    tl1Text.to(".projects1 .char",{y:"-100px", opacity:1, stagger:0.05,},0)
    tl1Text.to(".projects1 .projects__number",{backgroundPosition: "-100%"},0)



    let tl2= gsap.timeline({
      scrollTrigger: {
        trigger: ".projects2",
        start: "top 45%",
        end: "+=300",
        scrub: 1,
        toggleActions: "restart none none reverse"
      },
    });
    
    let tl2Text = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects2",
        start: "top 25%",
        end: "+=100",
        scrub: 1,
        toggleActions: "restart none none reverse"
      },
    });

    tl2.to(".projects2>.projects__photo__box",{y: "100%"},0)
    tl2.to(".projects2>.projects__photo img",{transform: "scale(1)"},0);
    tl2Text.to(".projects2 .char",{y:"-100px", opacity:1, stagger:0.03,},0)
    tl2Text.to(".projects2 .projects__number",{backgroundPosition: "-100%"},0)


    let tl3= gsap.timeline({
      scrollTrigger: {
        trigger: ".projects3",
        start: "top 45%",
        end: "+=300",
        scrub: 1,
        toggleActions: "restart none none reverse"
      },
    });

    let tl3Text = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects3",
        start: "top 25%",
        end: "+=100",
        scrub: 1,
        toggleActions: "restart none none reverse"
      },
    });
    
    tl3.to(".projects3>.projects__photo__box",{y: "100%"},0)
    tl3.to(".projects3>.projects__photo img",{transform: "scale(1)"},0);
    tl3Text.to(".projects3 .char",{y:"-100px", opacity:1, stagger:0.03,},0)
    tl3Text.to(".projects3 .projects__number",{backgroundPosition: "-100%"},0)

    let tl4= gsap.timeline({
      scrollTrigger: {
        trigger: ".projects4",
        start: "top 45%",
        end: "+=300",
        scrub: 1,
        toggleActions: "restart none none reverse"
      },
    });

    let tl4Text = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects4",
        start: "top 25%",
        end: "+=100",
        scrub: 1,
        toggleActions: "restart none none reverse"
      },
    });
    
    tl4.to(".projects4>.projects__photo__box",{y: "100%"},0)
    tl4.to(".projects4>.projects__photo img",{transform: "scale(1)"},0);
    tl4Text.to(".projects4 .char",{y:"-100px", opacity:1, stagger:0.03,},0)
    tl4Text.to(".projects4 .projects__number",{backgroundPosition: "-100%"},0)

  }, []);

    return( 
      <div className="container" id="projects">
        {ProjectsList.map((project, index) => (
            <section className={`panel projects${index + 1}`} key={project.key}>
                <div className="projects__container">
                    <motion.div 
                        key={`projects__number__${project.key}`}
                        transition={{ duration: .2, delay: 0.4 }}
                        exit={{ y: -50, opacity: 0 }}
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
                    <Link className="projects__link" to={project.link} refresh="true" aria-label="project link">
                      <motion.video
                        width="100%" 
                        height="100%"
                        autoPlay
                        playsInline
                        loop
                        muted
                        poster="path/to/your/posterimage.jpg" 
                        preload="none"
                        loading="lazy"
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </motion.video>
                    </Link>
                </div>
                <div className="projects__photo__box"></div>
                <motion.div  
                    key={`projects__box__${project.key}`}
                    transition={{duration: 1.2, delay: -0.2, ease: [0.740, 0.120, 0.845, 0.210]}}
                    exit={{ y: "-90vh"}}
                    className="projects__photo__boxExit">
                </motion.div>
            </section>
        ))}
      </div>

    )
}