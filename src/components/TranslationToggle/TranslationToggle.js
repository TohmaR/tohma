import React, {useLayoutEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'
import gsap from "gsap";

import "./TranslationToggle.css"

function TranslationToggle() {
  const { i18n } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  useLayoutEffect(() => {
    const tlTranslationToggle = gsap.timeline();

    tlTranslationToggle.fromTo(".translationToggle", { y: 200 }, { y: 0, duration: 0.65, autoAlpha: 1, display: "flex" });

    const { pathname } = window.location;
    if (pathname === "/") {
        tlTranslationToggle.delay(4.3);
    }
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    isDesktop &&
    <motion.div 
        className="translationToggle"
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div onClick={() => changeLanguage('en')}>En</div>
      <div className="translationToggle__separator"></div>
      <div onClick={() => changeLanguage('fr')}>Fr</div>
    </motion.div>
  );
}

export default TranslationToggle;