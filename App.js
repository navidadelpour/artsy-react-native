import 'react-native-gesture-handler';

import React from 'react';
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
import client from './src/apollo/client';
import Navigations from './src/Navigations';

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
  const theme = data && data.isDarkTheme ? darkTheme : defaultTheme;

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
