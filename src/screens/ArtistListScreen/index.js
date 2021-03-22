import React from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import ArtistsList from './ArtistsList';

import {POPULAR_ARTISTS, TRENDING_ARTISTS} from '../../graphql/artists';

export default function ArtistListScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ScrollView>
        <ArtistsList
          query={POPULAR_ARTISTS}
          dataKey="popular_artists"
          subheading="popular artists"
        />
        <ArtistsList
          query={TRENDING_ARTISTS}
          variables={{name: 'ARTIST_FAIR'}}
          dataKey="trending_artists"
          subheading="with most artworks in fairs"
        />
        <ArtistsList
          query={TRENDING_ARTISTS}
          variables={{name: 'ARTIST_INQUIRY'}}
          dataKey="trending_artists"
          subheading="trending artists"
        />
        <ArtistsList
          query={TRENDING_ARTISTS}
          variables={{name: 'ARTIST_FOLLOW'}}
          dataKey="trending_artists"
          subheading="most followed"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
