import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Text} from 'react-native';
import {Caption, Subheading} from 'react-native-paper';

import Moment from 'react-moment';
import BasicIconMessage from '../../components/BasicIconMessage';
import ArtistDetailCard from './ArtistDetailCard';

export default function ArtistShows({shows}) {
  if (!shows || shows.length === 0) {
    return <BasicIconMessage message="No shows." icon="error-outline" />;
  }

  return <FlatList data={shows} renderItem={props => <ArtistShow {...props} />} numColumns={2} />;
}

function ArtistShow({item, index}) {
  const navigation = useNavigation();
  const {id, name, meta_image: image, city, start_at, end_at} = item;
  const url = image && image.url;

  function onPress() {
    navigation.navigate('Artwork', {id, artworkName: name});
  }

  return (
    <ArtistDetailCard image={url} index={index} onPress={onPress}>
      {name ? <Subheading>{name}</Subheading> : null}
      <Caption>
        {city ? `${city}, ` : ''}
        <Moment element={Text} format="MMM DD">
          {start_at}
        </Moment>
        {' - '}
        <Moment element={Text} format="MMM DD">
          {end_at}
        </Moment>
      </Caption>
    </ArtistDetailCard>
  );
}
