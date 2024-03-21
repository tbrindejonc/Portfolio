import Image from 'next/image';
import {API_TECH_LOGO_URL} from '@constants/portfolio';
import React from 'react';
import {Technology} from '@prisma/client';
import {
  techImageContainer,
  techImageStyle,
  techItemStyle,
} from '@styles/components/technology/MiniTechnologyCard.styles';

type Props = {
  technology: Technology;
};

export default function MiniTechnologyCard({technology}: Props) {
  return (
    <div className={techItemStyle}>
      <div className={techImageContainer}>
        <Image
          src={API_TECH_LOGO_URL + technology.logo}
          alt={technology.name}
          width={0}
          height={0}
          sizes={'100vw'}
          className={techImageStyle}
        />
      </div>
      <p>{technology.name}</p>
    </div>
  );
}
