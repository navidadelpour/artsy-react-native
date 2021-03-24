import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {View} from 'react-native';
import {IconButton, useTheme} from 'react-native-paper';
import ArtistListScreen from './screens/ArtistListScreen';
import ArtistDetailScreen from './screens/ArtistDetailScreen';
import WebviewScreen from './screens/WebviewScreen';
import ArtworkDetailScreen from './screens/ArtworkDetailScreen';
import ArtsyLogoLight from './assets/logo/artsy-logo-light.svg';
import ArtsyLogoDark from './assets/logo/artsy-logo-dark.svg';
import {isDarkTheme} from './apollo/cache';
import ShowDetailScreen from './screens/ShowDetailScreen';

const Stack = createStackNavigator();

function ArtsyLogoComponent(props) {
  const theme = useTheme();
  return (
    <View style={{marginLeft: 8}} {...props}>
      {theme.dark ? <ArtsyLogoLight /> : <ArtsyLogoDark />}
    </View>
  );
}

function ToggleThemeButton(props) {
  const theme = useTheme();
  const icon = theme.dark ? 'weather-sunny' : 'weather-night';

  function onPress() {
    isDarkTheme(!isDarkTheme());
  }

  return <IconButton icon={icon} onPress={onPress} {...props} />;
}

export default function Navigations() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Artists"
        screenOptions={{
          headerRight: props => <ToggleThemeButton {...props} />,
        }}>
        <Stack.Screen
          name="Artists"
          options={{
            headerLeft: props => <ArtsyLogoComponent {...props} />,
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
        <Stack.Screen name="Webview" component={WebviewScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </>
  );
}
