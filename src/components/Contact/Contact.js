import React, { useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'
import ScrollTrigger from "gsap/ScrollTrigger";
import ArrowLeft from "../../assets/image/arrow__left.webp";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

  const socialIcons = [
    {
      id: "github",
      link: "https://github.com/TohmaR",
      svg: (
        <svg id="stick-social" viewBox="0 0 30 30"  width="40px" height="40px">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
         </svg>
      ),
    },
    {
      id: "instagram",
      link: "https://instagram.com/tohmagram",
      svg: (
        <svg id="stick-social" viewBox="0 0 30 30"  width="40px" height="40px">    
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/>
        </svg>
      ),
    },
    {
      id: "email",
      link: "mailto:tohmaroux@icloud.com",
      svg: (
        <svg id="stick-social" viewBox="0,0,256,256"  width="40px" height="40px"><g  fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M14,4c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM13,16h24c0.18,0 0.34977,0.02031 0.50977,0.07031l-9.83008,9.82031c-1.48,1.48 -3.88914,1.48 -5.36914,0l-9.82031,-9.82031c0.16,-0.05 0.32977,-0.07031 0.50977,-0.07031zM11.07031,17.49023l7.51953,7.50977l-7.51953,7.50977c-0.05,-0.16 -0.07031,-0.32977 -0.07031,-0.50977v-14c0,-0.18 0.02031,-0.34977 0.07031,-0.50977zM38.92969,17.49023c0.05,0.16 0.07031,0.32977 0.07031,0.50977v14c0,0.18 -0.02031,0.34977 -0.07031,0.50977l-7.5293,-7.50977zM20,26.41016l0.89063,0.90039c1.13,1.13 2.61961,1.68945 4.09961,1.68945c1.49,0 2.96961,-0.55945 4.09961,-1.68945l0.90039,-0.90039l7.51953,7.51953c-0.16,0.05 -0.32977,0.07031 -0.50977,0.07031h-24c-0.18,0 -0.34977,-0.02031 -0.50977,-0.07031z"/></g></g></svg>
      ),
    },
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/thomas-roux-9b1418226/",
      svg: (
        <svg id="stick-social" viewBox="0 0 30 30" width="40px" height="40px">    
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
        </svg>
      ),
    },
  ];

function ContactDesktop() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const { t } = useTranslation();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `AIzaSyC8hEujlqPx5QCzzgDZ8XhWZ-xzLhGJwjM`,
    });

    useEffect(() => {
        const mapBoxAnimation = gsap.to(".map__box", {
            x: "100%",
            duration: 1.6,
            scrollTrigger: {
                trigger: ".map__box",
                start: isDesktop ? "top 60%" : "50% bottom",
                toggleActions: "restart none none reverse",
                scrub: 1,
                end: "+=450",
            },
        });

        let tlLetter = gsap.timeline({
            scrollTrigger: {
                trigger: ".map__box",
                start: isDesktop ? "top 60%" : "50% bottom",
                toggleActions: "restart none none reverse",
                scrub: 1,
                end: "+=350",
            },
        }).delay(1.2);
     
        tlLetter
            .to('.letter-2', { duration: 0.2, opacity: 1 })
            .to('.letter-11', { duration: 0.2, opacity: 1 }, '-=0.2')
            .to('.letter-6', { duration: 0.2, opacity: 1 })
            .to('.letter-13', { duration: 0.2, opacity: 1 }, '-=0.2')
            .to(".letter-16", { duration: 0.2, opacity: 1 }, '-=0.2')
            .to(".letter-1", { duration: 0.2, opacity: 1 })
            .to(".letter-8", { duration: 0.2, opacity: 1 }, '-=0.2')
            .to(".letter-3", { duration: 0.2, opacity: 1 })
            .to(".letter-9", { duration: 0.2, opacity: 1 }, '-=0.2')
            .to(".letter-10", { duration: 0.2, opacity: 1 }, '-=0.2')
            .to(".letter-5", { duration: 0.2, opacity: 1 })
            .to(".letter-14", { duration: 0.2, opacity: 1 }, '-=0.2')
            .to(".letter-4", { duration: 0.2, opacity: 1 })
            .to(".letter-15", { duration: 0.2, opacity: 1 }, '-=0.2')
            .to(".letter-7", { duration: 0.2, opacity: 1 })
            .to(".letter-12", { duration: 0.2, opacity: 1 }, '-=0.2');

        return () => {
            mapBoxAnimation.scrollTrigger.kill();
            tlLetter.scrollTrigger.kill();
        };
    }, []);

    const letters1 = ['L', 'E', 'T\'', 'S'];
    const letters2 = ['W', 'O', 'R', 'K'];
    const letters3 = ['T', 'O', 'G', 'E'];
    const letters4 = ['T', 'H', 'E', 'R'];

    return (
        <div className="contact" id="contact">
            <div className="contact__map">
                {isLoaded && 
                    <GoogleMap 
                        zoom={12} 
                        center={{lat: 48.86, lng: 2.37}}
                        mapContainerClassName="map"
                        options={{
                            zoomControl: false,
                            mapTypeControl: false,
                            scaleControl: false,
                            streetViewControl: false,
                            rotateControl: false,
                            fullscreenControl: false,
                            styles: require(`./GoogleMapsStyles.json`),
                        }}
                    >
                        <MarkerF position={{ lat: 48.839561132526065, lng: 2.3954963552036013 }} />
                    </GoogleMap>
                }
                <div className="map__box"></div>
                <div className="letters clearfix">
                    <div className="letters1">
                        {letters1.map((letter, index) => <i key={index} className={`letter-${index + 1}`}>{letter}</i>)}
                    </div>
                    <div className="letters2">
                        {letters2.map((letter, index) => <i key={index} className={`letter-${index + 5}`}>{letter}</i>)}
                    </div>
                    <div className="letters3">
                        {letters3.map((letter, index) => <i key={index} className={`letter-${index + 9}`}>{letter}</i>)}
                    </div>
                    <div className="letters4">
                        {letters4.map((letter, index) => <i key={index} className={`letter-${index + 13}`}>{letter}</i>)}
                    </div>
                </div>
            </div>
            <div className="contact__text">{t('ContactText')}<img loading="lazy" className="contact__arrow" src={ArrowLeft} alt="ArrowLeft"/></div> 
            {isTabletOrMobile &&
                <div className="contact__social">
                    {socialIcons.map((icon) => (
                        <a
                        href={icon.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={icon.id}
                        key={icon.id}
                        >
                        <div
                            key={icon.id}
                            data-cursor-stick={`#stick-social`}
                            data-cursor-size="55px"
                            data-cursor-color="#87ea40"
                        >
                            
                            {icon.svg}
                            
                        </div>
                        </a>
                    ))}
                </div>  
            }
        </div>
    );
}

export default ContactDesktop;