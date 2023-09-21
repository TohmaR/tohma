import React, { useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ContactMobile.css"

gsap.registerPlugin(ScrollTrigger);


function ContactMobile() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `AIzaSyC8hEujlqPx5QCzzgDZ8XhWZ-xzLhGJwjM`,
        
    });
    

    gsap.to(".map__box", {
        x: "100%",
        duration: 1.6,
        scrollTrigger: {
            trigger: ".map__box",
            start: "50% bottom",
            toggleActions: "restart none none reverse",
            scrub: 1,
            end: "+=400",
        },
    })

        let tlLetter = gsap.timeline({
            scrollTrigger: {
                trigger: ".map__box",
                start: "40% bottom",
                toggleActions: "restart none none reverse",
                scrub: 1,
                end: "+=200",
            },
        });
        tlLetter.delay(1.2);
     
        tlLetter.to("i:nth-child(2)",0.2,{opacity : 1})
        tlLetter.to("i:nth-child(11)",0.2,{opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(6)",0.2,{opacity : 1})
        tlLetter.to("i:nth-child(13)",0.2,{opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(16)",0.2,{opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(1)",0.2,{opacity : 1})
        tlLetter.to("i:nth-child(8)",0.2,{opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(3)",0.2,{opacity : 1})
        tlLetter.to("i:nth-child(9)",0.2,{opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(10)",0.2,{opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(5)",0.2,{opacity : 1})
        tlLetter.to("i:nth-child(14)",0.2,{opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(4)",0.2,{opacity : 1})
        tlLetter.to("i:nth-child(15)",0.2,{opacity : 1}, '-=0.2')
        tlLetter.to("i:nth-child(7)",0.2,{opacity : 1})
        tlLetter.to("i:nth-child(12)",0.2,{opacity : 1}, '-=0.2')
   

	return(
		<div className="contact" id="contact">
            <div className="contact__map">
                { isLoaded && 
                <GoogleMap 
                    zoom={11} 
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
            <div className="contact__text">If you want to contact me, you are in the right place. Just click here. You can also contact me on my social networks</div> 
        </div>
	);
}

export default ContactMobile;
