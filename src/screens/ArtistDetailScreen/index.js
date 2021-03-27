import React, {useCallback} from 'react';
import {useRoute} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {useTheme} from 'react-native-paper';
import {ARTIST} from '../../graphql/artists';
import ArtistBiography from './ArtistBiography';
import ArtistHeader from './ArtistHeader';
import ArtistArtworks from './ArtistArtworks';
import Loader from '../../components/Loader';
import useMockedQuery from '../../hooks/useMockedQuery';
import ArtistShows from './ArtistShows';

const ArtistTab = createMaterialTopTabNavigator();

export default function ArtistDetailScreen() {
  const theme = useTheme();
  const {params} = useRoute();
  const {data, loading} = useMockedQuery(ARTIST, {variables: {id: params?.id}});

  if (loading) {
    return <Loader />;
  }

  const {name, nationality, birthday, location, biography, artworks, shows} = data && data.artist;

  const _ArtistBiography = useCallback(
    props => {
      return <ArtistBiography biography={biography} {...props} />;
    },
    [biography]
  );

  const _ArtistArtworks = useCallback(
    props => {
      return <ArtistArtworks artworks={artworks} {...props} />;
    },
    [artworks]
  );

  const _ArtistShows = useCallback(
    props => {
      return <ArtistShows shows={shows} {...props} />;
    },
    [shows]
  );

  return (
    <>
      <ArtistHeader name={name} nationality={nationality} birthday={birthday} location={location} />
      <ArtistTab.Navigator
        initialRouteName="Works"
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: theme.colors.text,
          },
        }}>
        <ArtistTab.Screen name="Biography" component={_ArtistBiography} />
        <ArtistTab.Screen name="Works" component={_ArtistArtworks} />
        <ArtistTab.Screen name="Shows" component={_ArtistShows} />
      </ArtistTab.Navigator>
    </>
  );
}
