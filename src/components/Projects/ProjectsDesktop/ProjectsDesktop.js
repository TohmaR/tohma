import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom";
import "./ProjectsDesktop.css"
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

//image
import PresentationAmazon from "../../../assets/image/Amazon/PresentationGIF.gif";
import PresentationSneakmart from "../../../assets/image/Sneakmart/PresentationGIF.gif";
import PresentationHDMI from "../../../assets/image/HDMI/PresentationGIF.gif";
import CursorView from "../../../assets/image/view-cursor.jpg"

gsap.registerPlugin(ScrollTrigger);

const transition = {duration: .6, ease: [.6, .01, -.05, .9]}

export default function ProjectsDesktop (){
    const panels = useRef([]);
    const panelsContainer = useRef();
    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    };

    useEffect(() => {

      Splitting({
        /* target: String selector, Element, Array of Elements, or NodeList */
        target: "[data-splitting]",
        /* by: String of the plugin name */
        by: "chars",
        /* key: Optional String to prefix the CSS variables */
        key: null
      });
      const totalPanels = panels.current.length;

     let verticalScroll =  gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 1,
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + panelsContainer.current.offsetWidth
      }
      });

      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects1",
          start: "top 40%",
          end: "+=40%",
          scrub: 1,
          toggleActions: "restart none none reverse"
        },
      });

      let tl1Text = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects1",
          start: "top 25%",
          end: "+=200",
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
          start: "250% center",
          end: "+=80%",
          scrub: 1,
          toggleActions: "restart none none reverse"
        },
      });
      
      let tl2Text = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects2",
          start: "300% center",
          end: "+=200",
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
          start: "510% center",
          end: "+=80%",
          scrub: 1,
          toggleActions: "restart none none reverse"
        },
      });

      let tl3Text = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects3",
          start: "550% center",
          end: "+=200",
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
          start: "800% center",
          end: "+=80%",
          scrub: 1,
          toggleActions: "restart none none reverse"
        },
      });

      let tl4Text = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects4",
          start: "850% center",
          end: "+=200",
          scrub: 1,
          toggleActions: "restart none none reverse"
        },
      });
      
      tl4.to(".projects4>.projects__photo__box",{y: "100%"},0)
      tl4.to(".projects4>.projects__photo img",{transform: "scale(1)"},0);
      tl4Text.to(".projects4 .char",{y:"-100px", opacity:1, stagger:0.03,},0)
      tl4Text.to(".projects4 .projects__number",{backgroundPosition: "-100%"},0)

      return () => verticalScroll.scrollTrigger.kill();
    }, []);

    

    return( 
      <div className="container" ref={panelsContainer} id="projects">
        <section className="panel projects1" ref={(e) => createPanelsRefs(e, 0)} >
          <motion.div 
            key="projects__number__sneakmart"
            transition={{ duration: .2, delay: 0.4 }}
            exit={{ y: -50, opacity: 0 }}
            className="projects__number">
              <span>.</span>001
          </motion.div>
          <div data-cursor-color="#000" data-cursor-background-image={CursorView} data-cursor-size="160px" className="projects__photo">
            <Link className="projects__link" to="/Sneakmart" refresh="true">
              <motion.img 
                key="projects__photo__sneakmart"
                whileHover={{ scale : 1.2 }} 
                transition={transition} 
                src={PresentationSneakmart}
              />
            </Link>
          </div>
          <div className="projects__photo__box"></div>
          <motion.div  
            key="projects__box__sneakmart"
            transition={{duration: 1.2, delay: -0.2, ease: [0.740, 0.120, 0.845, 0.210]}}
            exit={{ y: "-90vh"}}
            className="projects__photo__boxExit">
          </motion.div>
          <motion.h2 
            key="projects__title__sneakmart"
            transition={{ duration: .4, delay: 0.4 }}
            exit={{ y: 50, opacity: 0 }}
            className="projects__title" 
            data-splitting>
              <span>Sneakmart</span>
          </motion.h2>
        </section>
        <section className="panel projects2" ref={(e) => createPanelsRefs(e, 1)} >
          <motion.div 
            key="projects__number__sneakmart"
            transition={{ duration: .4, delay: 0.3 }}
            exit={{ y: -50, opacity: 0 }}
            className="projects__number">
              <span>.</span>002
          </motion.div>
          <div data-cursor-color="#000" data-cursor-background-image={CursorView} data-cursor-size="160px" className="projects__photo">
            <Link className="projects__link" to="/Amazon" refresh="true">
              <motion.img 
                key="projects__photo__amazon"
                whileHover={{ scale : 1.2 }} 
                transition={transition} 
                src={PresentationAmazon}
              />
            </Link>
          </div>
          <div className="projects__photo__box"></div>
          <motion.div  
            key="projects__box__amazon"
            transition={{duration: .8, ease: [0.740, 0.120, 0.845, 0.210]}}
            exit={{ y: "-90vh"}}
            className="projects__photo__boxExit">
          </motion.div>
          <motion.h2 
            key="projects__title__amazon"
            transition={{ duration: .2, delay: 0.4 }}
            exit={{ y: 50, opacity: 0 }}
            className="projects__title" 
            data-splitting>
              <span>amazon</span>
          </motion.h2>
        </section>
        <section className="panel projects3" ref={(e) => createPanelsRefs(e, 2)}>
          <motion.div 
            key="projects__number__HDMI"
            transition={{ duration: .2, delay: 0.4 }}
            exit={{ y: -50, opacity: 0 }}
            className="projects__number">
              <span>.</span>003
          </motion.div>
          <div data-cursor-color="#000" data-cursor-background-image={CursorView} data-cursor-size="160px" className="projects__photo">
            <Link className="projects__link" to="/HDMI" refresh="true">
            <motion.img 
                key="projects__photo__sneakmart"
                  whileHover={{ scale : 1.2 }} 
                  transition={transition} 
                  src={PresentationHDMI}
                />
            </Link>
          </div>
          <div className="projects__photo__box"></div>
          <motion.h2 
            exit={{opacity: 0}} 
            transition={transition} 
            className="projects__title" 
            data-splitting>
              <span>HDMI Ping</span>
          </motion.h2>
        </section>
        <section className="panel projects4" ref={(e) => createPanelsRefs(e, 3)}>
          <div className="projects__number"><span>.</span>004</div>
          <div data-cursor-color="#000" data-cursor-background-image={CursorView} data-cursor-size="160px" className="projects__photo">
            <img src="https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100"/>
          </div>
          <div className="projects__photo__box"></div>
          <h2 className="projects__title" data-splitting><span>Hdmi Ping</span></h2>
        </section>
      </div>
    )
}