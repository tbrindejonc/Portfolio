import {css} from '@/styled-system/css';
import {circle, grid, vstack} from '@/styled-system/patterns';
import {Direction} from '@appTypes/portfolio';

const cProject_image = css({
  width: {
    base: 'full',
    xl: '50%',
  },
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
    ms: {
      xl: '10vw',
    },
    overflow: {
      base: 'scroll',
      xl: 'hidden',
    },
    p: {
      base: 4,
      md: 8,
    },
    transition: 'all 0.5s',
    zIndex: 1,
  });
};

const cProject_descriptionContainer = (direction: Direction) => {
  return css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: {
      base: 'column',
      xl: direction === 'left' ? 'row' : 'row-reverse',
    },
    gap: 4,
    justifyContent: {
      xl: 'space-between',
    },
  });
};

const cProject_detailsContainer = css({
  alignItems: 'start',
  display: 'flex',
  flexDirection: {
    base: 'column',
    xl: 'row',
  },
  gap: {
    base: 4,
    md: 8,
  },
  justifyContent: {
    xl: 'space-between',
  },
  w: {
    xl: 'full',
  },
});

const cProject_texts = (direction: Direction) => {
  return vstack({
    alignItems: {
      base: direction === 'left' ? 'start' : 'end',
      xl: direction === 'left' ? 'end' : 'start',
    },
    gap: 2,
    textAlign: {
      xl: direction === 'left' ? 'right' : 'left',
    },
    w: {
      xl: '40%',
    },
  });
};

const cProject_title = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '4xl',
    md: '6xl',
  },
  fontWeight: 'bold',
});

const cProject_paragraph = (direction: Direction) => {
  return css({
    fontSize: {
      md: '2xl',
    },
    textAlign: {
      base: direction,
      xl: direction === 'left' ? 'right' : 'left',
    },
    textWrap: 'balance',
  });
};

const cProject_techContainer = (direction: Direction) => {
  return vstack({
    alignItems: direction === 'left' ? 'start' : 'end',
    gap: 4,
    w: {
      base: 'full',
      xl: '80%',
    },
  });
};

const cProject_viewContainer = (direction: Direction) => {
  return vstack({
    alignItems: direction === 'left' ? 'start' : 'end',
    gap: 4,
    w: {
      base: 'full',
      xl: '20%',
    },
  });
};

const cProject_detailsTitle = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: 'xl',
    md: '3xl',
  },
  fontWeight: 'bold',
});

const cProject_techHolder = (direction: Direction) => {
  return grid({
    direction: direction === 'left' ? 'ltr' : 'rtl',
    gridTemplateColumns: {
      base: 3,
      md: 5,
      xl: 10,
    },
    gap: {
      base: 4,
      md: 6,
    },
    justifyItems: 'center',
    w: 'full',
  });
};

const cProject_consultContainer = (direction: Direction) => {
  return grid({
    direction: direction === 'left' ? 'ltr' : 'rtl',
    gridTemplateColumns: {
      base: 3,
      md: 5,
      xl: 3,
    },
    gap: {
      base: 4,
      md: 6,
    },
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
  h: {
    base: '15vh',
    md: 28,
  },
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
  cProject_viewContainer,
};
