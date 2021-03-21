import React from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import ArtistsList from './ArtistsList';

import {POPULAR_ARTISTS, TRENDING_ARTISTS} from '../../graphql/artists';
import popularArtistsMock from '../../mocks/popularArtistsMock';
import trendingArtistsMock from '../../mocks/trendingArtistsMock';

export default function ArtistListScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ScrollView>
        <ArtistsList
          mock={popularArtistsMock}
          query={POPULAR_ARTISTS}
          dataKey="popular_artists"
          subheading="POPULAR ARTISTS"
        />
        <ArtistsList
          mock={trendingArtistsMock}
          query={TRENDING_ARTISTS}
          dataKey="trending_artists"
          subheading="TRENDING ARTISTS"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
