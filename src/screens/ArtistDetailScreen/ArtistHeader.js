import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Caption, Paragraph, Title, useTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default function ArtistHeader({name, nationality, birthday, location}) {
  const theme = useTheme();
  return (
    <View style={[styles.wrapper, {backgroundColor: theme.colors.surface}]}>
      <Title>{name}</Title>
      <Paragraph>
        {nationality}
        {nationality && birthday && ', '}
        {birthday && `b ${birthday}`}
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
