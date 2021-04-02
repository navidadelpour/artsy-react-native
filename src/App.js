import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {ApolloProvider} from '@apollo/client';

import client from 'apollo/client';
import ThemeController from 'utils/ThemeController';
import Navigations from './Navigations';

enableScreens();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeController>
        <Navigations />
      </ThemeController>
    </ApolloProvider>
  );
}
