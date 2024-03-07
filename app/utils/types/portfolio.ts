// app theme
export type Theme = 'light' | 'dark';

// app langage
export type Langage = 'fr' | 'en';

// base app text
export type AppText = {
  en: string;
  fr: string;
};

// langage context exported utilities
export type LangageContextUtils = {
  langage: Langage;
  setLangage: (langage: Langage) => void;
};

// app links for nav menu
export type AppLink = {
  title: AppText;
  href: string;
};

// footer link for footer section
export type FooterLink = {
  title: AppText;
  span:
    | {
        text: string;
        color: string;
      }
    | false;
  href: string;
};

// carousel slide item text
export type Slide = {
  title: AppText;
  content: {
    firstPart: AppText;
    firstSpan: AppText;
    secondPart: AppText;
    secondSpan: AppText;
    lastPart: AppText;
  };
  variant: 'first' | 'second' | 'third';
};
