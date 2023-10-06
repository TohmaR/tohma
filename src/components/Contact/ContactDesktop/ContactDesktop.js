import React, { useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ArrowLeft from "../../../assets/image/arrow__left.webp";
import "./ContactDesktop.css";

gsap.registerPlugin(ScrollTrigger);

function ContactDesktop() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `AIzaSyC8hEujlqPx5QCzzgDZ8XhWZ-xzLhGJwjM`,
    });

    useEffect(() => {
        const mapBoxAnimation = gsap.to(".map__box", {
            x: "100%",
            duration: 1.6,
            scrollTrigger: {
                trigger: ".map__box",
                start: "top 60%",
                toggleActions: "restart none none reverse",
                scrub: 1,
                end: "+=600",
            },
        });

        let tlLetter = gsap.timeline({
            scrollTrigger: {
                trigger: ".map__box",
                start: "top 60%",
                toggleActions: "restart none none reverse",
                scrub: 1,
                end: "+=400",
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

    const lettersTop = ['L', 'E', 'T\'', 'S', 'W', 'O', 'R', 'K'];
    const lettersBottom = ['T', 'O', 'G', 'E', 'T', 'H', 'E', 'R'];

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
                            styles: require(`../GoogleMapsStyles.json`),
                        }}
                    >
                        <MarkerF position={{ lat: 48.839561132526065, lng: 2.3954963552036013 }} />
                    </GoogleMap>
                }
                <div className="map__box"></div>
                <div className="letters clearfix">
                    <div className="letters__top">
                        {lettersTop.map((letter, index) => <i key={index} className={`letter-${index + 1}`}>{letter}</i>)}
                    </div>
                    <div className="letters__bottom">
                        {lettersBottom.map((letter, index) => <i key={index} className={`letter-${index +9}`}>{letter}</i>)}
                    </div>
                </div>
            </div>
            <div className="contact__text">If you want to contact me, you are in the right place. You can also contact me on my social networks <img loading="lazy" className="contact__arrow" src={ArrowLeft} alt="ArrowLeft"/></div> 
        </div>
    );
}

export default ContactDesktop;