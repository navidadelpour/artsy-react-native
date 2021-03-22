import React from 'react';
import {useRoute} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Colors} from 'react-native-paper';
import {ARTIST} from '../../graphql/artists';
import ArtistBiography from './ArtistBiography';
import ArtistHeader from './ArtistHeader';
import ArtistArtworks from './ArtistArtworks';
import Loader from '../../components/Loader';
import useMockedQuery from '../../hooks/useMockedQuery';

const ArtistTab = createMaterialTopTabNavigator();

export default function ArtistDetailScreen() {
  const {params} = useRoute();
  const {data, loading} = useMockedQuery(ARTIST, {variables: {id: params.id}});

  if (loading) {
    return <Loader />;
  }

  const {name, nationality, birthday, location, biography, artworks} = data && data.artist;

  function _ArtistBiography(props) {
    return <ArtistBiography biography={biography} {...props} />;
  }

  function _ArtistArtworks(props) {
    return <ArtistArtworks artworks={artworks} {...props} />;
  }

  return (
    <>
      <ArtistHeader name={name} nationality={nationality} birthday={birthday} location={location} />
      <ArtistTab.Navigator
        initialRouteName="Works"
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: Colors.black,
          },
        }}>
        <ArtistTab.Screen name="Biography" component={_ArtistBiography} />
        <ArtistTab.Screen name="Works" component={_ArtistArtworks} />
      </ArtistTab.Navigator>
    </>
  );
}
