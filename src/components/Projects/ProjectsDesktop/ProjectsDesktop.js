import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, cubicBezier } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectsDesktop.css";
import ProjectsList from "../ProjectsList";
import CursorView from "../../../assets/image/view-cursor.jpg";

gsap.registerPlugin(ScrollTrigger);

export function LazyLoadVideo({ src }) {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const observerCallback = useCallback((entries, observer) => {
    if (entries[0].isIntersecting) {
      setIsInView(true);
      observer.unobserve(videoRef.current);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '100px',
    });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, [observerCallback]);

  return (
    <video
      ref={videoRef}
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
      {isInView && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}

const AnimatedTitle = ({ title }) => {
  const splitTitle = title.split('');

  return (
    <h2 className="projects__title">
      {splitTitle.map((char, index) => (
        <motion.span
          key={`char-${index}`}
          exit={{ transform: "translate3d(0px, 110%, 0px" }}
          transition={{ duration: 0.35, delay: ((splitTitle.length - index - 1) * 0.04) + 0.25 }}
        >
          {char}
        </motion.span>
      ))}
    </h2>
  );
};

function setupAnimationForProject(projectClass, start, end, containerAnimation, horizontal) {
  const commonSettings = {
    scrub: 1,
    toggleActions: "restart none none reverse",
    start: start,
    end: end
  };

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${projectClass}`,
      horizontal: horizontal,
      containerAnimation: containerAnimation,
      ...commonSettings,
    },
  });

  let tlText = gsap.timeline({
    scrollTrigger: {
      trigger: `.${projectClass}`,
      horizontal: horizontal,
      containerAnimation: containerAnimation,
      ...commonSettings,
    },
  });

  tl.to(`.${projectClass}>.projects__photo__box`, { y: "100%" }, 0);
  tl.to(`.${projectClass}>.projects__video video`, { transform: "scale(1)" }, 0);
  tlText.fromTo(`.${projectClass} .projects__title span`, { transform: "translate3d(0px, 105%, 0px)", opacity: 1, stagger: 0.03 }, { transform: "translate3d(0px, 0%, 0px)", opacity: 1, stagger: 0.03 }, 0);
  tlText.to(`.${projectClass} .projects__number`, { backgroundPosition: "-100%" }, 0);

  return { tl, tlText };
}

export default function ProjectsDesktop() {
  const panels = useRef([]);
  const panelsContainer = useRef();
  const timelines = useRef([]);

  useEffect(() => {

    ScrollTrigger.update();

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

    const animation1 = setupAnimationForProject("projects1", "top 40%", "+=300", null, false);
    const animation2 = setupAnimationForProject("projects2", "left 20%", "+=300", verticalScroll, true);
    const animation3 = setupAnimationForProject("projects3", "left 20%", "+=300", verticalScroll, true);
    const animation4 = setupAnimationForProject("projects4", "left 30%", "+=300", verticalScroll, true);

    timelines.current = [animation1, animation2, animation3, animation4];

    return () => {
      verticalScroll.scrollTrigger.kill();
      timelines.current.forEach(({ tl, tlText }) => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        if (tlText.scrollTrigger) tlText.scrollTrigger.kill();
      });
    };
  }, []);

  return (
    <>
      <div id="projects"></div>
      <div className="container" ref={panelsContainer}>
        {ProjectsList.map((project, index) => (
          <section className={`panel projects${index + 1}`} ref={(e) => panels.current[index] = e} key={project.key}>
            <div className="projects__container">
              <div
                className="projects__number">
                  <motion.div
                   key={`projects__number__${project.key}`}
                   transition={{ duration: 1, delay: 0.28 }}
                   exit={{ y: -100 }}
                   >
                    <span>.</span>{project.number}
                  </motion.div>
              </div>
              <AnimatedTitle title={project.title} />
            </div>
            <div data-cursor-color="#000" data-cursor-background-image={CursorView} data-cursor-size="5.5vw" className="projects__video">
              <Link className="projects__link" to={project.link} refresh="true" aria-label="project link">
                <LazyLoadVideo src={project.videoDesktop} />
              </Link>
            </div>
            <div className="projects__photo__box"></div>
            <motion.div
              key={`projects__box__${project.key}`}
              transition={{ duration: 1.2, delay: -0.6, ease: [0.740, 0.120, 0.845, 0.210] }}
              exit={{ transform: "translate3d(0px, -110%, 0px)" }}
              className="projects__photo__boxExit">
            </motion.div>
          </section>
        ))}
      </div>
    </>
  );
}