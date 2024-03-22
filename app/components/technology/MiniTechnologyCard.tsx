import Image from 'next/image';
import {API_TECH_LOGO_URL} from '@constants/portfolio';
import React from 'react';
import {Technology} from '@prisma/client';
import {
  cMiniTechCard_icon,
  cMiniTechCard_iconContainer,
  cMiniTechCard_miniTechCard,
} from '@styles/components/technology/MiniTechnologyCard.styles';

type Props = {
  technology: Technology;
};

export default function MiniTechnologyCard({technology}: Props) {
  return (
    <div className={cMiniTechCard_miniTechCard}>
      <div className={cMiniTechCard_iconContainer}>
        <Image
          src={API_TECH_LOGO_URL + technology.logo}
          alt={technology.name}
          width={0}
          height={0}
          sizes={'100vw'}
          className={cMiniTechCard_icon}
        />
      </div>
      <p>{technology.name}</p>
    </div>
  );
}
