import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';
import {Language} from '@appTypes/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import {
  cTechnology_image,
  cTechnology_imageContainer,
  cTechnology_link,
  cTechnology_paragraph,
  cTechnology_technology,
  cTechnology_textContainer,
  cTechnology_title,
} from './Technology.styles';

type Props = {
  technology: CompleteTechnologyFromApi;
  language: Language;
};

export default function Technology({technology, language}: Props) {
  return (
    <div key={technology.id} className={cTechnology_technology}>
      <div className={cTechnology_imageContainer}>
        <Image
          src={technology.links.logo.href}
          alt={technology.name}
          width={0}
          height={0}
          sizes={'100vw'}
          className={cTechnology_image}
        />
      </div>
      <div className={cTechnology_textContainer}>
        <h2 className={cTechnology_title}>{technology.name}</h2>
        <p className={cTechnology_paragraph}>{technology.description[language]}</p>
      </div>
      <Link href={technology.website} className={cTechnology_link}>
        Consulter
      </Link>
    </div>
  );
}
