import React, { useLayoutEffect, Suspense } from "react";
import Home from "../components/Home/Home";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import Projects from "../components/Projects/Projects";
import { Cursor } from "react-creative-cursor"
import 'react-creative-cursor/dist/styles.css';
import { useMediaQuery } from 'react-responsive';
import Title from "../components/Title/Title";
import Contact from "../components/Contact/Contact";

function HomePage() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });
	return(
		<div>
            <Home />
            <LoadingPage />
            <Title><span>Selected</span><br/><span>Works</span></Title>
            <Projects />
            <Contact />
            {isDesktop && <Cursor isGelly={true} gellyAnimationAmount={1} cursorSize={13} cursorBackgrounColor={"#e3e3e3"} />}
        </div>
        
	);
}

export default HomePage;