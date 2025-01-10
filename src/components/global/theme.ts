import { generateClampSizes } from '../../utils/styled-helpers';

const theme = {
  red: '#FF0004',
  white: '#FFFFFF',
  black: '#000000',

  smallText: generateClampSizes(12, 24),
  mediumText: generateClampSizes(32, 64),
  bigText: generateClampSizes(48, 96),

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

export default theme;
