import React, {memo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Caption, Card, Subheading} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {routes} from 'utils/routes';
import getItemLayoutWithSpacing from 'utils/getItemLayoutWithSpacing';
import BasicIconMessage from 'components/BasicIconMessage';

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    marginBottom: 16,
    flex: 1,
    height: 250,
  },
  list: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  cardContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  priceLabel: {
    position: 'absolute',
    right: 8,
    top: 8,
    paddingHorizontal: 8,
  },
  priceText: {
    fontWeight: 'bold',
  },
});

function ArtistArtwork({item}) {
  const navigation = useNavigation();
  const {id, title, image, category, price} = item;
  const url = image && image.url;

  function onPress() {
    navigation.navigate(routes.artworkScreen, {id, artworkName: title});
  }

  return (
    <Card onPress={onPress} style={styles.card}>
      <Card.Cover source={{uri: url}} />
      <Card.Content style={styles.cardContent}>
        {title ? <Subheading numberOfLines={1}>{title}</Subheading> : null}
        {category ? <Caption numberOfLines={1}>{category}</Caption> : null}
      </Card.Content>
      {price ? (
        <Card style={[styles.priceLabel]}>
          <Subheading style={styles.priceText} numberOfLines={1}>
            {price}
          </Subheading>
        </Card>
      ) : null}
    </Card>
  );
}

const ArtistArtworkMemoized = memo(ArtistArtwork);

function keyExtractor(item) {
  return item.id;
}

const getItemLayout = getItemLayoutWithSpacing.bind(
  this,
  styles.card.height,
  styles.card.marginBottom,
);

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
      initialNumToRender={2}
      maxToRenderPerBatch={1}
      windowSize={5}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
    />
  );
}
