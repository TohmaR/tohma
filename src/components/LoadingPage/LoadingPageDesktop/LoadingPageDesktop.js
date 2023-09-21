import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "../../../gsap/MorphSVGPlugin.min.js";
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import "./LoadingPageDesktop.css"

gsap.registerPlugin(MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");



function LoadingPageDesktop() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const history = useHistory()

    useLayoutEffect (() => {
        window.history.scrollRestoration = 'manual';
        document.body.style.overflowY = "hidden";
    })
    
    useEffect(() => {

        var tlMorph1 = gsap.timeline();
        var tlMorph2 = gsap.timeline();
        var tlMorph3 = gsap.timeline();
        var tlMorph4 = gsap.timeline();
        var tlMorph5 = gsap.timeline();
        var tlBackground = gsap.timeline();
        tlBackground.delay(6);
        tlMorph1.delay(0.2);
        tlMorph2.delay(0.4);
        tlMorph3.delay(0.6);
        tlMorph4.delay(0.8);
        tlMorph5.delay(1);
        
        // T
        tlMorph1.to('.morph1__initial', 0.7, {opacity : 1})
                .to('.morph1__initial', {delay: 0.8 , morphSVG : '.morph1__2'})
                .to('.morph1__initial', { delay : 0.5, morphSVG : '.morph1__4'})
                .to('.morph1__initial', { delay : 0.5, morphSVG : '.morph1__8'})
                .to('.morph1__initial', { delay : 0.5, morphSVG : '.morph1__9'})
                .to('.morph1__initial', { duration: 0.6,delay : 0.5, morphSVG : '.morph1__T'})
                .to('.morph1__initial', { delay : -0.6, duration : 0.5, y : -70});
        
        // O
        tlMorph2.to('.morph2__initial', 0.7, {opacity : 1})
                .to('.morph2__initial', {delay: 0.6 , morphSVG : '.morph2__°'})
                .to('.morph2__initial', { delay : 0.5, morphSVG : '.morph2__5'})
                .to('.morph2__initial', {delay: 0.5 , morphSVG : '.morph2__°'})
                .to('.morph2__initial', { delay : 0.5, morphSVG : '.morph2__9'})
                .to('.morph2__initial', { duration: 0.6,delay : 0.5, morphSVG : '.morph2__O'})
                .to('.morph2__initial', { delay : -0.6, duration : 0.5, y : -70});

        // M 
        tlMorph3.to('.morph3__initial', 0.7, {opacity : 1})
                .to('.morph3__initial', {delay: 0.4 , morphSVG : '.morph3__separator'})
                .to('.morph3__initial', { delay : 0.5,morphSVG : '.morph3__initial'})
                .to('.morph3__initial', {delay: 0.5 , morphSVG : '.morph3__separator'})
                .to('.morph3__initial', { delay : 0.5,morphSVG : '.morph3__initial'})
                .to('.morph3__initial', { duration: 0.6, delay : 0.5,morphSVG : '.morph3__M'})
                .to('.morph3__initial', { delay : -0.6, duration : 0.5, y : -70});

        // H
        tlMorph4.to('.morph4__initial', 0.7, {opacity : 1})
                .to('.morph4__initial', {delay: 0.2 , morphSVG : '.morph4__°'})
                .to('.morph4__initial', { delay : 0.5,morphSVG : '.morph4__initial'})
                .to('.morph4__initial', {delay: 0.5 , morphSVG : '.morph4__°'})
                .to('.morph4__initial', { delay : 0.5,morphSVG : '.morph4__initial'})
                .to('.morph4__initial', { duration: 0.6, delay : 0.5,morphSVG : '.morph4__H'})
                .to('.morph4__initial', { delay : -0.6, duration : 0.5, y : -70});

        // A
        tlMorph5.to('.morph5__initial', 0.7, {opacity : 1})
                .to('.morph5__initial', {morphSVG : '.morph5__3'})
                .to('.morph5__initial', { delay : 0.5,morphSVG : '.morph5__initial'})
                .to('.morph5__initial', { delay : 0.5,morphSVG : '.morph5__5'})
                .to('.morph5__initial', { delay : 0.5,morphSVG : '.morph5__initial'})
                .to('.morph5__initial', { duration: 0.6, delay : 0.5,morphSVG : '.morph5__A'})
                .to('.morph5__initial', { delay : -0.6, duration : 0.5, y : -70});

        tlBackground.to('.loadingPage__background', 0.7, {opacity: 0});
        tlBackground.to('.loadingPage', {zIndex: 1});

        if(isDesktop){
            let tlLogoHeader = gsap.timeline({
                scrollTrigger: {
                    trigger: ".loadingPage",
                    start: 0,
                    end: "+=800",
                    scrub: true,
                    toggleActions: "restart none none reverse"
                },
            });
            
            
            tlLogoHeader.to(".loadingPage svg",{ duration: 2, height : "200px", width: "200px", marginTop: 30})
            tlLogoHeader.to(".loadingPage",{ height : "300px", width: "300px"})
            tlLogoHeader.to(".loadingPage__background",{ display: "none"})    
        }

      }, [history]);

	return(

        <div className="loadingPage" data-scroll-section>
            <div className="loadingPage__background"></div>
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 -100 400 600" style={{enableBackground: `new 0 0 1000 400`}}>
                <linearGradient id="Gradient" x1="0%" x2="0%" y1="0%" y2="80%" gradientUnits="userSpaceOnUse">
                    <stop offset="5%" stopColor="#e9ea0c" />
                    <stop offset="100%" stopColor="#14e97c" />
                </linearGradient>
                <g>
                    <path className="morph1__initial" d="M154.79,278.12c1.3,1.31,2.98,1.96,5.04,1.96v1.68h-27.16h-31.36v-1.68c2.05,0,3.73-0.65,5.04-1.96c1.3-1.3,1.96-2.98,1.96-5.04v-8.68v-7.28v-17.08v-93.8v-35c0-2.05-0.66-3.73-1.96-5.04c-1.31-1.3-2.99-1.96-5.04-1.96v-1.68c9.52-1.49,18.8-3.78,27.86-6.86c9.05-3.08,16.94-6.39,23.66-9.94v61.88v91.84v24.92v8.68C152.83,275.13,153.48,276.81,154.79,278.12z"/>
                    <path className="morph1__2" d="M186.62,226.4c0.18,0.75,0.51,2.66,0.98,5.74c0.46,3.08,0.65,6.82,0.56,11.2c-0.1,4.39-0.75,9.1-1.96,14.14c-1.22,5.04-3.22,9.71-6.02,14c-2.8,4.3-6.68,8.03-11.62,11.2c-4.95,3.18-11.25,5.04-18.9,5.6c-6.16,0.56-12.23,0.28-18.2-0.84c-5.98-1.12-11.76-2.52-17.36-4.2c-5.6-1.68-10.89-3.22-15.87-4.62c-4.98-1.4-9.53-2.1-13.67-2.1c-5.63,0-9.82,1.22-12.54,3.64c-2.73,2.43-4.27,5.14-4.65,8.12H65.4c-2.26-2.98-4.04-7.14-5.34-12.46c-1.31-5.32-1.64-11.34-0.98-18.06c0.65-6.72,2.62-13.95,5.91-21.7c3.28-7.74,8.4-15.63,15.35-23.66c5.82-6.72,12.02-13.3,18.59-19.74c6.57-6.44,12.79-12.92,18.67-19.46c5.88-6.53,11.06-13.16,15.54-19.88c4.48-6.72,7.46-13.72,8.96-21c1.3-6.72,1.58-12.46,0.84-17.22c-0.75-4.76-2.15-8.68-4.2-11.76c-2.06-3.08-4.53-5.36-7.42-6.86c-2.89-1.49-5.84-2.24-8.82-2.24c-3.55,0-7.1,0.28-10.64,0.84c-3.55,0.56-6.73,1.31-9.55,2.24c-2.82,0.94-5.16,2.1-7.04,3.5c-1.88,1.4-3.01,3.04-3.38,4.9c-0.56,2.62-0.14,4.86,1.27,6.72c1.41,1.87,2.86,3.46,4.37,4.76c2.44,2.06,4.37,4.53,5.78,7.42c1.41,2.9,2.11,6.12,2.11,9.66c0,5.98-2.16,11.16-6.48,15.54c-4.32,4.39-9.58,6.58-15.78,6.58c-6.2,0-11.46-2.19-15.78-6.58c-4.32-4.38-6.48-9.56-6.48-15.54c0-5.78,1.72-11.2,5.18-16.24c3.45-5.04,7.88-9.42,13.3-13.16c4.1-2.8,9.75-5.55,16.94-8.26c7.18-2.7,15.82-4.06,25.9-4.06c7.46,0,15.16,1.03,23.1,3.08c7.93,2.06,15.03,5.28,21.28,9.66c6.25,4.39,11.24,9.99,14.98,16.8c3.73,6.82,5.22,15.08,4.48,24.78c-0.56,7.84-2.62,14.7-6.16,20.58c-3.55,5.88-7.98,11.02-13.3,15.4c-5.32,4.39-11.34,8.26-18.06,11.62s-13.63,6.54-20.72,9.52c-7.1,2.99-14.14,5.93-21.14,8.82c-7,2.9-13.4,6.12-19.18,9.66c-9.15,5.42-15.54,11.39-19.18,17.92c-3.64,6.54-5.84,12.79-6.58,18.76c2.63-7.84,7.84-13.95,15.64-18.34c7.8-4.38,17.51-6.58,29.16-6.58c3.36,0,7.18,0.33,11.48,0.98c4.29,0.66,8.72,1.36,13.3,2.1c4.57,0.75,9.14,1.45,13.72,2.1c4.57,0.66,8.82,0.98,12.74,0.98c7.09,0,13.3-1.12,18.62-3.36c5.32-2.24,7.98-5.78,7.98-10.64H186.62z"/>
                    <path className="morph1__4" d="M153.38,238.2h19.32v1.68h-19.32v20.44v3.92v8.68c0,2.06,0.65,3.74,1.96,5.04c1.3,1.31,2.98,1.96,5.04,1.96v1.68h-27.16h-31.36v-1.68c2.05,0,3.73-0.65,5.04-1.96c1.3-1.3,1.96-2.98,1.96-5.04v-8.68v-3.92v-7.28v-13.16H56.22h-1.96c4.85-10.82,10.17-21.65,15.96-32.48c5.78-10.82,11.15-21.32,16.1-31.5c4.94-10.17,9.1-19.83,12.46-28.98c3.36-9.14,5.22-17.64,5.6-25.48c0.18-5.04-0.28-9.38-1.4-13.02c-1.12-3.64-2.57-6.67-4.34-9.1c-1.78-2.42-3.64-4.24-5.6-5.46c-1.96-1.21-3.78-1.82-5.46-1.82v-1.96c9.14-3.73,18.06-5.18,26.74-4.34c8.68,0.84,16.19,3.41,22.54,7.7c4.29,2.8,7.84,6.63,10.64,11.48c2.8,4.86,4.38,10.18,4.76,15.96c0.37,5.79-0.61,11.95-2.94,18.48c-2.34,6.54-6.4,12.88-12.18,19.04c-4.86,5.23-10.55,10.55-17.08,15.96c-6.54,5.42-13.4,11.3-20.58,17.64c-7.19,6.35-14.42,13.3-21.7,20.86c-7.28,7.56-14.1,16.01-20.44,25.34h51.52v-2.24v-10.36v-15.96c0-1.86-0.66-3.5-1.96-4.9c-1.31-1.4-2.99-2.1-5.04-2.1v-1.68c9.14-1.49,18.1-3.87,26.88-7.14c8.77-3.26,16.42-6.48,22.96-9.66h1.68V227v8.4V238.2z"/>
                    <path className="morph1__8" d="M155.42,175.24c5.04,3.74,9.84,7.61,14.42,11.62c4.57,4.02,8.58,8.22,12.04,12.6c3.45,4.39,6.2,9.06,8.26,14c2.05,4.95,3.08,10.22,3.08,15.82c0,9.52-2.1,17.69-6.3,24.5c-4.2,6.82-9.66,12.46-16.38,16.94c-6.72,4.48-14.33,7.75-22.82,9.8c-8.5,2.06-16.94,3.08-25.34,3.08h-0.28c-8.03,0-16.15-0.98-24.36-2.94c-8.22-1.96-15.68-4.9-22.4-8.82S63.16,262.97,58.96,257c-4.2-5.97-6.3-13.06-6.3-21.28c0-5.97,1.3-11.2,3.92-15.68c2.61-4.48,5.78-8.35,9.52-11.62c3.73-3.26,7.7-5.88,11.9-7.84c4.2-1.96,7.98-3.4,11.34-4.34c-5.04-3.92-9.9-7.88-14.56-11.9c-4.67-4.01-8.73-8.21-12.18-12.6c-3.46-4.38-6.21-9.05-8.26-14c-2.06-4.94-3.08-10.22-3.08-15.82c0-9.52,2.14-17.73,6.44-24.64c4.29-6.9,9.89-12.55,16.8-16.94c6.9-4.38,14.65-7.6,23.24-9.66c8.58-2.05,17.17-3.08,25.76-3.08c8.03,0,16.14,0.98,24.36,2.94c8.21,1.96,15.68,4.95,22.4,8.96c6.72,4.02,12.18,9.06,16.38,15.12c4.2,6.07,6.3,13.12,6.3,21.14c0,6.16-1.36,11.48-4.06,15.96c-2.71,4.48-5.98,8.31-9.8,11.48c-3.83,3.18-7.89,5.74-12.18,7.7C162.6,172.85,158.78,174.3,155.42,175.24z M122.1,281.92c5.22,0,9.94-0.93,14.14-2.8c4.2-1.86,7.46-4.48,9.8-7.84c2.33-3.36,3.4-7.37,3.22-12.04c-0.19-4.66-1.96-9.8-5.32-15.4c-5.23-8.4-12.56-16.14-21.98-23.24c-9.43-7.09-19-14.18-28.7-21.28c-2.8,5.6-4.53,11.58-5.18,17.92c-0.66,6.35-0.98,12.51-0.98,18.48c0,6.16,0.56,12,1.68,17.5c1.12,5.51,2.98,10.41,5.6,14.7c2.61,4.3,6.16,7.7,10.64,10.22C109.5,280.66,115.19,281.92,122.1,281.92z M123.5,89.28c-5.42,0-10.32,0.89-14.7,2.66c-4.39,1.78-7.75,4.34-10.08,7.7c-2.34,3.36-3.5,7.38-3.5,12.04c0,4.67,1.77,9.9,5.32,15.68c5.41,8.59,12.88,16.48,22.4,23.66c9.52,7.19,19.22,14.33,29.12,21.42c2.98-5.6,4.8-11.62,5.46-18.06c0.65-6.44,0.98-12.64,0.98-18.62c0-6.16-0.56-12.04-1.68-17.64c-1.12-5.6-2.99-10.54-5.6-14.84c-2.62-4.29-6.16-7.7-10.64-10.22C136.1,90.54,130.4,89.28,123.5,89.28z"/>
                    <path className="morph1__9" d="M98.33,87.6c10.81,0,21.2,1.96,31.16,5.88c9.96,3.92,18.77,9.9,26.41,17.92c7.64,8.03,13.79,18.2,18.45,30.52c4.66,12.32,6.99,26.88,6.99,43.68c0,12.51-1.68,24.64-5.03,36.4c-3.36,11.76-8.53,22.22-15.51,31.36c-6.99,9.15-15.75,16.48-26.27,21.98c-10.53,5.51-23.06,8.26-37.59,8.26c-10.06,0-18.73-1.35-25.99-4.06c-7.27-2.7-12.95-5.46-17.04-8.26c-5.41-3.73-9.83-8.12-13.28-13.16c-3.45-5.04-5.17-10.45-5.17-16.24c0-5.97,2.14-11.15,6.44-15.54c4.29-4.38,9.52-6.58,15.68-6.58c6.16,0,11.38,2.2,15.68,6.58c4.29,4.39,6.44,9.57,6.44,15.54c0,3.55-0.7,6.77-2.1,9.66c-1.4,2.9-3.32,5.37-5.74,7.42c-1.5,1.31-2.94,2.9-4.34,4.76c-1.4,1.87-1.82,4.11-1.26,6.72c0.37,2.06,1.72,3.88,4.06,5.46c2.33,1.59,5.22,2.85,8.68,3.78c3.45,0.94,7.37,1.54,11.76,1.82c4.38,0.28,8.82,0.14,13.3-0.42c4.66-0.74,8.58-3.78,11.76-9.1c3.17-5.32,5.74-12.18,7.7-20.58c1.96-8.4,3.31-17.92,4.06-28.56c0.74-10.64,1.12-21.46,1.12-32.48c-1.5,0.75-3.41,1.78-5.74,3.08c-2.34,1.31-5.04,2.57-8.12,3.78c-3.08,1.22-6.58,2.38-10.5,3.5c-3.92,1.12-8.12,1.87-12.6,2.24c-8.4,0.94-16.38,0.28-23.94-1.96c-7.56-2.24-14.1-5.74-19.6-10.5c-5.51-4.76-9.8-10.73-12.88-17.92c-3.08-7.18-4.34-15.44-3.78-24.78c0.56-9.14,2.84-17.4,6.85-24.78c4.01-7.37,9.08-13.67,15.23-18.9c6.15-5.22,13.09-9.28,20.82-12.18C82.17,89.04,90.13,87.6,98.33,87.6z M81.1,147.8c0.18,6.72,1.54,12.98,4.06,18.76c2.52,5.79,5.92,10.6,10.22,14.42c4.29,3.83,9.28,6.44,14.98,7.84c5.69,1.4,11.8,1.17,18.34-0.7c0-12.13-0.38-24.08-1.12-35.84c-0.75-11.76-2.05-22.26-3.92-31.5c-1.87-9.24-4.39-16.66-7.56-22.26c-3.18-5.6-7.19-8.4-12.04-8.4c-2.8,0-5.65,1.54-8.54,4.62c-2.9,3.08-5.42,7.28-7.56,12.6c-2.15,5.32-3.88,11.44-5.18,18.34C81.47,132.58,80.91,139.96,81.1,147.8z"/>
                    <path className="morph1__T" d="M4,11h144.16v32.6h-1.39c0-4.34-0.88-8.39-2.64-12.13c-1.76-3.74-4.12-7-7.08-9.78c-2.96-2.78-6.44-5-10.42-6.65c-3.98-1.65-8.29-2.48-12.92-2.48h-8.33c-2.04,0-3.75,0.61-5.14,1.83c-1.39,1.22-2.08,2.78-2.08,4.69v2.61v29.47v27.38v74.84v6v26.08c0,1.92,0.69,3.48,2.08,4.69c1.39,1.22,3.1,1.83,5.14,1.83v1.56h-4.44h-9.21H90.9H61.27h-0.84h-9.21h-4.17v-1.56c2.04,0,3.7-0.61,5-1.83c1.29-1.21,1.94-2.78,1.94-4.69v-26.08v-6V78.54V51.16V21.69v-2.61c0-1.91-0.65-3.48-1.94-4.69c-1.3-1.21-2.96-1.83-5-1.83h-8.61c-4.44,0-8.71,0.83-12.78,2.48c-4.08,1.65-7.6,3.87-10.56,6.65c-2.96,2.78-5.33,6.04-7.08,9.78c-1.76,3.74-2.64,7.78-2.64,12.13H4V11z"/>
                </g>
                <g>
                    <path className="morph2__initial" d="M317.62,165.17c0.18,0.75,0.51,2.66,0.98,5.74c0.46,3.08,0.65,6.82,0.56,11.2c-0.1,4.39-0.75,9.1-1.96,14.14c-1.22,5.04-3.22,9.71-6.02,14c-2.8,4.3-6.68,8.03-11.62,11.2c-4.95,3.18-11.25,5.04-18.9,5.6c-6.16,0.56-12.23,0.28-18.2-0.84c-5.98-1.12-11.76-2.52-17.36-4.2c-5.6-1.68-10.89-3.22-15.87-4.62c-4.98-1.4-9.53-2.1-13.67-2.1c-5.63,0-9.82,1.22-12.54,3.64c-2.73,2.43-4.27,5.14-4.65,8.12h-1.97c-2.26-2.98-4.04-7.14-5.34-12.46c-1.31-5.32-1.64-11.34-0.98-18.06c0.65-6.72,2.62-13.95,5.91-21.7c3.28-7.74,8.4-15.63,15.35-23.66c5.82-6.72,12.02-13.3,18.59-19.74c6.57-6.44,12.79-12.92,18.67-19.46c5.88-6.53,11.06-13.16,15.54-19.88c4.48-6.72,7.46-13.72,8.96-21c1.3-6.72,1.58-12.46,0.84-17.22c-0.75-4.76-2.15-8.68-4.2-11.76c-2.06-3.08-4.53-5.36-7.42-6.86c-2.89-1.49-5.84-2.24-8.82-2.24c-3.55,0-7.1,0.28-10.64,0.84c-3.55,0.56-6.73,1.31-9.55,2.24c-2.82,0.94-5.16,2.1-7.04,3.5c-1.88,1.4-3.01,3.04-3.38,4.9c-0.56,2.62-0.14,4.86,1.27,6.72c1.41,1.87,2.86,3.46,4.37,4.76c2.44,2.06,4.37,4.53,5.78,7.42c1.41,2.9,2.11,6.12,2.11,9.66c0,5.98-2.16,11.16-6.48,15.54c-4.32,4.39-9.58,6.58-15.78,6.58c-6.2,0-11.46-2.19-15.78-6.58c-4.32-4.38-6.48-9.56-6.48-15.54c0-5.78,1.72-11.2,5.18-16.24c3.45-5.04,7.88-9.42,13.3-13.16c4.1-2.8,9.75-5.55,16.94-8.26c7.18-2.7,15.82-4.06,25.9-4.06c7.46,0,15.16,1.03,23.1,3.08c7.93,2.06,15.03,5.28,21.28,9.66c6.25,4.39,11.24,9.99,14.98,16.8c3.73,6.82,5.22,15.08,4.48,24.78c-0.56,7.84-2.62,14.7-6.16,20.58c-3.55,5.88-7.98,11.02-13.3,15.4c-5.32,4.39-11.34,8.26-18.06,11.62s-13.63,6.54-20.72,9.52c-7.1,2.99-14.14,5.93-21.14,8.82c-7,2.9-13.4,6.12-19.18,9.66c-9.15,5.42-15.54,11.39-19.18,17.92c-3.64,6.54-5.84,12.79-6.58,18.76c2.63-7.84,7.84-13.95,15.64-18.34c7.8-4.38,17.51-6.58,29.16-6.58c3.36,0,7.18,0.33,11.48,0.98c4.29,0.66,8.72,1.36,13.3,2.1c4.57,0.75,9.14,1.45,13.72,2.1c4.57,0.66,8.82,0.98,12.74,0.98c7.09,0,13.3-1.12,18.62-3.36c5.32-2.24,7.98-5.78,7.98-10.64H317.62z"/>
                    <path className="morph2__°"d="M217.05,47.08c3.86,0,7.57,0.7,11.13,2.1c3.56,1.4,6.71,3.54,9.43,6.4c2.73,2.87,4.92,6.5,6.59,10.9c1.66,4.4,2.5,9.6,2.5,15.6s-0.83,11.2-2.5,15.6c-1.66,4.4-3.86,8.04-6.59,10.9c-2.73,2.87-5.87,5-9.43,6.4c-3.56,1.4-7.27,2.1-11.13,2.1c-3.86,0-7.57-0.7-11.13-2.1c-3.56-1.4-6.72-3.53-9.48-6.4c-2.76-2.87-4.96-6.5-6.59-10.9c-1.63-4.4-2.45-9.6-2.45-15.6s0.81-11.2,2.45-15.6c1.63-4.4,3.83-8.03,6.59-10.9c2.76-2.87,5.92-5,9.48-6.4C209.48,47.78,213.19,47.08,217.05,47.08z M227.9,78.28c-0.07-4.87-0.18-9.17-0.35-12.9c-0.17-3.73-0.79-7.3-1.86-10.7c-0.87-2.6-2.08-4.42-3.62-5.45c-1.54-1.03-3.22-1.55-5.02-1.55c-1.88,0-3.57,0.52-5.07,1.55c-1.51,1.03-2.7,2.85-3.57,5.45c-1.14,3.33-1.79,6.88-1.96,10.65c-0.17,3.77-0.25,8.08-0.25,12.95v7.7c0,4.8,0.08,9.08,0.25,12.85c0.17,3.77,0.82,7.32,1.96,10.65c0.87,2.6,2.06,4.42,3.57,5.45c1.51,1.04,3.2,1.55,5.07,1.55c1.81,0,3.48-0.52,5.02-1.55c1.54-1.03,2.75-2.85,3.62-5.45c1.07-3.4,1.69-6.97,1.86-10.7c0.17-3.73,0.28-8,0.35-12.8V78.28z"/>
                    <path className="morph2__5" d="M249.86,116.2c8.58-1.12,17.16-0.7,25.74,1.26c8.58,1.96,16.32,5.28,23.23,9.94c6.9,4.67,12.36,10.64,16.37,17.92c4.01,7.28,5.74,15.68,5.18,25.2c-0.56,9.15-3.13,17.36-7.7,24.64c-4.58,7.28-10.32,13.49-17.22,18.62c-6.91,5.14-14.52,9.06-22.82,11.76c-8.31,2.71-16.57,4.06-24.78,4.06c-10.27,0-19-1.35-26.18-4.06c-7.19-2.7-12.84-5.46-16.94-8.26c-5.42-3.73-9.85-8.12-13.3-13.16c-3.46-5.04-5.18-10.45-5.18-16.24c0-5.97,2.16-11.15,6.48-15.54c4.32-4.38,9.58-6.58,15.78-6.58c6.19,0,11.45,2.2,15.78,6.58c4.32,4.39,6.48,9.57,6.48,15.54c0,7.1-2.62,12.79-7.84,17.08c-1.5,1.31-2.94,2.9-4.34,4.76c-1.4,1.87-1.82,4.11-1.26,6.72c0.37,2.8,2.47,5.09,6.3,6.86c3.82,1.78,8.24,3.04,13.26,3.78c3.89,0.56,7.83-0.51,11.82-3.22c3.99-2.7,7.6-6.58,10.85-11.62c3.24-5.04,5.93-11.15,8.06-18.34c2.13-7.18,3.2-14.98,3.2-23.38c0-5.22-0.75-10.31-2.24-15.26c-1.49-4.94-3.68-9.38-6.57-13.3c-2.89-3.92-6.53-7.04-10.91-9.38c-4.38-2.33-9.47-3.5-15.25-3.5c-8.95,0-16.79,1.59-23.5,4.76c-6.72,3.18-12.03,6.35-15.95,9.52V77c0-3.92,0.65-7.98,1.96-12.18c1.3-4.2,3.63-8.02,7-11.48c3.36-3.45,7.97-6.3,13.85-8.54c5.88-2.24,13.29-3.36,22.25-3.36c3.54,0,7.32,0.33,11.33,0.98c4.01,0.66,8.11,1.36,12.31,2.1c4.2,0.75,8.39,1.45,12.6,2.1c4.2,0.66,8.26,0.98,12.18,0.98c3.54,0,6.9-0.28,10.07-0.84s6.02-1.4,8.54-2.52c2.52-1.12,4.53-2.56,6.02-4.34c1.49-1.77,2.24-3.87,2.24-6.3h2.24c0.18,0.75,0.51,2.71,0.98,5.88c0.46,3.18,0.6,6.96,0.42,11.34c-0.19,4.39-0.8,9.06-1.82,14c-1.03,4.95-2.99,9.57-5.88,13.86c-2.89,4.3-6.81,8.03-11.75,11.2c-4.94,3.18-11.24,5.04-18.89,5.6c-6.16,0.56-12.36,0.28-18.61-0.84s-12.31-2.52-18.19-4.2c-5.88-1.68-11.38-3.22-16.51-4.62c-5.13-1.4-9.75-2.1-13.85-2.1c-5.41,0-9.61,1.26-12.6,3.78s-4.48,5.18-4.48,7.98v44.24c1.68-1.3,4.06-3.17,7.14-5.6c3.08-2.42,6.85-4.8,11.33-7.14c4.48-2.33,9.56-4.52,15.25-6.58C237.22,118.34,243.33,116.94,249.86,116.2z"/>
                    <path className="morph2__9" d="M260.33,31.6c10.81,0,21.2,1.96,31.16,5.88c9.96,3.92,18.77,9.9,26.41,17.92c7.64,8.03,13.79,18.2,18.45,30.52c4.66,12.32,6.99,26.88,6.99,43.68c0,12.51-1.68,24.64-5.03,36.4c-3.36,11.76-8.53,22.22-15.51,31.36c-6.99,9.15-15.75,16.48-26.27,21.98c-10.53,5.51-23.06,8.26-37.59,8.26c-10.06,0-18.72-1.35-25.99-4.06c-7.27-2.7-12.95-5.46-17.04-8.26c-5.41-3.73-9.83-8.12-13.28-13.16c-3.45-5.04-5.17-10.45-5.17-16.24c0-5.97,2.14-11.15,6.44-15.54c4.29-4.38,9.52-6.58,15.68-6.58c6.16,0,11.38,2.2,15.68,6.58c4.29,4.39,6.44,9.57,6.44,15.54c0,3.55-0.7,6.77-2.1,9.66c-1.4,2.9-3.32,5.37-5.74,7.42c-1.5,1.31-2.94,2.9-4.34,4.76c-1.4,1.87-1.82,4.11-1.26,6.72c0.37,2.06,1.72,3.88,4.06,5.46c2.33,1.59,5.22,2.85,8.68,3.78c3.45,0.94,7.37,1.54,11.76,1.82c4.38,0.28,8.82,0.14,13.3-0.42c4.66-0.74,8.58-3.78,11.76-9.1c3.17-5.32,5.74-12.18,7.7-20.58c1.96-8.4,3.31-17.92,4.06-28.56c0.74-10.64,1.12-21.46,1.12-32.48c-1.5,0.75-3.41,1.78-5.74,3.08c-2.34,1.31-5.04,2.57-8.12,3.78c-3.08,1.22-6.58,2.38-10.5,3.5c-3.92,1.12-8.12,1.87-12.6,2.24c-8.4,0.94-16.38,0.28-23.94-1.96c-7.56-2.24-14.1-5.74-19.6-10.5c-5.51-4.76-9.8-10.73-12.88-17.92c-3.08-7.18-4.34-15.44-3.78-24.78c0.56-9.14,2.84-17.4,6.85-24.78c4.01-7.37,9.08-13.67,15.23-18.9c6.15-5.22,13.09-9.28,20.82-12.18C244.17,33.04,252.13,31.6,260.33,31.6z M243.1,91.8c0.18,6.72,1.54,12.98,4.06,18.76c2.52,5.79,5.92,10.6,10.22,14.42c4.29,3.83,9.28,6.44,14.98,7.84c5.69,1.4,11.8,1.17,18.34-0.7c0-12.13-0.38-24.08-1.12-35.84c-0.75-11.76-2.05-22.26-3.92-31.5c-1.87-9.24-4.39-16.66-7.56-22.26c-3.18-5.6-7.19-8.4-12.04-8.4c-2.8,0-5.65,1.54-8.54,4.62c-2.9,3.08-5.42,7.28-7.56,12.6c-2.15,5.32-3.88,11.44-5.18,18.34C243.47,76.58,242.91,83.96,243.1,91.8z"/>
                    <path className="morph2__O"  d="M178.42,71.16c9.81,0,18.61,1.7,26.39,5.09c7.78,3.39,14.4,7.95,19.86,13.69c5.46,5.74,9.67,12.52,12.64,20.34c2.96,7.82,4.44,16.17,4.44,25.03c0,8.87-1.49,17.21-4.44,25.03c-2.96,7.82-7.18,14.65-12.64,20.47c-5.46,5.83-12.08,10.43-19.86,13.82c-7.78,3.39-16.57,5.09-26.39,5.09c-9.82,0-18.66-1.69-26.53-5.09c-7.87-3.39-14.54-7.99-20-13.82c-5.46-5.82-9.63-12.65-12.5-20.47c-2.87-7.82-4.3-16.17-4.3-25.03c0-8.87,1.43-17.21,4.3-25.03c2.87-7.82,7.04-14.6,12.5-20.34c5.46-5.74,12.13-10.3,20-13.69C159.76,72.86,168.6,71.16,178.42,71.16z M198.14,118.63c0-15.82-1.62-27.34-4.86-34.55c-3.24-7.21-8.19-10.82-14.86-10.82c-6.67,0-11.62,3.61-14.86,10.82c-3.24,7.22-4.86,18.74-4.86,34.55v16.69v16.95c0,15.82,1.62,27.34,4.86,34.55c3.24,7.22,8.19,10.82,14.86,10.82c6.67,0,11.62-3.61,14.86-10.82c3.24-7.21,4.86-18.73,4.86-34.55v-16.95V118.63z"/>
                </g>
                <g>
                    <path className="morph3__initial" d="M215.72,249.97c3.86,0,7.57,0.7,11.13,2.1c3.56,1.4,6.71,3.54,9.43,6.4c2.73,2.87,4.92,6.5,6.59,10.9c1.66,4.4,2.5,9.6,2.5,15.6s-0.83,11.2-2.5,15.6c-1.66,4.4-3.86,8.04-6.59,10.9c-2.73,2.87-5.87,5-9.43,6.4c-3.56,1.4-7.27,2.1-11.13,2.1c-3.86,0-7.57-0.7-11.13-2.1c-3.56-1.4-6.72-3.53-9.48-6.4c-2.76-2.87-4.96-6.5-6.59-10.9c-1.63-4.4-2.45-9.6-2.45-15.6s0.81-11.2,2.45-15.6c1.63-4.4,3.83-8.03,6.59-10.9c2.76-2.87,5.92-5,9.48-6.4C208.15,250.67,211.86,249.97,215.72,249.97z M226.57,281.17c-0.07-4.87-0.18-9.17-0.35-12.9c-0.17-3.73-0.79-7.3-1.86-10.7c-0.87-2.6-2.08-4.42-3.62-5.45c-1.54-1.03-3.22-1.55-5.02-1.55c-1.88,0-3.57,0.52-5.07,1.55c-1.51,1.03-2.7,2.85-3.57,5.45c-1.14,3.33-1.79,6.88-1.96,10.65c-0.17,3.77-0.25,8.08-0.25,12.95v7.7c0,4.8,0.08,9.08,0.25,12.85c0.17,3.77,0.82,7.32,1.96,10.65c0.87,2.6,2.06,4.42,3.57,5.45c1.51,1.04,3.2,1.55,5.07,1.55c1.81,0,3.48-0.52,5.02-1.55c1.54-1.03,2.75-2.85,3.62-5.45c1.07-3.4,1.69-6.97,1.86-10.7c0.17-3.73,0.28-8,0.35-12.8V281.17z"/>
                    <path className="morph3__separator" d="M282.73,42.68l-47.52,112h-1.28l47.52-112H282.73z"/>
                    <path className="morph3__M" d="M247.04,329.49c1.29,1.22,2.96,1.83,5,1.83v1.56h-3.89h-23.05h-31.11v-1.56c2.04,0,3.7-0.61,5-1.8c1.29-1.21,1.94-2.78,1.94-4.69v-18.51v-74.06c0-7.47-1.42-12.56-4.27-15.26c-2.84-2.69-6.28-4.04-10.31-4.0c-2.94,0-6.06,0.7-9.36,2.09c-3.3,1.39-6.16,2.96-8.56,4.69c2.59,5.22,3.89,11.3,3.89,18.25v72.23v14.6c0,1.92,0.62,3.48,1.87,4.6c1.24,1.22,2.84,1.83,4.8,1.83v1.56h-3.61h-23.33h-31.11v-1.56c2.03,0,3.75-0.61,5.14-1.83c1.39-1.21,2.08-2.78,2.08-4.69v-18.5v-74.06c0-6.08-1.02-10.6-3.05-13.56c-2.04-2.95-4.58-4.78-7.64-5.48c-3.06-0.69-6.3-0.52-9.72,0.52c-3.43,1.04-6.53,2.35-9.31,3.9c0.55,2.96,0.83,6.17,0.83,9.65v57.89v8.34v31.29c0,1.92,0.65,3.48,1.94,4.69c1.29,1.22,2.96,1.83,5,1.83v1.56h-3.89H79.26H48.1v-1.56c2.04,0,3.7-0.61,5-1.83c1.29-1.21,1.94-2.78,1.94-4.69V293.5v-81.1c0-1.91-0.65-3.48-1.94-4.69c-1.3-1.21-2.96-1.83-5-1.8v-1.56h31.11c5.37,0,9.53,0.91,12.5,2.74c2.96,1.83,5,4.82,6.11,9c6.29-3.65,12.92-6.52,19.86-8.61c6.94-2.09,13.56-3.13,19.86-3.1c6.29,0,12.03,1.09,17.22,3.26c5.18,2.18,9.35,5.7,12.5,10.56c6.67-4.52,13.89-7.95,21.67-10.3c7.78-2.35,14.9-3.52,21.39-3.5c4.81,0,9.31,0.61,13.47,1.83c4.17,1.22,7.82,3.17,10.97,5.87c3.15,2.7,5.65,6.17,7.5,10.43c1.85,4.26,2.78,9.43,2.78,15.52v72.2v14.6C245.09,326.71,245.74,328.27,247.04,329.49z"/>
                </g>
                <g>
                    <path className="morph4__initial" d="M281.39,245.58l-47.52,112h-1.28l47.52-112H281.39z"/>
                    <path className="morph4__°" d="M301.78,81.68c3.86,0,7.57,0.7,11.13,2.1c3.56,1.4,6.71,3.53,9.43,6.4c2.73,2.87,4.92,6.5,6.59,10.9s2.5,9.6,2.5,15.6s-0.83,11.2-2.5,15.6s-3.86,8.03-6.59,10.9c-2.73,2.87-5.87,5-9.43,6.4c-3.56,1.4-7.27,2.1-11.13,2.1c-3.86,0-7.57-0.7-11.13-2.1c-3.56-1.4-6.72-3.53-9.48-6.4c-2.76-2.87-4.96-6.5-6.59-10.9c-1.63-4.4-2.45-9.6-2.45-15.6s0.81-11.2,2.45-15.6c1.63-4.4,3.83-8.03,6.59-10.9c2.76-2.87,5.92-5,9.48-6.4C294.21,82.38,297.92,81.68,301.78,81.68z M312.63,112.88c-0.07-4.87-0.18-9.17-0.35-12.9c-0.17-3.73-0.79-7.3-1.86-10.7c-0.87-2.6-2.08-4.42-3.62-5.45c-1.54-1.03-3.22-1.55-5.02-1.55c-1.88,0-3.57,0.52-5.07,1.55c-1.51,1.03-2.7,2.85-3.57,5.45c-1.14,3.33-1.79,6.88-1.96,10.65c-0.17,3.77-0.25,8.08-0.25,12.95v7.7c0,4.8,0.08,9.08,0.25,12.85c0.17,3.77,0.82,7.32,1.96,10.65c0.87,2.6,2.06,4.42,3.57,5.45c1.51,1.04,3.2,1.55,5.07,1.55c1.81,0,3.48-0.52,5.02-1.55c1.54-1.03,2.75-2.85,3.62-5.45c1.07-3.4,1.69-6.97,1.86-10.7c0.17-3.73,0.28-8,0.35-12.8V112.88z"/>
                    <path className="morph4__H" d="M365.53,244.77c1.16,1.22,2.65,1.83,4.47,1.83v1.56h-3.23h-20.91h-27.9v-1.56c1.78,0,3.28-0.61,4.5-1.83c1.22-1.21,1.82-2.78,1.82-4.69v-18.51V147.5c0-5.91-0.87-10.3-2.61-13.17c-1.74-2.87-3.94-4.69-6.58-5.48c-2.65-0.78-5.47-0.74-8.45,0.13c-2.98,0.87-5.72,2.09-8.2,3.65v67.8v8.34v31.29c0,1.92,0.59,3.48,1.77,4.69c1.18,1.22,2.69,1.83,4.55,1.83v1.56h-3.49H280.6h-27.88v-1.56c1.82,0,3.31-0.61,4.47-1.83c1.16-1.21,1.74-2.78,1.74-4.69v-31.29v-85.53v-18.25V73.7c0-1.91-0.58-3.48-1.74-4.69c-1.16-1.21-2.65-1.83-4.47-1.83v-1.56h27.83c6.62,0,11.26,1.74,13.91,5.22c2.65,3.48,3.98,9.39,3.98,17.73v15.91v17.47l0.09,8.61c6.81-4.34,14.03-7.47,21.67-9.39c7.64-1.91,14.7-2.17,21.17-0.78c6.48,1.39,11.83,4.69,16.07,9.91c4.23,5.22,6.35,12.87,6.35,22.95v72.23v14.6C363.79,241.99,364.37,243.55,365.53,244.77z"/>
                </g>
                <g>
                    <path className="morph5__initial" d="M300.45,284.58c3.86,0,7.57,0.7,11.13,2.1c3.56,1.4,6.71,3.53,9.43,6.4c2.73,2.87,4.92,6.5,6.59,10.9c1.66,4.4,2.5,9.6,2.5,15.6s-0.83,11.2-2.5,15.6c-1.66,4.4-3.86,8.03-6.59,10.9c-2.73,2.87-5.87,5-9.43,6.4c-3.56,1.4-7.27,2.1-11.13,2.1c-3.86,0-7.57-0.7-11.13-2.1c-3.56-1.4-6.72-3.53-9.48-6.4c-2.76-2.87-4.96-6.5-6.59-10.9c-1.63-4.4-2.45-9.6-2.45-15.6s0.81-11.2,2.45-15.6c1.63-4.4,3.83-8.03,6.59-10.9c2.76-2.87,5.92-5,9.48-6.4C292.87,285.28,296.58,284.58,300.45,284.58z M311.29,315.78c-0.07-4.87-0.18-9.17-0.35-12.9c-0.17-3.73-0.79-7.3-1.86-10.7c-0.87-2.6-2.08-4.42-3.62-5.45c-1.54-1.03-3.22-1.55-5.02-1.55c-1.88,0-3.57,0.52-5.07,1.55c-1.51,1.03-2.7,2.85-3.57,5.45c-1.14,3.33-1.79,6.88-1.96,10.65c-0.17,3.77-0.25,8.08-0.25,12.95v7.7c0,4.8,0.08,9.08,0.25,12.85c0.17,3.77,0.82,7.32,1.96,10.65c0.87,2.6,2.06,4.42,3.57,5.45c1.51,1.04,3.2,1.55,5.07,1.55c1.81,0,3.48-0.52,5.02-1.55c1.54-1.03,2.75-2.85,3.62-5.45c1.07-3.4,1.69-6.97,1.86-10.7c0.17-3.73,0.28-8,0.35-12.8V315.78z"/>
                    <path className="morph5__3" d="M274.02,261.76c4.66-1.12,10.5-1.26,17.5-0.42c7,0.84,13.72,3.08,20.16,6.72c6.44,3.64,11.8,8.92,16.1,15.82c4.29,6.91,6.16,15.78,5.6,26.6c-0.56,9.15-3.13,17.36-7.7,24.64c-4.58,7.28-10.27,13.49-17.08,18.62c-6.82,5.14-14.42,9.06-22.82,11.76c-8.4,2.71-16.71,4.06-24.92,4.06c-10.27,0-19-1.35-26.18-4.06c-7.19-2.7-12.84-5.46-16.94-8.26c-5.42-3.73-9.85-8.12-13.3-13.16c-3.46-5.04-5.18-10.45-5.18-16.24c0-5.97,2.16-11.15,6.48-15.54c4.32-4.38,9.58-6.58,15.78-6.58c6.19,0,11.45,2.2,15.78,6.58c4.32,4.39,6.48,9.57,6.48,15.54c0,7.1-2.62,12.79-7.84,17.08c-1.5,1.31-2.94,2.9-4.34,4.76c-1.4,1.87-1.82,4.11-1.26,6.72c0.37,2.8,2.47,5.09,6.3,6.86c3.82,1.78,8.24,3.04,13.26,3.78c3.89,0.56,7.83-0.51,11.82-3.22c3.99-2.7,7.6-6.58,10.85-11.62c3.24-5.04,5.93-11.15,8.06-18.34c2.13-7.18,3.2-14.98,3.2-23.38c0-6.72-1.08-12.83-3.22-18.34c-2.15-5.5-5.18-10.08-9.1-13.72c-3.92-3.64-8.63-6.11-14.14-7.42c-5.51-1.3-11.62-1.21-18.34,0.28l-0.56-1.96c4.66-2.24,9.38-5.46,14.14-9.66c4.76-4.2,9.05-8.96,12.88-14.28c3.82-5.32,7.04-11.06,9.66-17.22c2.61-6.16,4.2-12.5,4.76-19.04c0.18-4.48,0-8.77-0.55-12.88c-0.56-4.1-1.62-7.7-3.2-10.78c-1.57-3.08-3.61-5.55-6.11-7.42c-2.5-1.86-5.51-2.8-9.03-2.8c-3.71,0-7.27,0.28-10.7,0.84c-3.43,0.56-6.58,1.31-9.47,2.24c-2.89,0.94-5.27,2.1-7.14,3.5c-1.87,1.4-2.99,3.04-3.36,4.9c-0.56,2.62-0.14,4.86,1.26,6.72c1.4,1.87,2.84,3.46,4.34,4.76c5.22,4.3,7.84,9.99,7.84,17.08c0,6.16-2.16,11.39-6.48,15.68c-4.32,4.3-9.58,6.44-15.78,6.44c-6.2,0-11.46-2.14-15.78-6.44c-4.32-4.29-6.48-9.52-6.48-15.68c0-5.78,1.72-11.15,5.18-16.1c3.45-4.94,7.88-9.28,13.3-13.02c4.1-2.98,9.75-5.83,16.94-8.54c7.18-2.7,15.91-4.06,26.18-4.06c6.9,0,14.14,0.7,21.7,2.1c7.56,1.4,14.51,3.69,20.86,6.86c6.34,3.18,11.53,7.52,15.54,13.02c4.01,5.51,6.02,12.28,6.02,20.3c0,6.54-1.68,12.28-5.04,17.22c-3.36,4.95-7.61,9.29-12.74,13.02c-5.14,3.74-10.69,6.86-16.66,9.38C284.56,257.98,279.06,260.08,274.02,261.76z"/>
                    <path className="morph5__5" d="M262.86,256.2c8.58-1.12,17.16-0.7,25.74,1.26c8.58,1.96,16.32,5.28,23.23,9.94c6.9,4.67,12.36,10.64,16.37,17.92c4.01,7.28,5.74,15.68,5.18,25.2c-0.56,9.15-3.13,17.36-7.7,24.64c-4.58,7.28-10.32,13.49-17.22,18.62c-6.91,5.14-14.52,9.06-22.82,11.76c-8.31,2.71-16.57,4.06-24.78,4.06c-10.27,0-19-1.35-26.18-4.06c-7.19-2.7-12.84-5.46-16.94-8.26c-5.42-3.73-9.85-8.12-13.3-13.16c-3.46-5.04-5.18-10.45-5.18-16.24c0-5.97,2.16-11.15,6.48-15.54c4.32-4.38,9.58-6.58,15.78-6.58c6.2,0,11.45,2.2,15.78,6.58c4.32,4.39,6.48,9.57,6.48,15.54c0,7.1-2.62,12.79-7.84,17.08c-1.5,1.31-2.94,2.9-4.34,4.76c-1.4,1.87-1.82,4.11-1.26,6.72c0.37,2.8,2.47,5.09,6.3,6.86c3.82,1.78,8.24,3.04,13.26,3.78c3.89,0.56,7.83-0.51,11.82-3.22c3.99-2.7,7.6-6.58,10.85-11.62c3.24-5.04,5.93-11.15,8.06-18.34c2.13-7.18,3.2-14.98,3.2-23.38c0-5.22-0.75-10.31-2.24-15.26c-1.49-4.94-3.68-9.38-6.57-13.3c-2.89-3.92-6.53-7.04-10.91-9.38c-4.38-2.33-9.47-3.5-15.25-3.5c-8.95,0-16.79,1.59-23.5,4.76c-6.72,3.18-12.03,6.35-15.95,9.52V217c0-3.92,0.65-7.98,1.96-12.18c1.3-4.2,3.64-8.02,7-11.48c3.36-3.45,7.97-6.3,13.85-8.54c5.88-2.24,13.29-3.36,22.25-3.36c3.54,0,7.32,0.33,11.34,0.98c4.01,0.66,8.11,1.36,12.31,2.1c4.2,0.75,8.39,1.45,12.6,2.1c4.2,0.66,8.26,0.98,12.18,0.98c3.54,0,6.9-0.28,10.07-0.84s6.02-1.4,8.54-2.52c2.52-1.12,4.53-2.56,6.02-4.34c1.49-1.77,2.24-3.87,2.24-6.3h2.24c0.18,0.75,0.51,2.71,0.98,5.88c0.46,3.18,0.6,6.96,0.42,11.34c-0.19,4.39-0.8,9.06-1.82,14c-1.03,4.95-2.99,9.57-5.88,13.86c-2.89,4.3-6.81,8.03-11.75,11.2c-4.94,3.18-11.24,5.04-18.89,5.6c-6.16,0.56-12.36,0.28-18.61-0.84s-12.31-2.52-18.19-4.2c-5.88-1.68-11.38-3.22-16.51-4.62c-5.13-1.4-9.75-2.1-13.85-2.1c-5.41,0-9.61,1.26-12.59,3.78c-2.98,2.52-4.48,5.18-4.48,7.98v44.24c1.68-1.3,4.05-3.17,7.13-5.6c3.08-2.42,6.85-4.8,11.33-7.14c4.48-2.33,9.56-4.52,15.25-6.58C250.22,258.34,256.33,256.94,262.86,256.2z"/>
                    <path className="morph5__A" d="M364.01,385.21c0,2.03,0.65,3.68,1.94,4.97c1.29,1.29,2.96,1.93,5,1.93v1.66h-31.11c-5.93,0-10.37-1.1-13.33-3.31c-2.96-2.21-4.91-5.89-5.83-11.04c-3.71,4.05-8.24,7.31-13.61,9.8c-5.37,2.48-11.11,4-17.22,4.55c-5.93,0.55-11.48,0.14-16.67-1.24c-5.19-1.38-9.68-3.68-13.47-6.9c-3.8-3.22-6.72-7.22-8.75-12.01c-2.04-4.78-2.69-10.3-1.94-16.56c0.55-5.52,2.13-10.21,4.72-14.08c2.59-3.86,5.74-7.22,9.45-10.07c3.7-2.85,7.87-5.24,12.5-7.18c4.63-1.93,9.35-3.63,14.17-5.11c9.81-2.94,16.9-5.89,21.25-8.83c4.35-2.94,7.26-5.7,8.75-8.28v-13.8c0-10.49-1.14-18.31-3.42-23.46c-2.28-5.15-6.89-7.27-13.82-6.35c-8.5,0.92-13.31,3.86-14.42,8.83c-0.56,2.58,0,4.74,1.67,6.49c1.67,1.75,3.24,3.36,4.72,4.83c2.04,2.03,3.61,4.33,4.72,6.9c1.11,2.58,1.67,5.43,1.67,8.56c0,6.07-2.14,11.23-6.43,15.46c-4.29,4.23-9.51,6.35-15.65,6.35c-6.15,0-11.37-2.11-15.66-6.35c-4.29-4.23-6.43-9.38-6.43-15.46c0-5.15,1.39-10.03,4.17-14.63c2.78-4.6,6.62-8.6,11.53-12.01c4.9-3.4,10.6-6.07,17.08-8c6.48-1.93,13.42-2.9,20.83-2.9c7.4,0,14.35,0.97,20.83,2.9c6.48,1.93,12.13,4.6,16.94,8c4.81,3.41,8.65,7.41,11.53,12.01c2.87,4.6,4.3,9.48,4.3,14.63v77.83v1.93v7.18V385.21z M317.07,380.79c0.55-0.55,1.11-1.06,1.67-1.52c0.55-0.46,1.11-0.97,1.67-1.52c-0.19-1.28-0.33-2.62-0.42-4c-0.09-1.38-0.14-2.8-0.14-4.28v-10.49v-52.71c-2.6,3.31-5.51,6.12-8.75,8.42c-3.24,2.3-6.35,5.06-9.31,8.28c-2.96,3.22-5.46,7.45-7.5,12.7c-2.04,5.24-3.06,12.38-3.06,21.39c0,6.99,0.88,12.47,2.64,16.42c1.76,3.96,3.98,6.76,6.67,8.42c2.68,1.66,5.51,2.3,8.47,1.93C311.98,383.46,314.66,382.45,317.07,380.79z"/>
                </g>
            </svg>
        </div>
	);
}

export default LoadingPageDesktop;
