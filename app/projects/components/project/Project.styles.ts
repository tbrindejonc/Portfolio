import {css} from '@/styled-system/css';
import {circle, grid, vstack} from '@/styled-system/patterns';
import {Direction} from '@appTypes/portfolio';

const cProject_image = css({
  width: 'full',
  height: 'auto',
  objectFit: 'cover',
});

const cProject_project = (direction: Direction) => {
  return vstack({
    alignItems: direction === 'left' ? 'start' : 'end',
    backdropBlur: '10px',
    backdropFilter: 'auto',
    bg: {
      base: 'neutral.light/50',
      _dark: 'neutral.800/50',
    },
    borderRadius: '2xl',
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    gap: 8,
    h: '90%',
    overflow: 'scroll',
    p: 4,
    transition: 'all 0.5s',
    zIndex: 1,
  });
};

const cProject_descriptionContainer = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

const cProject_detailsContainer = css({
  alignItems: 'start',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

const cProject_texts = (direction: Direction) => {
  return vstack({
    alignItems: direction === 'left' ? 'start' : 'end',
    gap: 2,
  });
};

const cProject_title = css({
  fontFamily: 'bricolage',
  fontSize: '4xl',
  fontWeight: 'bold',
});

const cProject_paragraph = (direction: Direction) => {
  return css({
    textAlign: direction,
    textWrap: 'balance',
  });
};

const cProject_techContainer = (direction: Direction) => {
  return vstack({
    alignItems: direction === 'left' ? 'start' : 'end',
    gap: 4,
    w: 'full',
  });
};

const cProject_detailsTitle = css({
  fontFamily: 'bricolage',
  fontSize: 'xl',
  fontWeight: 'bold',
});

const cProject_techHolder = (direction: Direction) => {
  return grid({
    direction: direction === 'left' ? 'ltr' : 'rtl',
    gridTemplateColumns: 3,
    gap: 4,
    justifyItems: 'center',
    w: 'full',
  });
};

const cProject_consultContainer = (direction: Direction) => {
  return grid({
    direction: direction === 'left' ? 'ltr' : 'rtl',
    gridTemplateColumns: 3,
    gap: 4,
    justifyItems: 'center',
    w: 'full',
  });
};

const cProject_consultItems = vstack({
  bg: {
    base: 'p_blue.300',
    _dark: 'p_blue.800',
  },
  borderRadius: 'md',
  h: '15vh',
  justifyContent: 'center',
  w: 'full',
});

const cProject_imageBackground = circle({
  bg: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
  size: 14,
});

const cProject_consultImage = css({
  h: 10,
  objectFit: 'cover',
  w: 10,
});

export {
  cProject_consultItems,
  cProject_consultContainer,
  cProject_descriptionContainer,
  cProject_detailsContainer,
  cProject_detailsTitle,
  cProject_image,
  cProject_imageBackground,
  cProject_paragraph,
  cProject_project,
  cProject_techContainer,
  cProject_techHolder,
  cProject_texts,
  cProject_title,
  cProject_consultImage,
};
