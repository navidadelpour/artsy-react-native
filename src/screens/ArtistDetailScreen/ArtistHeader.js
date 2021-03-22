import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Caption, Colors, Paragraph, Title} from 'react-native-paper';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function ArtistHeader({name, nationality, birthday, location}) {
  return (
    <View style={styles.wrapper}>
      <Title>{name}</Title>
      <Paragraph>
        {nationality}, b {birthday}
      </Paragraph>
      {location ? (
        <Caption>
          <Icon name="location-on" />
          {location}
        </Caption>
      ) : null}
    </View>
  );
}
