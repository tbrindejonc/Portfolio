// app theme
export type Theme = 'light' | 'dark';

// app langage
export type Langage = 'fr' | 'en';

// langage context exported utilities
export type LangageContextUtils = {
  langage: Langage;
  setLangage: (langage: Langage) => void;
};

// app links for nav menu
export type AppLink = {
  title: {
    en: string;
    fr: string;
  };
  href: string;
};

// footer link for footer section
export type FooterLink = {
  title: {
    en: string;
    fr: string;
  };
  span:
    | {
        text: string;
        color: string;
      }
    | false;
  href: string;
};
