import React from 'react';
import {StatusBar, View} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import ArtistListScreen from 'screens/ArtistListScreen';
import ArtistDetailScreen from 'screens/ArtistDetailScreen';
import WebviewScreen from 'screens/WebviewScreen';
import ArtworkDetailScreen from 'screens/ArtworkDetailScreen';
import ShowDetailScreen from 'screens/ShowDetailScreen';

import ArtsyLogoComponent from 'components/ArtsyLogoComponent';
import ToggleThemeButton from 'components/ToggleThemeButton';
import {Title, useTheme} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  const theme = useTheme();
  return (
    <>
      <StatusBar translucent backgroundColor="black" />
      <Stack.Navigator
        initialRouteName="Artists"
        screenOptions={{
          headerTintColor: theme.colors.text,
        }}>
        <Stack.Screen
          name="Artists"
          options={{
            headerLeft: props => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ArtsyLogoComponent {...props} />
                <Title>Artsy</Title>
              </View>
            ),
            headerRight: props => <ToggleThemeButton {...props} />,
            title: 'Artsy',
          }}
          component={ArtistListScreen}
        />
        <Stack.Screen
          name="Artist"
          component={ArtistDetailScreen}
          options={() => ({
            headerTranslucent: true,
            headerHideShadow: true,
            title: null,
            headerStyle: {
              backgroundColor: 'transparent',
            },
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
