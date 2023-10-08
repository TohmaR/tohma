import React, {useLayoutEffect} from 'react';
import { useTranslation } from 'react-i18next';
import gsap from "gsap";

import "./TranslationToggle.css"

function TranslationToggle() {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    const tlTranslationToggle = gsap.timeline();

    tlTranslationToggle.fromTo(".translationToggle", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 0.5 });

    const { pathname } = window.location;
    if (pathname === "/") {
        tlTranslationToggle.delay(6.3);
    }
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <div className="translationToggle">
      <div onClick={() => changeLanguage('en')}>En</div>
      <div className="translationToggle__separator"></div>
      <div onClick={() => changeLanguage('fr')}>Fr</div>
    </div>
  );
}

export default TranslationToggle;