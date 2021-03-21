import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ApolloProvider} from '@apollo/client';

import client from './src/apollo/client';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <PaperProvider>
          <HomeScreen />
        </PaperProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
}
