import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import ArtistListScreen from 'screens/ArtistListScreen';
import ArtistDetailScreen from 'screens/ArtistDetailScreen';
import WebviewScreen from 'screens/WebviewScreen';
import ArtworkDetailScreen from 'screens/ArtworkDetailScreen';
import ShowDetailScreen from 'screens/ShowDetailScreen';

import ArtsyLogoComponent from 'components/ArtsyLogoComponent';
import ToggleThemeButton from 'components/ToggleThemeButton';

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <Stack.Navigator initialRouteName="Artists">
        <Stack.Screen
          name="Artists"
          options={{
            headerLeft: props => <ArtsyLogoComponent {...props} />,
            headerRight: props => <ToggleThemeButton {...props} />,
            title: 'Artsy',
          }}
          component={ArtistListScreen}
        />
        <Stack.Screen
          name="Artist"
          component={ArtistDetailScreen}
          options={({route}) => ({
            title: route?.params?.artistName,
            headerStyle: {elevation: 0},
          })}
        />
        <Stack.Screen
          name="Artwork"
          component={ArtworkDetailScreen}
          options={({route}) => ({
            title: route?.params?.artworkName,
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowDetailScreen}
          options={({route}) => ({
            title: route?.params?.showName,
          })}
        />
        <Stack.Screen
          name="Webview"
          component={WebviewScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
