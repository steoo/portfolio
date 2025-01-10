import { generateClampSizes } from '../../utils/styled-helpers';

const theme = {
  red: '#FF0004',
  brightCrimson: '#F1011F',
  white: '#FFFFFF',
  black: '#000000',

  tinyText: generateClampSizes(10, 20),
  smallText: generateClampSizes(12, 24),
  mediumSmallText: generateClampSizes(18, 32),
  regularText: generateClampSizes(20, 40),
  mediumText: generateClampSizes(32, 64),
  bigText: generateClampSizes(48, 96),

  menuItem: generateClampSizes(18, 36),
  rootVerticalMargin: generateClampSizes(12, 24),
  rootHorizontalMargin: generateClampSizes(16, 32),
  footerVerticalMargin: generateClampSizes(24, 48),

  mobileS: '320px', // Small mobile
  mobileM: '375px', // Medium mobile
  mobileL: '425px', // Large mobile
  tablet: '768px', // Tablet
  laptop: '1024px', // Small laptop
  laptopL: '1440px', // Large laptop
  desktop: '2560px', // Desktop
};

export default theme;
