import React from 'react';
import {StatusBar, View} from 'react-native';
import {Title, useTheme} from 'react-native-paper';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {initialRoutes, routes} from 'utils/routes';
import ArtistListScreen from 'screens/ArtistListScreen';
import ArtistDetailScreen from 'screens/ArtistDetailScreen';
import WebviewScreen from 'screens/WebviewScreen';
import ArtworkDetailScreen from 'screens/ArtworkDetailScreen';
import ShowDetailScreen from 'screens/ShowDetailScreen';

import ArtsyLogoComponent from 'components/ArtsyLogoComponent';
import ToggleThemeButton from 'components/ToggleThemeButton';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  const theme = useTheme();
  return (
    <>
      <StatusBar translucent backgroundColor="black" />
      <Stack.Navigator
        initialRouteName={initialRoutes.root}
        screenOptions={{
          headerTintColor: theme.colors.text,
        }}>
        <Stack.Screen
          name={routes.artistsScreen}
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
          name={routes.artistScreen}
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
          name={routes.artworkScreen}
          component={ArtworkDetailScreen}
          options={({route}) => ({
            title: route?.params?.artworkName,
          })}
        />
        <Stack.Screen
          name={routes.showScreen}
          component={ShowDetailScreen}
          options={({route}) => ({
            title: route?.params?.showName,
            headerTranslucent: true,
            headerHideShadow: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'transparent',
            },
          })}
        />
        <Stack.Screen
          name={routes.webviewScreen}
          component={WebviewScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
