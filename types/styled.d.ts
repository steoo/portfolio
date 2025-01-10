// styled.d.ts
import 'styled-components';
import theme from '../src/components/global/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    ted?: 'lasso';
  }
}
