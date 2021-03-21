import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Caption, Colors, Paragraph, Title} from 'react-native-paper';

const artistHeaderStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default function ArtistHeader({name, nationality, birthday, location}) {
  return (
    <View style={artistHeaderStyles.wrapper}>
      <Title>{name}</Title>
      <Paragraph>
        {nationality}, b {birthday}
      </Paragraph>
      <Caption>
        <Icon name="location-on" />
        {location}
      </Caption>
    </View>
  );
}
