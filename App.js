import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ApolloProvider} from '@apollo/client';

import client from './src/apollo/client';
import Navigations from './src/Navigations';

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <PaperProvider>
          <Navigations />
        </PaperProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
}
