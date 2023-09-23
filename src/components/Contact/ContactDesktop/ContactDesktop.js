import React, { useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ArrowLeft from "../../../assets/image/arrow__left.png"
import "./ContactDesktop.css"


gsap.registerPlugin(ScrollTrigger);


function ContactDesktop() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `AIzaSyC8hEujlqPx5QCzzgDZ8XhWZ-xzLhGJwjM`,
        
    });

    gsap.to(".map__box", {
        x: "100%",
        duration: 1.6,
        scrollTrigger: {
            trigger: ".map__box",
            start: "60% bottom",
            toggleActions: "restart none none reverse",
            scrub: 1,
            end: "+=600",
        },
    })

        let tlLetter = gsap.timeline({
            scrollTrigger: {
                trigger: ".map__box",
                start: "60% bottom",
                toggleActions: "restart none none reverse",
                scrub: 1,
                end: "+=400",
            },
        });
        tlLetter.delay(1.2);
     
        tlLetter.to('i:nth-child(2)',{ duration: 0.2, opacity : 1})
        tlLetter.to('i:nth-child(11)',{ duration: 0.2, opacity : 1}, '-=0.2')
        tlLetter.to('i:nth-child(6)',{ duration: 0.2, opacity : 1})
        tlLetter.to('i:nth-child(13)',{ duration: 0.2, opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(16)",{ duration: 0.2, opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(1)",{ duration: 0.2, opacity : 1})
        tlLetter.to("i:nth-child(8)",{ duration: 0.2, opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(3)",{ duration: 0.2, opacity : 1})
        tlLetter.to("i:nth-child(9)",{ duration: 0.2, opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(10)",{ duration: 0.2, opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(5)",{ duration: 0.2, opacity : 1})
        tlLetter.to("i:nth-child(14)",{ duration: 0.2, opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(4)",{ duration: 0.2, opacity : 1})
        tlLetter.to("i:nth-child(15)",{ duration: 0.2, opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(7)",{ duration: 0.2, opacity : 1})
        tlLetter.to("i:nth-child(12)",{ duration: 0.2, opacity : 1}, '-=0.2')
   

	return(
		<div className="contact" id="contact">
            <div className="contact__map">
                { isLoaded && 
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
                        <i>L</i>
                        <i>E</i>
                        <i>T'</i>
                        <i>S</i>
                        <i>W</i>
                        <i>O</i>
                        <i>R</i>
                        <i>K</i>
                    </div>
                    <div className="letters__bottom">
                        <i>T</i>
                        <i>O</i>
                        <i>G</i>
                        <i>E</i>
                        <i>T</i>
                        <i>H</i>
                        <i>E</i>
                        <i>R</i>
                    </div>
                </div>
            </div>
            <div className="contact__text">If you want to contact me, you are in the right place. You can also contact me on my social networks</div> 
            <img className="contact__arrow" src={ArrowLeft} />
        </div>
	);
}

export default ContactDesktop;
