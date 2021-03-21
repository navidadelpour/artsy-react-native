import React, {Fragment} from 'react';
import {useRoute} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useQuery} from '@apollo/client';

import {ActivityIndicator, Colors} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {ARTIST} from '../../graphql/artists';
import artistMock from '../../mocks/artistMock';
import ArtistBiography from './ArtistBiography';
import ArtistHeader from './ArtistHeader';

const ArtistTab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  loader: {justifyContent: 'center', alignItems: 'center', flexGrow: 1},
});

export default function ArtistDetailScreen({mock = artistMock}) {
  const {params} = useRoute();
  const {data, loading} = mock
    ? {
        ...mock,
        loading: false,
        error: false,
      }
    : useQuery(ARTIST, {variables: {id: params.id}});

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={Colors.black} />
      </View>
    );
  }

  const {name, nationality, birthday, location, biography} = data && data.artist;

  function _ArtistBiography(props) {
    return <ArtistBiography biography={biography} {...props} />;
  }

  return (
    <>
      <ArtistHeader name={name} nationality={nationality} birthday={birthday} location={location} />
      <ArtistTab.Navigator
        initialRouteName="Biography"
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: Colors.black,
          },
        }}>
        <ArtistTab.Screen name="Biography" component={_ArtistBiography} />
        <ArtistTab.Screen name="Works" component={_ArtistBiography} />
      </ArtistTab.Navigator>
    </>
  );
}
