import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const defaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  mode: 'exact',
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};

const darkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  mode: 'exact',
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

export default function getTheme(isDark) {
  return isDark ? darkTheme : defaultTheme;
}
