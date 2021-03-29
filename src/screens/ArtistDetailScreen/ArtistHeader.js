import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Caption, Paragraph, Subheading, Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: -1,
    zIndex: 2,
  },
  subheading: {
    fontWeight: 'bold',
  },
  noVerticalMargin: {
    marginVertical: 0,
  },
});

function ArtistHeader({name, nationality, birthday, location}) {
  return (
    <Surface style={[styles.wrapper]}>
      <Subheading style={[styles.subheading, styles.noVerticalMargin]}>
        {name}
      </Subheading>
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
