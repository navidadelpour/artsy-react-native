import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {ApolloProvider, gql, useQuery} from '@apollo/client';

import {View} from 'react-native';
import client from './apollo/client';
import Navigations from './Navigations';
import {isDarkTheme} from './apollo/cache';
import Loader from './components/Loader';

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

const IS_DARK_THEME = gql`
  query {
    isDarkTheme @client
  }
`;

function ThemeController({children}) {
  const {data} = useQuery(IS_DARK_THEME);
  const darkMode = data && data.isDarkTheme;
  const theme = darkMode ? darkTheme : defaultTheme;

  useEffect(() => {
    AsyncStorage.getItem('isDarkTheme').then(value => {
      const isDarkThemeStorage = value === 'true';
      isDarkTheme(isDarkThemeStorage);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('isDarkTheme', `${darkMode}`);
  }, [darkMode]);

  if (darkMode === undefined) {
    return <Loader />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </PaperProvider>
    </View>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeController>
        <Navigations />
      </ThemeController>
    </ApolloProvider>
  );
}
