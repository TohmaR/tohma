import React, { useEffect, useState } from "react";
import { 
  Switch, 
  Route, 
  useLocation,
  useHistory
} from "react-router-dom"; 
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import HomePage from "./Pages/Home";
import './App.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Amazon from "./components/Project/Amazon";
import Sneakmart from "./components/Project/Sneakmart";
import HDMI from "./components/Project/HDMI";
import Social from "./components/Social/Social";
import Hamburger from "./components/Hamburger/Hamburger";
import { Cursor } from "react-creative-cursor";
import 'react-creative-cursor/dist/styles.css';
import Footer from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });
  const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo(0, 0);
    if(pathname === "/"){
      setTimeout(() => {
        document.body.style.overflowY = "scroll";
      }, "6000")
    }
    else{
      document.body.style.overflowY = "scroll";
    }
    //Prevent hover effect on scroll 
    var body = document.body,timer;
    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
      }
      timer = setTimeout(function(){
        body.classList.remove('disable-hover')
      },500);
    }, false);
  }, []);

  return (
   
    <div className="App" >
      <AnimatePresence initial={false} mode="wait">
        <ScrollToTop />
        <Social />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Hamburger />
            <HomePage />
            <Footer />
          </Route> 
          <Route path="/Amazon">
            <Amazon />
            <Hamburger />
            {isDesktop && <Cursor isGelly={true} gellyAnimationAmount={1} cursorSize={20} cursorBackgrounColor={"#e3e3e3"} />}
          </Route> 
          <Route path="/Sneakmart">
            <Sneakmart />
            <Hamburger />
            {isDesktop && <Cursor isGelly={true} gellyAnimationAmount={1} cursorSize={20} cursorBackgrounColor={"#e3e3e3"} />}
          </Route> 
          <Route path="/HDMI">
            <HDMI />
            <Hamburger />
            {isDesktop && <Cursor isGelly={true} gellyAnimationAmount={1} cursorSize={20} cursorBackgrounColor={"#e3e3e3"} />}
          </Route> 
        </Switch>
      </AnimatePresence>
    </div>
    

  );
}

export default App;
