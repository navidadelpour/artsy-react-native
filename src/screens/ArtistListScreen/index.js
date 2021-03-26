import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Card, Headline, Subheading} from 'react-native-paper';
import ArtistsList from './ArtistsList';

import {POPULAR_ARTISTS, TRENDING_ARTISTS} from '../../graphql/artists';
import HomeHeaderImage from '../../assets/images/home-header.jpeg';

export default function ArtistListScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeHeader />
        <ArtistsList
          query={POPULAR_ARTISTS}
          dataKey="popular_artists"
          subheading="popular artists"
        />
        <ArtistsList
          query={TRENDING_ARTISTS}
          variables={{name: 'ARTIST_FOLLOW'}}
          dataKey="trending_artists"
          subheading="most followed"
        />
        <ArtistsList
          query={TRENDING_ARTISTS}
          variables={{name: 'ARTIST_INQUIRY'}}
          dataKey="trending_artists"
          subheading="trending artists"
        />
        <ArtistsList
          query={TRENDING_ARTISTS}
          variables={{name: 'ARTIST_FAIR'}}
          dataKey="trending_artists"
          subheading="with most artworks in fairs"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

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
