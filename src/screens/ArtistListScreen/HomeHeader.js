import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Headline, Subheading} from 'react-native-paper';

import HomeHeaderImage from 'assets/images/home-header.jpeg';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

function HomeHeader() {
  return (
    <View>
      <Card.Cover source={HomeHeaderImage} />
      <View style={styles.overlay}>
        <Headline style={styles.text}>Artsy</Headline>
        <Subheading style={styles.text}>
          Discover, buy, and sell art by the world’s leading artists
        </Subheading>
      </View>
    </View>
  );
}

export default memo(HomeHeader);
