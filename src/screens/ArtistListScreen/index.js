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
          subheading="POPULAR ARTISTS"
        />
        <ArtistsList
          query={TRENDING_ARTISTS}
          dataKey="trending_artists"
          subheading="TRENDING ARTISTS"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
