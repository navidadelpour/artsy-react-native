import React from 'react';
import {useQuery} from '@apollo/client';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card, Paragraph, Subheading, Title, ActivityIndicator} from 'react-native-paper';

const artistsListStyles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    marginBottom: 32,
  },
  subheading: {
    marginLeft: 16,
  },
  list: {
    marginTop: 8,
  },
  card: {
    width: 200,
    padding: 8,
    margin: 16,
    marginTop: 0,
  },
  cardContent: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
});

function keyExtractor(item) {
  return item.id;
}

function ArtistCard({item}) {
  const {image, name, nationality, birthday} = item;
  return (
    <Card style={artistsListStyles.card}>
      <Card.Cover source={{uri: image.url}} />
      <Card.Content style={artistsListStyles.cardContent}>
        <Title>{name}</Title>
        <Paragraph>
          {nationality} - b {birthday}
        </Paragraph>
      </Card.Content>
    </Card>
  );
}

export default function ArtistsList({query, mock, dataKey, subheading}) {
  const {data, loading} = mock
    ? {
        ...mock,
        loading: false,
        error: false,
      }
    : useQuery(query);

  const artists =
    data &&
    data[dataKey] &&
    data[dataKey].artists &&
    data[dataKey].artists.length > 0 &&
    data[dataKey].artists;

  return (
    <View style={artistsListStyles.wrapper}>
      <Subheading style={artistsListStyles.subheading}>{subheading}</Subheading>
      {loading && <ActivityIndicator />}
      <FlatList
        horizontal
        style={artistsListStyles.list}
        data={artists}
        keyExtractor={keyExtractor}
        renderItem={ArtistCard}
      />
    </View>
  );
}
