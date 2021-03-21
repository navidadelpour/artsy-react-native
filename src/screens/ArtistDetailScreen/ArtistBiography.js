import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Moment from 'react-moment';

import {Button, Caption, Card, Colors, Paragraph, Subheading, Title} from 'react-native-paper';

const biographyStyles = StyleSheet.create({
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
});

export default function ArtistBiography({
  author,
  href,
  thumbnail_image,
  thumbnail_title,
  thumbnail_teaser,
  published_at,
}) {
  const navigation = useNavigation();
  const link = `https://www.artsy.net${href}`;

  function onPress() {
    navigation.navigate('BiographyDetail', {link});
  }

  return (
    <ScrollView>
      <Card style={biographyStyles.card}>
        <Card.Cover source={{uri: thumbnail_image.url}} />
        <Card.Content>
          <Title style={biographyStyles.title}>{thumbnail_title}</Title>
          <View style={biographyStyles.subheading}>
            <Subheading>{author.name}</Subheading>
            <Moment element={Caption} format="YYYY/MM/DD">
              {published_at}
            </Moment>
          </View>
          <Paragraph>{thumbnail_teaser}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" style={biographyStyles.button} onPress={onPress}>
            Read More
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
