import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card, ActivityIndicator, Colors, Caption, Subheading, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import useMockedQuery from '../../hooks/useMockedQuery';
import BasicIconMessage from '../../components/BasicIconMessage';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    marginBottom: 16,
  },
  subheading: {
    textTransform: 'uppercase',
    marginLeft: 16,
  },
  list: {
    marginTop: 8,
  },
  card: {
    width: 200,
    padding: 8,
    marginRight: 16,
    marginBottom: 16,
  },
  firstCard: {
    marginLeft: 16,
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
  error: {
    height: 320,
  },
});

function ArtistCard({item, index}) {
  const isFirstItem = index === 0;
  const navigation = useNavigation();
  const {id, image, name, nationality, birthday} = item;

  function onPress() {
    navigation.navigate('Artist', {id, artistName: name});
  }

  return (
    <Card style={[styles.card, isFirstItem && styles.firstCard]} onPress={onPress}>
      <Card.Cover source={{uri: image.url}} />
      <Card.Content style={styles.cardContent}>
        <Subheading>{name}</Subheading>
        <Caption>
          {nationality}
          {nationality && birthday && ', '}
          {birthday && `b ${birthday}`}
        </Caption>
      </Card.Content>
    </Card>
  );
}

export default function ArtistsList({query, variables, dataKey, subheading}) {
  const {data, loading, error} = useMockedQuery(query, {variables});
  const artists =
    data &&
    data[dataKey] &&
    data[dataKey].artists &&
    data[dataKey].artists.length > 0 &&
    data[dataKey].artists;

  return (
    <View style={styles.wrapper}>
      <Paragraph style={styles.subheading}>{subheading}</Paragraph>
      {error && (
        <BasicIconMessage
          error
          style={styles.error}
          icon="warning"
          message="Failed Fetching artists!"
        />
      )}
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator color={Colors.black} />
        </View>
      )}
      {artists && (
        <FlatList
          horizontal
          style={styles.list}
          data={artists}
          renderItem={props => <ArtistCard {...props} />}
        />
      )}
    </View>
  );
}
