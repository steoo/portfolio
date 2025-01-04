// styled.d.ts
import 'styled-components';
import { ThemeType } from '../src/components/global/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    ted: 'lasso';
  }
}
