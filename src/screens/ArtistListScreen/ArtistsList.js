import React from 'react';
import {useQuery} from '@apollo/client';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card, Subheading, ActivityIndicator, Colors, Caption} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
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
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    height: 320,
  },
});

function keyExtractor(item) {
  return item.id;
}

function ArtistCard({item}) {
  const navigation = useNavigation();
  const {id, image, name, nationality, birthday} = item;

  function onPress() {
    navigation.navigate('Artist', {id});
  }

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Cover source={{uri: image.url}} />
      <Card.Content style={styles.cardContent}>
        <Subheading>{name}</Subheading>
        <Caption>
          {nationality}, b {birthday}
        </Caption>
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
    <View style={styles.wrapper}>
      <Subheading style={styles.subheading}>{subheading}</Subheading>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={Colors.black} />
        </View>
      ) : (
        <FlatList
          horizontal
          style={styles.list}
          data={artists}
          keyExtractor={keyExtractor}
          renderItem={props => <ArtistCard {...props} />}
        />
      )}
    </View>
  );
}
