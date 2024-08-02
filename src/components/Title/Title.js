import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Splitting from "splitting";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "./Title.css";

gsap.registerPlugin(ScrollTrigger);

export default function Title(props) {
    const titleRef = useRef(null);

    useEffect(() => {
        if (!titleRef.current) return;

        Splitting({ target: titleRef.current });

        const words = titleRef.current.querySelectorAll('.word');

        const anims = [];
        words.forEach(word => {
            const chars = word.querySelectorAll('.char');
            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 }));

            const anim = gsap.fromTo(chars, {
                'will-change': 'opacity, transform',
                opacity: 0,
                y: (position, _, arr) => -40 * Math.abs(position - arr.length / 2),
                z: () => gsap.utils.random(-1500, -600),
                rotationX: () => gsap.utils.random(-500, -200)
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
                    scrub: 1,
                }
            });
            anims.push(anim);
        });

        return () => {
            anims.forEach(anim => anim.kill());
           
        };
    }, []);

    return (
        <div className="title__container">
            <h2 ref={titleRef} className="title">{props.children}</h2>
        </div>
    );
}