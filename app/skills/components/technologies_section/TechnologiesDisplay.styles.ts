import {grid, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {TechCategory} from '@appTypes/portfolio';

const cTechDisplay_container = vstack({
  gap: {
    base: 8,
    md: 12,
  },
  justifyContent: 'center',
});

const cTechDisplay_headerContainer = vstack({
  justifyContent: 'center',
});

const cTechDisplay_headerDecorator = css({
  bg: 'p_blue.main',
  h: {
    base: 1,
    md: 2,
  },
  w: '40vw',
});

const cTechDisplay_headerDecoratorColor = (category: TechCategory, direction: 'left' | 'right') => {
  switch (category) {
    case TechCategory.MASTERED:
      return css({
        bg: 'p_blue.main',
      });

    case TechCategory.LEARNING:
      return css({
        bgGradient: direction === 'right' ? 'to-r' : 'to-l',
        gradientFrom: 'p_blue.main',
        gradientTo: 'p_purple.main',
      });

    case TechCategory.PLANNED:
      return css({
        bgGradient: direction === 'right' ? 'to-r' : 'to-l',
        gradientFrom: 'p_purple.main',
        gradientTo: 'p_blue.main',
      });

    default:
      return css({
        bg: 'p_purple.main',
      });
  }
};

const cTechDisplay_headerTitle = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '5xl',
  },
  fontWeight: 'bold',
  lineHeight: {
    base: 1,
    md: 1.5,
  },
  textAlign: 'center',
});

const cTechDisplay_technologiesContainer = grid({
  gap: {
    base: 4,
    md: 10,
  },
  gridTemplateColumns: {
    base: 2,
    md: 3,
    xl: 4,
  },
  justifyItems: 'center',
});

export {
  cTechDisplay_technologiesContainer,
  cTechDisplay_headerTitle,
  cTechDisplay_headerDecoratorColor,
  cTechDisplay_headerDecorator,
  cTechDisplay_headerContainer,
  cTechDisplay_container,
};
