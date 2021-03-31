import React, {memo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Caption, Card, Subheading, Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import BasicIconMessage from 'components/BasicIconMessage';

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

const ArtistArtworkMemoized = memo(ArtistArtwork);

function keyExtractor(item) {
  return item.id;
}

export default function ArtistArtworks({artworks}) {
  if (!artworks || artworks.length === 0) {
    return (
      <BasicIconMessage message="No artwoks made yet!" icon="error-outline" />
    );
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={artworks}
      contentContainerStyle={styles.list}
      renderItem={props => <ArtistArtworkMemoized {...props} />}
      numColumns={2}
      initialNumToRender={4}
      maxToRenderPerBatch={2}
      windowSize={6}
      keyExtractor={keyExtractor}
    />
  );
}
