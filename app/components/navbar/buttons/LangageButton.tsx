'use client';

import useLanguage from '@hooks/useLanguage';
import {
  circleStyle,
  langageButtonStyle,
  langageContainerStyle,
  langageStyle,
} from '@styles/components/navbar/buttons/LangageButton.styles';

export default function LangageButton() {
  const {langage, setLangage} = useLanguage();

  const switchLangage = () => {
    setLangage(langage === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className={langageButtonStyle} onClick={switchLangage}>
      <div className={circleStyle}></div>
      <div className={langageContainerStyle}>
        <h2 className={langageStyle}>{langage}</h2>
      </div>
    </div>
  );
}
