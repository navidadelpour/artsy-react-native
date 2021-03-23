import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, StyleSheet, View} from 'react-native';
import {Caption, Subheading} from 'react-native-paper';

import BasicIconMessage from '../../components/BasicIconMessage';
import ArtistDetailCard from './ArtistDetailCard';

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
  captionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function ArtistShows({shows}) {
  if (!shows || shows.length === 0) {
    return <BasicIconMessage message="No shows." icon="error-outline" />;
  }

  return <FlatList data={shows} renderItem={props => <ArtistShow {...props} />} />;
}

function ArtistShow({item, index}) {
  const navigation = useNavigation();
  const {id, name, cover_image: image, city, status, exhibition_period} = item;
  const url = image && image.url;

  function onPress() {
    navigation.navigate('Show', {id, showName: name});
  }

  return (
    <ArtistDetailCard image={url} index={index} onPress={onPress} style={styles.card}>
      {name ? <Subheading>{name}</Subheading> : null}
      <View style={styles.captionWrapper}>
        <Caption>
          {city}
          {city && exhibition_period && ', '}
          {exhibition_period}
        </Caption>
        <Caption>{status}</Caption>
      </View>
    </ArtistDetailCard>
  );
}
