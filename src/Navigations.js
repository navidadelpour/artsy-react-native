import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ArtistsScreen from './screens/ArtistsScreen';
import ArtistDetailScreen, {BiographyDetail} from './screens/ArtistDetailScreen';

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <>
      <Stack.Navigator initialRouteName="Artists">
        <Stack.Screen name="Artists" component={ArtistsScreen} />
        <Stack.Screen name="Artist" component={ArtistDetailScreen} />
        <Stack.Screen
          name="BiographyDetail"
          component={BiographyDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
