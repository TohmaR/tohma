import React, { useEffect, useState } from "react";
import { 
  Switch, 
  Route, 
  useLocation,
} from "react-router-dom"; 
import loadable from '@loadable/component';
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import HomePage from "./Pages/Home";
import './App.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Social from "./components/Social/Social";
import Hamburger from "./components/Hamburger/Hamburger";
import { Cursor } from "react-creative-cursor";
import 'react-creative-cursor/dist/styles.css';
import Footer from "./components/Footer/Footer";

export const Amazon = loadable(() => import("./components/Project/Amazon"));
export const Sneakmart = loadable(() => import("./components/Project/Sneakmart"));
export const HDMI = loadable(() => import("./components/Project/HDMI"));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });

  useEffect(() => {
    document.body.style.overflowY = location.pathname === "/" ? "hidden" : "scroll";
    
    const handleScroll = () => {
      const body = document.body;
      clearTimeout(window.scrollTimeout);
      
      if (!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover');
      }

      window.scrollTimeout = setTimeout(() => {
        body.classList.remove('disable-hover');
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const showCursor = isDesktop && ['/Amazon', '/Sneakmart', '/HDMI'].includes(location.pathname);

  return (
    <div className="App min-safe-h-screen">
      <AnimatePresence initial={false} mode="wait">
        <ScrollToTop key="scrollToTop" />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <HomePage />
            <Hamburger />
            <Social/>
            <Footer />
          </Route>
          <Route path="/Amazon">
            <Amazon />
            <Hamburger key="hamburger" />
            <Social/>
          </Route>
          <Route path="/Sneakmart">
            <Sneakmart />
            <Hamburger key="hamburger" />
            <Social/>
          </Route>
          <Route path="/HDMI">
            <HDMI />
            <Hamburger key="hamburger" />
            <Social/>
          </Route>
        </Switch>
        {showCursor && <Cursor isGelly={true} gellyAnimationAmount={1} cursorSize={20} cursorBackgroundColor={"#e3e3e3"} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
