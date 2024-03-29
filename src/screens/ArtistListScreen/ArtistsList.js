import React, {memo, useCallback} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {Card, Caption, Subheading} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {routes} from 'utils/routes';
import getItemLayoutWithSpacing from 'utils/getItemLayoutWithSpacing';
import useMockedQuery from 'hooks/useMockedQuery';
import BasicIconMessage from 'components/BasicIconMessage';
import Loader from 'components/Loader';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  contentContainerStyle: {
    paddingTop: 4,
    paddingLeft: 16,
  },
  listTitle: {fontWeight: '500'},
  subheading: {
    textTransform: 'uppercase',
    marginLeft: 16,
  },
  card: {
    width: 200,
    padding: 8,
    paddingBottom: 4,
    marginRight: 16,
    marginBottom: 16,
  },
  cardContent: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  loader: {
    width: Dimensions.get('window').width - 32,
    height: 280,
  },
  error: {
    width: Dimensions.get('window').width - 32,
    height: 280,
  },
});

function ArtistCard({item}) {
  const navigation = useNavigation();
  const {id, image, name, nationality, birthday} = item;

  function onPress() {
    navigation.navigate(routes.artistScreen, {id, artistName: name});
  }

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Cover source={{uri: image.url}} />
      <Card.Content style={styles.cardContent}>
        <Subheading style={styles.listTitle} numberOfLines={1}>
          {name}
        </Subheading>
        <Caption numberOfLines={1}>
          {nationality}
          {nationality && birthday && ', '}
          {birthday && `b ${birthday}`}
        </Caption>
      </Card.Content>
    </Card>
  );
}

const ArtistCardMemoized = memo(ArtistCard);

function keyExtractor(item) {
  return item.id;
}

const getItemLayout = getItemLayoutWithSpacing.bind(
  this,
  styles.card.width,
  styles.card.marginRight,
);

export default function ArtistsList({query, variables, dataKey, subheading}) {
  const {data, loading} = useMockedQuery(query, {variables});

  const artists =
    data &&
    data[dataKey] &&
    data[dataKey].artists &&
    data[dataKey].artists.length > 0 &&
    data[dataKey].artists;

  const renderItem = useCallback(
    props => <ArtistCardMemoized {...props} />,
    [],
  );

  const ListEmptyComponent = useCallback(
    () =>
      loading ? (
        <Loader style={styles.loader} />
      ) : (
        <BasicIconMessage
          error
          style={styles.error}
          icon="warning"
          message="Failed Fetching artists!"
        />
      ),
    [loading],
  );

  return (
    <View style={styles.wrapper}>
      <Caption style={styles.subheading}>{subheading}</Caption>
      <FlatList
        showsHorizontalScrollIndicator={false}
        initialNumToRender={2}
        maxToRenderPerBatch={2}
        windowSize={5}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.list}
        data={artists}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
}
