import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Caption, Paragraph, Subheading, useTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  subheading: {
    fontWeight: 'bold',
  },
  noVerticalMargin: {
    marginVertical: 0,
  },
});

export default function ArtistHeader({name, nationality, birthday, location}) {
  const theme = useTheme();
  return (
    <View style={[styles.wrapper, {backgroundColor: theme.colors.surface}]}>
      <Subheading style={[styles.subheading, styles.noVerticalMargin]}>{name}</Subheading>
      <Paragraph style={styles.noVerticalMargin}>
        {nationality}
        {nationality && birthday && ', '}
        {birthday && `b ${birthday}`}
      </Paragraph>
      {location ? (
        <Caption style={styles.noVerticalMargin}>
          <Icon name="location-on" />
          {location}
        </Caption>
      ) : null}
    </View>
  );
}
