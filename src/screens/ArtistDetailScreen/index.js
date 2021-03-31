import React, {useCallback} from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {ARTIST} from 'graphql/artists';
import useMockedQuery from 'hooks/useMockedQuery';
import withMountAfterInteraction from 'utils/withMountAfterInteraction';
import BasicIconMessage from 'components/BasicIconMessage';
import Loader from 'components/Loader';
import ArtistBiography from './ArtistBiography';
import ArtistHeader from './ArtistHeader';
import ArtistArtworks from './ArtistArtworks';
import ArtistShows from './ArtistShows';

const ArtistTab = createMaterialTopTabNavigator();
const initialLayout = {width: Dimensions.get('window').width};

function ArtistDetailScreen() {
  const {params} = useRoute();
  const {data, error, loading} = useMockedQuery(ARTIST, {
    variables: {id: params?.id},
  });

  if (error) {
    return (
      <BasicIconMessage error icon="warning" message="Unknown error happend" />
    );
  }

  if (loading) {
    return <Loader />;
  }

  const {artist} = data;
  return <ArtistDetail artist={artist} />;
}

function ArtistDetail({artist}) {
  const theme = useTheme();
  const {
    name,
    nationality,
    birthday,
    location,
    biography,
    artworks,
    shows,
  } = artist;

  const _ArtistBiography = useCallback(
    props => <ArtistBiography biography={biography} {...props} />,
    [biography],
  );

  const _ArtistArtworks = useCallback(
    props => <ArtistArtworks artworks={artworks} {...props} />,
    [artworks],
  );

  const _ArtistShows = useCallback(
    props => <ArtistShows shows={shows} {...props} />,
    [shows],
  );

  const LazyPlaceholder = useCallback(props => <Loader {...props} />, []);

  return (
    <>
      <ArtistHeader
        name={name}
        nationality={nationality}
        birthday={birthday}
        location={location}
      />
      <ArtistTab.Navigator
        lazy
        lazyPlaceholder={LazyPlaceholder}
        initialRouteName="Works"
        initialLayout={initialLayout}
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

export default withMountAfterInteraction(ArtistDetailScreen);
