import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView>
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <Text>Hello world 3</Text>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}
