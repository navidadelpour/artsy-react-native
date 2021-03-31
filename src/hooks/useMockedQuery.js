import {useQuery} from '@apollo/client';

import artistMock from 'mocks/artistMock';
import artworkMock from 'mocks/artworkMock';
import showMock from 'mocks/showMock';
import popularArtistsMock from 'mocks/popularArtistsMock';
import trendingArtistsMock from 'mocks/trendingArtistsMock';
import {useEffect, useState} from 'react';

// eslint-disable-next-line no-undef
const SHOULD_MOCK = __DEV__;
const LOADING_TIME = 0;

const mocks = {
  PopularArtists: popularArtistsMock,
  TrendingArtists: trendingArtistsMock,
  Artist: artistMock,
  Artwork: artworkMock,
  Show: showMock,
};

export default function useMockedQuery(query, options = {}) {
  const result = useQuery(query, {options, skip: SHOULD_MOCK});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), LOADING_TIME);
  }, []);

  if (SHOULD_MOCK) {
    const queryName = query.definitions[0].name.value;
    const mock = mocks[queryName];
    if (!mock) {
      throw new Error('Mock not found.');
    }
    return {
      data: loading ? null : mock.data,
      loading,
      error: false,
    };
  }

  return result;
}
