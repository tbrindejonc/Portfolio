'use client';

import useLanguage from '@hooks/useLanguage';
import {
  cLanguageButton_circle,
  cLanguageButton_language,
  cLanguageButton_languageButton,
  cLanguageButton_languageContainer,
} from '@styles/components/navbar/buttons/LanguageButton.styles';

export default function LanguageButton() {
  const {language, setLanguage} = useLanguage();

  const switchLangage = () => {
    setLanguage(language === 'french' ? 'english' : 'french');
  };

  return (
    <div className={cLanguageButton_languageButton} onClick={switchLangage}>
      <div className={cLanguageButton_circle}></div>
      <div className={cLanguageButton_languageContainer}>
        <h2 className={cLanguageButton_language}>{language.substring(0, 2)}</h2>
      </div>
    </div>
  );
}
