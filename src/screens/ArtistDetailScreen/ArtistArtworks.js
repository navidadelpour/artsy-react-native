import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {Caption, Subheading, Title} from 'react-native-paper';

import BasicIconMessage from '../../components/BasicIconMessage';
import ArtistDetailCard from './ArtistDetailCard';

export default function ArtistArtworks({artworks}) {
  if (!artworks || artworks.length === 0) {
    return <BasicIconMessage message="No artwoks made yet!" icon="error-outline" />;
  }

  return (
    <FlatList data={artworks} renderItem={props => <ArtistArtwork {...props} />} numColumns={2} />
  );
}

function ArtistArtwork({item, index}) {
  const navigation = useNavigation();
  const {id, title, image, category, price} = item;
  const url = image && image.url;

  function onPress() {
    navigation.navigate('Artwork', {id, artworkName: title});
  }

  return (
    <ArtistDetailCard onPress={onPress} image={url} index={index}>
      {price ? <Title>{price}</Title> : null}
      {title ? <Subheading>{title}</Subheading> : null}
      {category ? <Caption>{category}</Caption> : null}
    </ArtistDetailCard>
  );
}
