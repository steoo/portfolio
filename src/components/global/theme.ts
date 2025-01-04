import { DefaultTheme } from 'styled-components';

import { generateClampSizes } from '../../utils/styled-helpers';

export const theme: DefaultTheme = {
  red: '#FF0004',
  white: '#FFFFFF',
  black: '#000000',

  menuItem: generateClampSizes(18, 36),
  rootVerticalMargin: generateClampSizes(12, 24),
  rootHorizontalMargin: generateClampSizes(16, 32),

  mobileS: '320px', // Small mobile
  mobileM: '375px', // Medium mobile
  mobileL: '425px', // Large mobile
  tablet: '768px', // Tablet
  laptop: '1024px', // Small laptop
  laptopL: '1440px', // Large laptop
  desktop: '2560px', // Desktop
};

export type ThemeType = typeof theme;
