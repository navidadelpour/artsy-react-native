import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ArtistsList from './ArtistsList';
import HomeHeader from './HomeHeader';

import {POPULAR_ARTISTS, TRENDING_ARTISTS} from '../../graphql/artists';

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
