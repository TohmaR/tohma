import React from 'react';
import { useTranslation } from 'react-i18next';

import "./TranslationToggle.css"

function TranslationToggle() {
  const { i18n } = useTranslation();

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