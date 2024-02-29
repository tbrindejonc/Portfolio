// app theme
export type Theme = 'light' | 'dark';

// app langage
export type Langage = 'fr' | 'en';

// langage context exported utilities
export type LangageContextUtils = {
  langage: Langage;
  setLangage: (langage: Langage) => void;
};
