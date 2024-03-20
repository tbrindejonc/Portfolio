'use client';

import useLanguage from '@hooks/useLanguage';
import {
  circleStyle,
  langageButtonStyle,
  langageContainerStyle,
  langageStyle,
} from '@styles/components/navbar/buttons/LangageButton.styles';

export default function LanguageButton() {
  const {language, setLanguage} = useLanguage();

  const switchLangage = () => {
    setLanguage(language === 'french' ? 'english' : 'french');
  };

  return (
    <div className={langageButtonStyle} onClick={switchLangage}>
      <div className={circleStyle}></div>
      <div className={langageContainerStyle}>
        <h2 className={langageStyle}>{language.substring(0, 2)}</h2>
      </div>
    </div>
  );
}
