import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {Caption, Subheading} from 'react-native-paper';

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
  const {id, name, cover_image: image, city, exhibition_period} = item;
  const url = image && image.url;

  function onPress() {
    navigation.navigate('Artwork', {id, artworkName: name});
  }

  return (
    <ArtistDetailCard image={url} index={index} onPress={onPress}>
      {name ? <Subheading>{name}</Subheading> : null}
      <Caption>
        {city}
        {city && exhibition_period && ', '}
        {exhibition_period}
      </Caption>
    </ArtistDetailCard>
  );
}
