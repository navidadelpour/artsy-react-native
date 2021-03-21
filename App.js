import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ApolloProvider} from '@apollo/client';

import client from './src/apollo/client';

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <PaperProvider>
          <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            <Text>Hello world 2</Text>
          </SafeAreaView>
        </PaperProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
}
