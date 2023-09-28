import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectsDesktop.css";
import Splitting from "splitting";

import PresentationAmazon from "../../../assets/image/Amazon/PresentationGIF.gif";
import PresentationSneakmart from "../../../assets/image/Sneakmart/PresentationGIF.gif";
import PresentationHDMI from "../../../assets/image/HDMI/PresentationGIF.gif";
import CursorView from "../../../assets/image/view-cursor.jpg";

gsap.registerPlugin(ScrollTrigger);

const transition = { duration: .6, ease: [.6, .01, -.05, .9] };

function setupAnimationForProject(projectClass, start, end, textStart, textEnd) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${projectClass}`,
      start: `${start} center`,
      end: `+=${end}%`,
      scrub: 1,
      toggleActions: "restart none none reverse"
    },
  });

  let tlText = gsap.timeline({
    scrollTrigger: {
      trigger: `.${projectClass}`,
      start: `${textStart} center`,
      end: `+=200`,
      scrub: 1,
      toggleActions: "restart none none reverse"
    },
  });

  tl.to(`.${projectClass}>.projects__photo__box`, { y: "100%" }, 0);
  tl.to(`.${projectClass}>.projects__photo img`, { transform: "scale(1)" }, 0);
  tlText.to(`.${projectClass} .char`, { y: "-100px", opacity: 1, stagger: 0.03 }, 0);
  tlText.to(`.${projectClass} .projects__number`, { backgroundPosition: "-100%" }, 0);
}

export default function ProjectsDesktop() {
  const panels = useRef([]);
  const panelsContainer = useRef();

  useEffect(() => {
    Splitting({ target: "[data-splitting]", by: "chars" });

    const totalPanels = panels.current.length;

    let verticalScroll = gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + panelsContainer.current.offsetWidth
      }
    });

    setupAnimationForProject("projects1", "top 40%", "40%", "top 25%", "200");
    setupAnimationForProject("projects2", "250%", "80%", "300%", "200");
    setupAnimationForProject("projects3", "510%", "80%", "550%", "200");
    setupAnimationForProject("projects4", "800%", "80%", "850%", "200");

    return () => verticalScroll.scrollTrigger.kill();
  }, []);
    // You can extend this array for more projects
    const projects = [
        {
            key: 'sneakmart',
            number: '001',
            title: 'Sneakmart',
            imgSrc: PresentationSneakmart,
            link: '/Sneakmart'
        },
        {
            key: 'amazon',
            number: '002',
            title: 'Amazon',
            imgSrc: PresentationAmazon,
            link: '/Amazon'
        },
        {
            key: 'HDMI',
            number: '003',
            title: 'HDMI Ping',
            imgSrc: PresentationHDMI,
            link: '/HDMI'
        }
    ];

    return (
        <div className="container" ref={panelsContainer} id="projects">
            {projects.map((project, index) => (
                <section className={`panel projects${index + 1}`} ref={(e) => panels.current[index] = e} key={project.key}>
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
                    <div data-cursor-color="#000" data-cursor-background-image={CursorView} data-cursor-size="8.3vw" className="projects__photo">
                        <Link className="projects__link" to={project.link} refresh="true">
                            <motion.img 
                                key={`projects__photo__${project.key}`}
                                whileHover={{ scale : 1.2 }} 
                                transition={transition} 
                                src={project.imgSrc}
                            />
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
    );
}