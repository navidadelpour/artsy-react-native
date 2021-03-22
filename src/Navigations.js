import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {View} from 'react-native';
import ArtistListScreen from './screens/ArtistListScreen';
import ArtistDetailScreen from './screens/ArtistDetailScreen';
import BiographyDetail from './screens/ArtistDetailScreen/BiographyDetail';
import ArtworkDetailScreen from './screens/ArtworkDetailScreen';
import ArtsyLogo from './assets/logo/artsy-logo.svg';

const Stack = createStackNavigator();

function ArtsyLogoComponent() {
  return (
    <View style={{marginLeft: 8}}>
      <ArtsyLogo />
    </View>
  );
}

export default function Navigations() {
  return (
    <>
      <Stack.Navigator initialRouteName="Artists">
        <Stack.Screen
          name="Artists"
          options={{
            headerLeft: ArtsyLogoComponent,
            title: 'Artsy',
          }}
          component={ArtistListScreen}
        />
        <Stack.Screen
          name="Artist"
          component={ArtistDetailScreen}
          options={({route}) => ({
            title: route.params.artistName,
            headerStyle: {elevation: 0},
          })}
        />
        <Stack.Screen
          name="Artwork"
          component={ArtworkDetailScreen}
          options={({route}) => ({
            title: route.params.artworkName,
          })}
        />
        <Stack.Screen
          name="BiographyDetail"
          component={BiographyDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
