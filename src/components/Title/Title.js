import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Splitting from "splitting";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "./Title.css"

gsap.registerPlugin(ScrollTrigger);


function Title( props ){
    Splitting();
    
    useEffect(() => {

        setTimeout(() => {
            const titles = [...document.querySelectorAll('.title[data-splitting][data-effect1]')];

            titles.forEach(title => {

                const words = [...title.querySelectorAll('.word')];
                
                for (const word of words) {
                    
                    const chars = word.querySelectorAll('.char');
                
                    chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

                    gsap.fromTo(chars, {
                        'will-change': 'opacity, transform', 
                        opacity: 0,
                        y: (position,_,arr) => -40*Math.abs(position-arr.length/2),
                        z: () => gsap.utils.random(-1500,-600),
                        rotationX: () => gsap.utils.random(-500,-200)
                    }, 
                    {
                        ease: 'power1.inOut',
                        opacity: 1,
                        y: 0,
                        z: 0,
                        rotationX: 0,
                        stagger: {
                            each: 0.06,
                            from: 'center'
                        },
                        scrollTrigger: {
                            trigger: '.title__container',
                            start: '10% bottom',
                            end: '10%',
                            scrub: true,
                        }
                    });
                }
            });
        }, 7000);
    })
        
    return(
        <div className="title__container">
            <h2 className="title" data-splitting data-effect1>{props.children}</h2>
        </div>
    )
}

export default Title;