import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import DrawSVGPlugin from "../../gsap/DrawSVGPlugin.min.js";
import { Application, Assets, Sprite, DisplacementFilter } from 'pixi.js';


import image from "../../assets/image/homeBackground.jpg";
import imageDepth from "../../assets/image/homeBackgroundDeetphmap.png"

import "./Home.css";

gsap.registerPlugin(DrawSVGPlugin);

function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });
  const { t } = useTranslation();
  const pixiContainerRef = useRef(null);
  const appRef = useRef(null);

  useLayoutEffect(() => {
    (async () =>{
      if (pixiContainerRef.current  && !appRef.current) {
        
        const app = new Application();

        await app.init({ 
          backgroundColor: "#fff",
          width: window.innerWidth,
          height: window.innerHeight,
          resizeTo: window, 
        })
        appRef.current = app;
        pixiContainerRef.current.appendChild(app.canvas);

        const imgTexture = await Assets.load(image);
        const img = new Sprite(imgTexture);
        img.width = window.innerWidth;
        img.height = window.innerHeight/0.9;
        app.stage.addChild(img);

        const depthMapTexture = await Assets.load(imageDepth);
        const depthMap = new Sprite(depthMapTexture);
        depthMap.width = window.innerWidth;
        depthMap.height = window.innerHeight/0.9;
        app.stage.addChild(depthMap);

        const displacementFilter = new DisplacementFilter(depthMap);
        app.stage.filters = [displacementFilter];

        const onMouseMove = (e) => {
          displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
          displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
        };

        setTimeout(() => {
          gsap.to({ clientX: 0, clientY: -500 }, {
            clientX: 1600,
            clientY: 540,
            duration: 1,
            onUpdate: function () {
              const clientX = this.targets()[0].clientX;
              const clientY = this.targets()[0].clientY;
              displacementFilter.scale.x = (window.innerWidth / 2 - clientX) / 20;
              displacementFilter.scale.y = (window.innerHeight / 2 - clientY) / 20;
            }
          });
        }, 3700);

        window.addEventListener('mousemove', onMouseMove);

        // Nettoyage lors du démontage du composant
        return () => {
          window.removeEventListener('mousemove', onMouseMove);
          if (app) {
            app.destroy(true, { children: true });
            appRef.current = null;
          }
        };
      }
    })();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.inOut", delay: 4.4 } });

    tl.to(".home__description div:nth-child(1)", { opacity: 1, y: 0 }, 0)
      .fromTo(".scrollIndicator", { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 0)
      .fromTo(isDesktop ? ".home__background" : ".home__background--mobile", { opacity: 0 }, { duration: 0.4, opacity: 1,delay: isDesktop ? 4.5 : 4.7 }, 0)
    const scrollTriggerOptions = {
      trigger: ".home",
      scrub: true,
      toggleActions: "restart none none reverse"
    };

    const tlBackground = gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 10, end: "+=400" } }).to(".home__gradient", { height: "150%" })
  .to(pixiContainerRef.current, { opacity: 0 });
    const tlDescription = gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 0, end: "+=150" } }).to(".home__description div:nth-child(1)", { opacity: 0, y: -100 });
    const tlSlIndicator = gsap.timeline({ scrollTrigger: { ...scrollTriggerOptions, start: 50, end: "+=300" } }).to(".scrollIndicator", { opacity: 0 });

    return () => {
      tl.revert();
      tlBackground.revert();
      tlDescription.revert();
      tlSlIndicator.revert();
    } 
  }, []);

		

	return(
		<div className="home" id="home" data-scroll-section>
			{isDesktop ? <div ref={pixiContainerRef} /> : <div className="home__background--mobile"></div>}
			<div className="home__gradient"></div>
			<div className="home__description--container">
				<div className="home__description">
					<div><span>{t('Descriptionspan1')}</span>{t('Description1')}</div>
				</div>
			</div>
			<div className="scrollIndicator"></div>
        </div>
	);
}

export default Home;
