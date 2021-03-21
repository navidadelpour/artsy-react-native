import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Moment from 'react-moment';

import {Button, Caption, Card, Colors, Paragraph, Subheading, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  title: {
    marginTop: 8,
    marginBottom: 0,
  },
  subheading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  button: {
    display: 'flex',
    flexGrow: 1,
    marginTop: 16,
    backgroundColor: Colors.black,
  },
  emptyWrapper: {justifyContent: 'center', alignItems: 'center', flexGrow: 1},
  emptyMessage: {fontStyle: 'italic'},
});

export default function ArtistBiography({biography}) {
  if (!biography) {
    return (
      <View style={styles.emptyWrapper}>
        <Icon name="error-outline" size={100} color={Colors.grey400} />
        <Caption style={styles.emptyMessage}>No biography available</Caption>
      </View>
    );
  }
  const {
    author,
    href,
    thumbnail_image,
    thumbnail_title,
    thumbnail_teaser,
    published_at,
  } = biography;

  const navigation = useNavigation();

  const url = thumbnail_image && thumbnail_image.url;
  const authorName = author && author.name;
  const link = `https://www.artsy.net${href}`;

  function onPress() {
    navigation.navigate('BiographyDetail', {link});
  }

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Cover source={{uri: url}} />
        <Card.Content>
          <Title style={styles.title}>{thumbnail_title}</Title>
          <View style={styles.subheading}>
            <Subheading>{authorName}</Subheading>
            <Moment element={Caption} format="YYYY/MM/DD">
              {published_at}
            </Moment>
          </View>
          <Paragraph>{thumbnail_teaser}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" style={styles.button} onPress={onPress}>
            Read More
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}