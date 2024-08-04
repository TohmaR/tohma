import React, {useEffect, useRef} from "react"
import gsap from "gsap";
import { Link } from "react-router-dom";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
import Photo1 from "../../assets/image/Amazon/end.webp";
import VideoDesktop from "../../assets/image/Amazon/amazonVideoDesktop.mp4";
import VideoMobile from "../../assets/image/Amazon/amazonVideoMobile.mp4";
import MobileCenterEffectImg from "../../assets/image/Amazon/mobile-center-effect.png";
import MobileSideEffectImg from "../../assets/image/Amazon/mobile-side-effect.png";
import Responsive from "../../assets/image/Amazon/responsive.jpg";
import NextProject from "../../assets/image/JeanProuve/end.jpg";

import "./Project.css";

const AnimatedTitle = ({ title, className }) => {
    const splitTitle = title.split('');
  
    return (
      <div className={className}>
        {splitTitle.map((char, index) => (
          <motion.span
            key={`char-${index}`}
            exit={{ transform: "translate3d(0px, 110%, 0px" }}
            transition={{ duration: 0.4, delay: (splitTitle.length - index - 1) * 0.03}}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
};

function Amazon(){
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
    const MobileEffect = useRef();
    const MobileCenterEffect = useRef();
    const MobileSideEffect = useRef();
    const { t } = useTranslation();

    useEffect(() => {
        let tlPhoto = gsap.timeline();
        let tlPhotobox = gsap.timeline();
        let tlText = gsap.timeline();
        let tlIndicator = gsap.timeline();
        let tlLogo = gsap.timeline();
        tlLogo.delay(.3);  
        tlText.delay(.3);
        tlIndicator.delay(.5); 
        tlPhoto.fromTo(".project__video--enter video",{ transform: "scale(1.4)"},{ duration: 1, transform: "scale(1)"});
        tlPhotobox.to(".project__photo__box",{ duration: 1, y: "100%", ease:"power3.inOut"});
        tlText.fromTo(".project__title span",{ transform: "translate3d(0px, 110%, 0px)" },{duration: .6, transform: "translate3d(0px, 0%, 0px)", stagger:0.03, ease:"power3.inOut"},0)
        tlText.to(".project__container:nth-child(3)",{autoAlpha: 1, ease:"power3.inOut"},0)
        tlIndicator.fromTo(".project__scrollIndicator",{ opacity: 0, y: 100}, { duration: 0.8, opacity: 1, y: 0},0);
        tlLogo.to(".project__logo path", { opacity: 1, stagger: 0.1})

        let tlMobileEffect= gsap.timeline({
            scrollTrigger: {
              trigger: ".MobileEffect",
              scrub: 1,
              toggleActions: "restart none none reverse"
            },
        });

   
        tlMobileEffect.to(".MobileCenterEffect", {y: -65, x: -7},0)
        tlMobileEffect.to(".MobileSideEffect", {y: 65, x: 110},0)

        gsap.utils.toArray(".project__parallax--container").forEach(function(container) {
            let image = container.querySelector(".project__parallax--img");
          
            gsap.to(image, {
                y: () => image.offsetHeight - container.offsetHeight,
                ease: "none",
                scrollTrigger: {
                  trigger: container,
                  scrub: 1,
                  pin: false,
                  invalidateOnRefresh: true
                },
            }); 
        });

        return () => {
            tlPhoto.kill();
            tlPhotobox.kill();
            tlText.kill();
            tlIndicator.kill();
          };
    })
    return(
        <div className="project">
            <div className="project__logo">
                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 -100 400 600" style={{enableBackground: `new 0 0 1000 400`}}>
                    <linearGradient id="Gradient" x1="0%" x2="0%" y1="0%" y2="80%" gradientUnits="userSpaceOnUse">
                        <stop offset="5%" stopColor="#e9ea0c" />
                        <stop offset="100%" stopColor="#14e97c" />
                    </linearGradient>
                    <motion.g
                        key="project__logo__g1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: .5 }}
                    >
                        <path className="logoLetter1" d="M4,11h144.16v32.6h-1.39c0-4.34-0.88-8.39-2.64-12.13c-1.76-3.74-4.12-7-7.08-9.78c-2.96-2.78-6.44-5-10.42-6.65c-3.98-1.65-8.29-2.48-12.92-2.48h-8.33c-2.04,0-3.75,0.61-5.14,1.83c-1.39,1.22-2.08,2.78-2.08,4.69v2.61v29.47v27.38v74.84v6v26.08c0,1.92,0.69,3.48,2.08,4.69c1.39,1.22,3.1,1.83,5.14,1.83v1.56h-4.44h-9.21H90.9H61.27h-0.84h-9.21h-4.17v-1.56c2.04,0,3.7-0.61,5-1.83c1.29-1.21,1.94-2.78,1.94-4.69v-26.08v-6V78.54V51.16V21.69v-2.61c0-1.91-0.65-3.48-1.94-4.69c-1.3-1.21-2.96-1.83-5-1.83h-8.61c-4.44,0-8.71,0.83-12.78,2.48c-4.08,1.65-7.6,3.87-10.56,6.65c-2.96,2.78-5.33,6.04-7.08,9.78c-1.76,3.74-2.64,7.78-2.64,12.13H4V11z"/>
                    </motion.g>
                    <motion.g
                        key="project__logo__g2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: .4 }}
                    >
                        <path className="logoLetter2"  d="M178.42,71.16c9.81,0,18.61,1.7,26.39,5.09c7.78,3.39,14.4,7.95,19.86,13.69c5.46,5.74,9.67,12.52,12.64,20.34c2.96,7.82,4.44,16.17,4.44,25.03c0,8.87-1.49,17.21-4.44,25.03c-2.96,7.82-7.18,14.65-12.64,20.47c-5.46,5.83-12.08,10.43-19.86,13.82c-7.78,3.39-16.57,5.09-26.39,5.09c-9.82,0-18.66-1.69-26.53-5.09c-7.87-3.39-14.54-7.99-20-13.82c-5.46-5.82-9.63-12.65-12.5-20.47c-2.87-7.82-4.3-16.17-4.3-25.03c0-8.87,1.43-17.21,4.3-25.03c2.87-7.82,7.04-14.6,12.5-20.34c5.46-5.74,12.13-10.3,20-13.69C159.76,72.86,168.6,71.16,178.42,71.16z M198.14,118.63c0-15.82-1.62-27.34-4.86-34.55c-3.24-7.21-8.19-10.82-14.86-10.82c-6.67,0-11.62,3.61-14.86,10.82c-3.24,7.22-4.86,18.74-4.86,34.55v16.69v16.95c0,15.82,1.62,27.34,4.86,34.55c3.24,7.22,8.19,10.82,14.86,10.82c6.67,0,11.62-3.61,14.86-10.82c3.24-7.21,4.86-18.73,4.86-34.55v-16.95V118.63z"/>
                    </motion.g>
                    <motion.g
                        key="project__logo__g3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: .3 }}
                    >
                        <path className="logoLetter3" d="M247.04,329.49c1.29,1.22,2.96,1.83,5,1.83v1.56h-3.89h-23.05h-31.11v-1.56c2.04,0,3.7-0.61,5-1.8c1.29-1.21,1.94-2.78,1.94-4.69v-18.51v-74.06c0-7.47-1.42-12.56-4.27-15.26c-2.84-2.69-6.28-4.04-10.31-4.0c-2.94,0-6.06,0.7-9.36,2.09c-3.3,1.39-6.16,2.96-8.56,4.69c2.59,5.22,3.89,11.3,3.89,18.25v72.23v14.6c0,1.92,0.62,3.48,1.87,4.6c1.24,1.22,2.84,1.83,4.8,1.83v1.56h-3.61h-23.33h-31.11v-1.56c2.03,0,3.75-0.61,5.14-1.83c1.39-1.21,2.08-2.78,2.08-4.69v-18.5v-74.06c0-6.08-1.02-10.6-3.05-13.56c-2.04-2.95-4.58-4.78-7.64-5.48c-3.06-0.69-6.3-0.52-9.72,0.52c-3.43,1.04-6.53,2.35-9.31,3.9c0.55,2.96,0.83,6.17,0.83,9.65v57.89v8.34v31.29c0,1.92,0.65,3.48,1.94,4.69c1.29,1.22,2.96,1.83,5,1.83v1.56h-3.89H79.26H48.1v-1.56c2.04,0,3.7-0.61,5-1.83c1.29-1.21,1.94-2.78,1.94-4.69V293.5v-81.1c0-1.91-0.65-3.48-1.94-4.69c-1.3-1.21-2.96-1.83-5-1.8v-1.56h31.11c5.37,0,9.53,0.91,12.5,2.74c2.96,1.83,5,4.82,6.11,9c6.29-3.65,12.92-6.52,19.86-8.61c6.94-2.09,13.56-3.13,19.86-3.1c6.29,0,12.03,1.09,17.22,3.26c5.18,2.18,9.35,5.7,12.5,10.56c6.67-4.52,13.89-7.95,21.67-10.3c7.78-2.35,14.9-3.52,21.39-3.5c4.81,0,9.31,0.61,13.47,1.83c4.17,1.22,7.82,3.17,10.97,5.87c3.15,2.7,5.65,6.17,7.5,10.43c1.85,4.26,2.78,9.43,2.78,15.52v72.2v14.6C245.09,326.71,245.74,328.27,247.04,329.49z"/>
                    </motion.g>
                    <motion.g
                        key="project__logo__g4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: .2 }}
                    >
                        <path className="logoLetter4" d="M365.53,244.77c1.16,1.22,2.65,1.83,4.47,1.83v1.56h-3.23h-20.91h-27.9v-1.56c1.78,0,3.28-0.61,4.5-1.83c1.22-1.21,1.82-2.78,1.82-4.69v-18.51V147.5c0-5.91-0.87-10.3-2.61-13.17c-1.74-2.87-3.94-4.69-6.58-5.48c-2.65-0.78-5.47-0.74-8.45,0.13c-2.98,0.87-5.72,2.09-8.2,3.65v67.8v8.34v31.29c0,1.92,0.59,3.48,1.77,4.69c1.18,1.22,2.69,1.83,4.55,1.83v1.56h-3.49H280.6h-27.88v-1.56c1.82,0,3.31-0.61,4.47-1.83c1.16-1.21,1.74-2.78,1.74-4.69v-31.29v-85.53v-18.25V73.7c0-1.91-0.58-3.48-1.74-4.69c-1.16-1.21-2.65-1.83-4.47-1.83v-1.56h27.83c6.62,0,11.26,1.74,13.91,5.22c2.65,3.48,3.98,9.39,3.98,17.73v15.91v17.47l0.09,8.61c6.81-4.34,14.03-7.47,21.67-9.39c7.64-1.91,14.7-2.17,21.17-0.78c6.48,1.39,11.83,4.69,16.07,9.91c4.23,5.22,6.35,12.87,6.35,22.95v72.23v14.6C363.79,241.99,364.37,243.55,365.53,244.77z"/>
                    </motion.g>
                    <motion.g
                        key="project__logo__g5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: .1 }}
                    >
                        <path className="logoLetter5" d="M364.01,385.21c0,2.03,0.65,3.68,1.94,4.97c1.29,1.29,2.96,1.93,5,1.93v1.66h-31.11c-5.93,0-10.37-1.1-13.33-3.31c-2.96-2.21-4.91-5.89-5.83-11.04c-3.71,4.05-8.24,7.31-13.61,9.8c-5.37,2.48-11.11,4-17.22,4.55c-5.93,0.55-11.48,0.14-16.67-1.24c-5.19-1.38-9.68-3.68-13.47-6.9c-3.8-3.22-6.72-7.22-8.75-12.01c-2.04-4.78-2.69-10.3-1.94-16.56c0.55-5.52,2.13-10.21,4.72-14.08c2.59-3.86,5.74-7.22,9.45-10.07c3.7-2.85,7.87-5.24,12.5-7.18c4.63-1.93,9.35-3.63,14.17-5.11c9.81-2.94,16.9-5.89,21.25-8.83c4.35-2.94,7.26-5.7,8.75-8.28v-13.8c0-10.49-1.14-18.31-3.42-23.46c-2.28-5.15-6.89-7.27-13.82-6.35c-8.5,0.92-13.31,3.86-14.42,8.83c-0.56,2.58,0,4.74,1.67,6.49c1.67,1.75,3.24,3.36,4.72,4.83c2.04,2.03,3.61,4.33,4.72,6.9c1.11,2.58,1.67,5.43,1.67,8.56c0,6.07-2.14,11.23-6.43,15.46c-4.29,4.23-9.51,6.35-15.65,6.35c-6.15,0-11.37-2.11-15.66-6.35c-4.29-4.23-6.43-9.38-6.43-15.46c0-5.15,1.39-10.03,4.17-14.63c2.78-4.6,6.62-8.6,11.53-12.01c4.9-3.4,10.6-6.07,17.08-8c6.48-1.93,13.42-2.9,20.83-2.9c7.4,0,14.35,0.97,20.83,2.9c6.48,1.93,12.13,4.6,16.94,8c4.81,3.41,8.65,7.41,11.53,12.01c2.87,4.6,4.3,9.48,4.3,14.63v77.83v1.93v7.18V385.21z M317.07,380.79c0.55-0.55,1.11-1.06,1.67-1.52c0.55-0.46,1.11-0.97,1.67-1.52c-0.19-1.28-0.33-2.62-0.42-4c-0.09-1.38-0.14-2.8-0.14-4.28v-10.49v-52.71c-2.6,3.31-5.51,6.12-8.75,8.42c-3.24,2.3-6.35,5.06-9.31,8.28c-2.96,3.22-5.46,7.45-7.5,12.7c-2.04,5.24-3.06,12.38-3.06,21.39c0,6.99,0.88,12.47,2.64,16.42c1.76,3.96,3.98,6.76,6.67,8.42c2.68,1.66,5.51,2.3,8.47,1.93C311.98,383.46,314.66,382.45,317.07,380.79z"/>
                    </motion.g>
                </svg>
            </div>
            <div className="project__container">
                <div className="project__video--enter">
                    <video
                        autoPlay
                        playsInline
                        loop
                        muted
                        poster="path/to/your/posterimage.jpg" 
                        preload="none"
                        loading="lazy"
                        >
                        <source src={isDesktop ? VideoDesktop : VideoMobile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="project__photo__box"></div>
                <motion.div  
                    key="projects__box__amazon"
                    transition={{duration: 0.8, delay: -0.2, ease: [0.740, 0.120, 0.845, 0.210]}}
                    exit={{ y: "-100vh"}}
                    className="project__photo__boxExit">
                </motion.div>
                <AnimatedTitle title={"Amazon"} className="project__title" />
                <motion.div 
                    className="project__scrollIndicator" 
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0}}
                ></motion.div>
            </div>
            <div className="project__container">
                <div className="project__wrapper">
                    <motion.div 
                        className="project__context"
                        transition={{duration: 0.4, ease: [0.740, 0.120, 0.845, 0.210]}}
                        exit={{ y: "-50px", opacity: 0}}
                    >
                        <div className="project__context--title">
                            {t('context')} & Debrief
                        </div>
                        <div className="project__context--text">
                            {t('SneakmartDefrief')}
                        </div>
                    </motion.div>
                    <div className="project__view">
                        <div className="project__view--wrapper">
                            <motion.a 
                                href="https://amazon-client-theta.vercel.app/" 
                                target="_blank"
                                transition={{ duration: .7, delay: -.05 }}
                                exit={{ transform:"translate3d(0px, -110%, 0px)" }}
                            >
                                <div className="project__view--items">
                                    <svg width="23px" height="23px" viewBox="0 0 512 512"><path d="M256,0Q362.11,0,436.9,75.1,512,149.89,512,256T436.9,436.9Q362.11,512,256,512T75.1,436.9Q0,362.11,0,256T75.1,75.1Q149.89,0,256,0ZM55.34,190.63a211.82,211.82,0,0,0,0,130.73h66a416,416,0,0,1,0-130.73Zm14.9,165.7q34.36,63.55,100.64,92.73a232.64,232.64,0,0,1-20.07-31.92,302.59,302.59,0,0,1-22.2-60.81ZM170.87,63.24Q104.59,92.43,70.54,155.37h58.07a304.36,304.36,0,0,1,22.2-60.51A198.45,198.45,0,0,1,170.87,63.24ZM151.72,190.63A390.59,390.59,0,0,0,145.94,256a390.48,390.48,0,0,0,5.78,65.37H241.1V190.63Zm82.7-143.51q-32.83,13.38-57.16,61.11-9.43,19.16-17.63,47.13H241.1V45.61a3.4,3.4,0,0,1-1.52.3h-1.82Zm3.34,419h1.82a5.12,5.12,0,0,0,1.52.3V356.33H159.62q8.21,28.28,17.63,47.43,24.32,47.74,57.16,61.11ZM274.24,45.91h-1.83a3.38,3.38,0,0,1-1.52-.3V155.37h81.48q-8.21-28-17.63-47.13-24.33-47.73-57.16-61.11Zm86,275.46A391.23,391.23,0,0,0,366.06,256a395,395,0,0,0-5.78-65.37H270.9V321.37Zm-82.7,143.51q32.84-13.39,57.16-61.11,9.73-19.16,17.63-47.43H270.9V466.39a5.1,5.1,0,0,0,1.52-.3h1.83ZM441.46,155.37q-34.06-62.94-100-92.12A212.61,212.61,0,0,1,361.2,94.86a295.22,295.22,0,0,1,22.2,60.51Zm-100,293.7q66-29.49,100-92.73H383.39q-8.52,33.74-22.2,60.81A226,226,0,0,1,341.43,449.06Zm49.25-258.43A412,412,0,0,1,395.86,256a415.71,415.71,0,0,1-5.17,65.37h66a211.89,211.89,0,0,0,0-130.73Z"/></svg>
                                    <div>{t('ViewWebiste')}</div>
                                </div>
                            </motion.a>
                            <motion.a 
                                href="https://amazon-client-theta.vercel.app/" 
                                target="_blank"
                                transition={{ duration: .7, delay: -.05 }}
                                exit={{ transform:"translate3d(0px, -110%, 0px)" }}
                            >
                                <div className="project__view--items">
                                    <svg viewBox="0 0 30 30" width="30px" height="30px"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                                    <div>{t('ViewGithub')}</div>
                                </div>
                            </motion.a>
                        </div>
                    </div>
                    <div className="project__parallax--container">
                          <motion.div 
                            className="project__parallax--box"
                            key="project__parallax--box1"
                            transition={{ duration: .8 }}
                            exit={{ transform: "translate3d(0px, 0%, 0px)" }}
                        />
                        <img loading="lazy" className="project__parallax--img" src={Photo1} alt="parallax-img"/>
                    </div>
                    <div className="project__photo__container MobileEffect" ref={MobileEffect}>
                        <img loading="lazy" className="project__photo MobileCenterEffect" ref={MobileCenterEffect} src={MobileCenterEffectImg} alt="MobileCenterEffect"/>
                        <img loading="lazy" className="project__photo MobileSideEffect" ref={MobileSideEffect} src={MobileSideEffectImg} alt="MobileSideEffect"/>
                        <motion.div 
                            className="project__parallax--box"
                            key="project__parallax--box2"
                            transition={{ duration: .8 }}
                            exit={{ transform: "translate3d(0px, 0%, 0px)" }}
                        />
                    </div>
                    <div className="project__context">
                        <div className="project__next--wrapper">
                            <motion.div 
                                className="project__context--title"
                                key="project__context--title"
                                transition={{ duration: .7, delay: -.05 }}
                                exit={{ transform:"translate3d(0px, -110%, 0px)" }}
                            >
                                Responsive/
                            </motion.div>
                            <motion.div 
                                className="project__context--text"
                                key="project__context--text"
                                transition={{ duration: .7, delay: -.05 }}
                                exit={{ transform:"translate3d(0px, -110%, 0px)" }}
                            >
                                {t('responsive')}
                            </motion.div>
                        </div>
                    </div>
                    <div className="project__parallax--container" >
                        <motion.div 
                            className="project__parallax--box"
                            key="project__parallax--box3"
                            transition={{ duration: .8 }}
                            exit={{ transform: "translate3d(0px, 0%, 0px)" }}
                        />
                        <img loading="lazy" className="project__parallax--img" src={Responsive} />
                    </div>
                    <Link to="/JeanProuve">
                        <div className="project__next">
                            <div className="project__next--container">
                                <div className="project__next--wrapper">
                                    <motion.div 
                                        className="project__next--year"
                                        key="project__next--year"
                                        transition={{ duration: .7, delay: -.05 }}
                                        exit={{ transform:"translate3d(0px, -110%, 0px)" }}
                                    >
                                        ©2022
                                    </motion.div>
                                    <motion.div 
                                        className="project__next--text"
                                        key="project__next--text"
                                        transition={{ duration: .7, delay: -.05 }}
                                        exit={{ transform:"translate3d(0px, -110%, 0px)" }}
                                    >
                                        {t('nextProject')}
                                    </motion.div>
                                </div>
                                <AnimatedTitle title={"Prouvé"} className="project__next--title" />
                            </div>
                            <div className="project__next--container2">
                                <motion.div 
                                    className="project__next--box"
                                    key="project__next--box"
                                    transition={{ duration: .8, delay: -.05 }}
                                    exit={{ transform:"translate3d(0px, 0%, 0px)" }}
                                ></motion.div>
                                <img 
                                    loading="lazy"
                                    className="project__next--image" 
                                    src={NextProject} 
                                    alt="nextProject"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Amazon