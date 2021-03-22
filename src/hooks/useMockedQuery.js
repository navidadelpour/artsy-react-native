import {useQuery} from '@apollo/client';

// import artistMock from '../mocks/artistMock';
// import artworkMock from '../mocks/artworkMock';
// import popularArtistsMock from '../mocks/popularArtistsMock';
// import trendingArtistsMock from '../mocks/trendingArtistsMock';

// const SHOULD_MOCK = false;

// const mocks = {
//   PopularArtists: popularArtistsMock,
//   TrendingArtists: trendingArtistsMock,
//   Artist: artistMock,
//   Artwork: artworkMock,
// };

export default function useMockedQuery(query, options = {}) {
  // if (SHOULD_MOCK) {
  //   const queryName = query.definitions[0].name.value;
  //   const mock = mocks[queryName];
  //   return {...mock, loading: false, error: false};
  // }
  return useQuery(query, options);
}
