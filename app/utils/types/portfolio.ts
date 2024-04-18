import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';
import {UseQueryResult} from '@tanstack/react-query';
import {ApiCollection} from '@appTypes/api';

// app theme
export type Theme = 'light' | 'dark';

// base app text
export type AppText = {
  english: string;
  french: string;
};

// type for app texts language
export type Language = 'english' | 'french';

// langage context exported utilities
export type LanguageContextUtils = {
  language: Language;
  setLanguage: (langage: Language) => void;
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

// experience section explanation text
export type ExperienceExplanation = {
  title: AppText;
  content: {
    firstPart: AppText;
    firstSpan: AppText;
    secondPart: AppText;
    secondSpan: AppText;
    lastPart: AppText;
  };
};

// activity explanation text
export type Activity = {
  title: AppText;
  description: {
    firstPart: AppText;
    firstSpan: AppText;
    secondPart: AppText;
    secondSpan: AppText;
  };
};

// title and link texts for activity section
export type ActivityTexts = {
  title: AppText;
  link: AppText;
};

// title and link texts for contact section
export type ContactTexts = {
  title: AppText;
  link: AppText;
};

// title and link texts for not found page
export type NotFoundTexts = {
  title: AppText;
  link: AppText;
};

// texts for a page's landing section
export type BaseLandingTexts = {
  title: AppText;
  explanations: AppText;
  link: AppText;
};

// experience context exported utilities
export type ExperienceContextUtils = {
  experience: CompleteExperienceFromApi;
  language: Language;
};

// enum for each tech category ids in the database
export enum TechCategory {
  TOOLS = 4,
  MASTERED = 5,
  LEARNING = 6,
  PLANNED = 7,
}

// utilities returned by useTechWithCategory hook
export type TechCategoryUtils = {
  filteredTechnologies: CompleteTechnologyFromApi[];
  technologies: UseQueryResult<ApiCollection<CompleteTechnologyFromApi>>;
};

// texts for the sidebar links in the skills section
export type SkillsSidebarTexts = {
  titles: AppText[];
  links: string[];
};
