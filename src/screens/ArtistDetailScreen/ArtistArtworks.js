import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, StyleSheet} from 'react-native';
import {Caption, Card, Subheading, Title} from 'react-native-paper';

import BasicIconMessage from '../../components/BasicIconMessage';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 16,
    marginLeft: 16,
  },
  evenCard: {
    marginRight: 16,
  },
  firstTwoCard: {
    marginTop: 16,
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
      style={styles.wrapper}
      data={artworks}
      renderItem={props => <ArtistArtwork {...props} />}
      numColumns={2}
    />
  );
}

function ArtistArtwork({item, index}) {
  const navigation = useNavigation();
  const isEven = (index + 1) % 2 === 0;
  const isFirstTwoCards = index < 2;
  const {id, title, image, category, price} = item;
  const url = image && image.url;

  function onPress() {
    navigation.navigate('Artwork', {id, artworkName: title});
  }

  return (
    <Card
      style={[styles.card, isEven && styles.evenCard, isFirstTwoCards && styles.firstTwoCard]}
      onPress={onPress}>
      <Card.Cover source={{uri: url}} />
      <Card.Content style={styles.cardContent}>
        {price ? <Title>{price}</Title> : null}
        {title ? <Subheading>{title}</Subheading> : null}
        {category ? <Caption>{category}</Caption> : null}
      </Card.Content>
    </Card>
  );
}
