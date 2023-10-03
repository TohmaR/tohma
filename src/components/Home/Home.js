import React, { useEffect } from "react";
import gsap from "gsap";
import "./Home.css";
import Arrow from "../../assets/image/arrow__left.webp";
import { useMediaQuery } from 'react-responsive';
import DrawSVGPlugin from "../../gsap/DrawSVGPlugin.min.js";

gsap.registerPlugin(DrawSVGPlugin);

function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.inOut", delay: 6 } });

    tl.fromTo(".home__description div:nth-child(1)", { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, 0)
      .fromTo(".home__description div:nth-child(2)", { opacity: 0, x: 100 }, { opacity: 1, x: 0, }, 0)
      .fromTo(".scrollIndicator", { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 0)
      .fromTo(".home__background", { opacity: 0 }, { opacity: 1, delay: 6}, 0)
      .fromTo(".home__arrow", { rotateY: "90deg" }, { rotateY: "0deg", delay: 6.4}, 0)
      .fromTo(".home__circle path", { drawSVG: 0 }, { drawSVG: "50%", delay: 6.5, ease: "rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: true})", duration: 1 }, 0);

    const scrollTriggerOptions = {
      trigger: ".home",
      scrub: true,
      toggleActions: "restart none none reverse"
    };

    gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 10, end: "+=400" } }).to(".home__background", { opacity: 0 });
    gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 0, end: "+=600" } }).to(".home__description div:nth-child(1)", { opacity: 0, x: -100 });
    gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 0, end: "+=600" } }).to(".home__description div:nth-child(2)", { opacity: 0, x: 100 });
    gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 200, end: "+=500" } }).to(".scrollIndicator", { opacity: 0 });
    gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 0, end: "+=400" } }).to(".home__circle path", { opacity: 0, drawSVG: 0 });
	gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 0, end: "+=600" } }).to(".home__arrow",{opacity: 0, rotateY: "90deg"})

  }, []);

		

	return(
		<div className="home" id="home" data-scroll-section>
			{isDesktop ? <div className="home__background" ></div> : <div className="home__background--mobile"></div>}
			<div className="home__gradient"></div>
			<div className="home__description--container">
				<div className="home__arrow--container">
					<img loading="lazy" className="home__arrow" src={Arrow} alt="arrow"/>
				</div>
				<svg className="home__circle" version="1.1"  
					x="0px" y="0px"
					viewBox="0 0 1190.55 841.89" 
					style={{enableBackground:"new 0 0 1190.55 841.89"}} 
				>
					<linearGradient id="GradientCircle" x1="0%" x2="0%" y1="0%" y2="80%" gradientUnits="userSpaceOnUse">
						<stop offset="5%" stopColor="#e9ea0c" />
						<stop offset="100%" stopColor="#14e97c" />
					</linearGradient>
					<g>
						<path stroke="url(#GradientCircle)" d="M627.93,225.1c20.53,0,41.04,0.55,61.54,1.66c22.49,1.22,44.94,3.03,67.34,5.44
						c20.57,2.21,41.06,5,61.45,8.49c23.68,4.06,47.17,9.05,70.23,15.88c12.8,3.79,25.44,8.04,37.47,13.93
						c4.96,2.43,9.67,5.26,14.03,8.66c5.07,3.95,9.24,8.69,12.02,14.52c0.83,1.74,2.1,2.96,3.46,4.2c5.22,4.76,9.53,10.22,12.78,16.53
						c5.53,10.76,5.85,21.72,1.53,32.9c-2.75,7.1-7.04,13.25-12.13,18.82c-7.11,7.79-15.12,14.57-23.77,20.62
						c-16.07,11.24-33.38,20.13-51.39,27.78c-22.93,9.73-46.6,17.18-70.75,23.19c-28.2,7.01-56.78,11.92-85.61,15.44
						c-21.53,2.63-43.12,4.62-64.76,6.05c-31.15,2.05-62.32,2.82-93.53,2.28c-30.03-0.52-60.02-2.17-89.94-4.91
						c-28.08-2.57-56.06-5.95-83.83-10.86c-28.61-5.06-56.92-11.39-84.6-20.34c-14.14-4.57-28-9.86-41.38-16.33
						c-9.64-4.66-18.85-10.04-27.37-16.54c-7.23-5.51-13.45-11.95-17.9-20c-5.87-10.61-6.49-21.52-2.28-32.79
						c2.3-6.17,5.79-11.65,10.09-16.6c6.6-7.6,14.21-14.06,22.51-19.75c13.96-9.57,29-17.08,44.52-23.71
						c22.9-9.78,46.55-17.34,70.59-23.69c28.73-7.58,57.84-13.36,87.21-17.88c19.46-2.99,38.97-5.53,58.56-7.5
						c34.88-3.49,69.85-5.42,104.92-5.5C621.93,225.1,624.93,225.1,627.93,225.1z M432.35,248.54c-1.44-1.02-2.94-0.31-4.33-0.04
						c-9.01,1.72-18.04,3.37-26.99,5.38c-21.97,4.92-43.75,10.52-65.16,17.58c-23.01,7.59-45.46,16.46-66.6,28.41
						c-10.05,5.68-19.54,12.2-27.95,20.15c-4.74,4.48-8.97,9.43-12.27,15.1c-3.4,5.85-5.6,12.04-5.56,18.95
						c0.05,9.58,4.22,17.4,10.29,24.34c4.07,4.65,8.77,8.67,13.83,12.26c11.93,8.45,25.04,14.64,38.46,20.18
						c17.29,7.14,35.15,12.6,53.24,17.3c27.64,7.2,55.67,12.43,83.92,16.49c21.3,3.06,42.7,5.33,64.15,7.11
						c21.78,1.81,43.6,3.09,65.45,3.73c46.08,1.35,92.08,0,137.99-4.21c22.09-2.03,44.11-4.63,66.01-8.19
						c27.69-4.5,55.04-10.48,81.87-18.75c21.71-6.69,42.88-14.7,63.13-25.06c14.45-7.39,28.21-15.82,40.65-26.32
						c5.51-4.65,10.46-9.82,14.9-15.48c3.21-4.09,5.75-8.59,7.56-13.48c3.5-9.48,2.7-18.65-2.01-27.53
						c-4.56-8.59-11.32-15.23-19.03-20.92c-14.22-10.49-30.13-17.79-46.59-23.92c-18.14-6.76-36.76-11.94-55.64-16.2
						c-21.33-4.82-42.86-8.4-64.54-11.19c-23.34-3.01-46.76-5.1-70.25-6.44c-28.32-1.62-56.65-2.22-85.02-1.78
						c-25.2,0.39-50.35,1.58-75.46,3.62c-19.61,1.6-39.17,3.81-58.66,6.54c-24.63,3.45-49.09,7.74-73.32,13.37
						c-23.74,5.51-47.14,12.13-69.96,20.75c-16.89,6.38-33.29,13.72-48.69,23.18c-7.7,4.73-14.94,10.1-21.4,16.42
						c-5.76,5.64-10.57,12.02-13.73,19.52c-4.44,10.55-3.14,20.5,3.03,29.99c4.73,7.28,11.25,12.71,18.26,17.6
						c7.69,5.37,16,9.65,24.55,13.44c16.21,7.19,33.09,12.37,50.25,16.73c26.23,6.66,52.85,11.19,79.68,14.53
						c21.03,2.61,42.13,4.44,63.28,5.85c25.98,1.73,51.99,2.54,78.03,2.37c20.36-0.14,40.69-0.86,60.96-2.93
						c4.31-0.44,8.6-1.07,12.91-1.55c0.97-0.11,1.99-0.09,2.95,0.08c1.21,0.22,1.99,1.36,1.98,2.55c-0.02,1.13-0.58,1.98-1.59,2.31
						c-1.26,0.41-2.58,0.7-3.9,0.85c-7.12,0.82-14.24,1.85-21.39,2.3c-12.82,0.82-25.65,1.53-38.48,1.84
						c-35.05,0.85-70.05-0.47-105-3.16c-24.95-1.92-49.84-4.47-74.57-8.31c-20.45-3.18-40.74-7.14-60.75-12.44
						c-17.44-4.61-34.54-10.17-50.91-17.83c-9.69-4.54-19.04-9.68-27.32-16.54c-5.8-4.81-11.12-10.07-14.95-16.69
						c-5.29-9.14-6.68-18.71-3.73-28.9c2.27-7.86,6.59-14.54,11.87-20.66c7.72-8.93,17.01-15.98,26.96-22.18
						c13.49-8.39,27.82-15.14,42.56-20.99c10.85-4.3,21.87-8.12,33.02-11.6c14.18-4.42,28.5-8.27,42.95-11.65
						c6.17-1.44,12.38-2.7,18.57-4.08C430.9,250.16,432.22,250.13,432.35,248.54z"/>
					</g>
				</svg>
				<div className="home__description">
					<div><span>I'm a Junior Front end developer</span> from France living in Paris. I love design in general and bringing my creations to life</div>
					<div>If you want to know more about me, my work or if you're a Suggar mommy who wants to offer me a lot of money, feel free to contact me</div>
				</div>
			</div>
			<div className="scrollIndicator"></div>
        </div>
	);
}

export default Home;
