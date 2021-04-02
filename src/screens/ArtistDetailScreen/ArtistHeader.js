import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Caption, Paragraph, Surface, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 16,
    paddingTop: 40,
    marginBottom: -1,
    zIndex: 2,
  },
  noVerticalMargin: {
    marginVertical: 0,
  },
});

function ArtistHeader({name, nationality, birthday, location}) {
  return (
    <Surface style={styles.wrapper}>
      <Title style={styles.noVerticalMargin}>{name}</Title>
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
    </Surface>
  );
}

export default memo(ArtistHeader);
