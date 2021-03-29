import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Caption, Card, Subheading} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import BasicIconMessage from 'components/BasicIconMessage';

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    marginBottom: 16,
  },
  list: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  captionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default function ArtistShows({shows}) {
  if (!shows || shows.length === 0) {
    return <BasicIconMessage message="No shows." icon="error-outline" />;
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      data={shows}
      renderItem={props => <ArtistShow {...props} />}
    />
  );
}

function ArtistShow({item}) {
  const navigation = useNavigation();
  const {id, name, cover_image: image, city, status, exhibition_period} = item;
  const url = image && image.url;

  function onPress() {
    navigation.navigate('Show', {id, showName: name});
  }

  return (
    <Card onPress={onPress} style={styles.card}>
      <Card.Cover source={{uri: url}} />
      <Card.Content style={styles.cardContent}>
        {name ? <Subheading>{name}</Subheading> : null}
        <View style={styles.captionWrapper}>
          <Caption>
            {city}
            {city && exhibition_period && ', '}
            {exhibition_period}
          </Caption>
          <Caption>{status}</Caption>
        </View>
      </Card.Content>
    </Card>
  );
}
