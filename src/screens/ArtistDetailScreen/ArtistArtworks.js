import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, StyleSheet} from 'react-native';
import {Caption, Card, Subheading, Title} from 'react-native-paper';

import BasicIconMessage from '../../components/BasicIconMessage';

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    marginBottom: 16,
    flex: 1,
  },
  list: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  cardContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default function ArtistArtworks({artworks}) {
  if (!artworks || artworks.length === 0) {
    return <BasicIconMessage message="No artwoks made yet!" icon="error-outline" />;
  }

  return (
    <FlatList
      data={artworks}
      contentContainerStyle={styles.list}
      renderItem={props => <ArtistArtwork {...props} />}
      numColumns={2}
    />
  );
}

function ArtistArtwork({item}) {
  const navigation = useNavigation();
  const {id, title, image, category, price} = item;
  const url = image && image.url;

  function onPress() {
    navigation.navigate('Artwork', {id, artworkName: title});
  }

  return (
    <Card onPress={onPress} style={styles.card}>
      <Card.Cover source={{uri: url}} />
      <Card.Content style={styles.cardContent}>
        {price ? <Title>{price}</Title> : null}
        {title ? <Subheading>{title}</Subheading> : null}
        {category ? <Caption>{category}</Caption> : null}
      </Card.Content>
    </Card>
  );
}
