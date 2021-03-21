import {gql} from '@apollo/client';

export const POPULAR_ARTISTS = gql`
  query PopularArtists {
    popular_artists {
      artists {
        id
        name
        nationality
        birthday
        image {
          url
        }
      }
    }
  }
`;

export const TRENDING_ARTISTS = gql`
  query TrendingArtists {
    trending_artists(name: ARTIST_INQUIRY) {
      artists {
        id
        name
        nationality
        birthday
        image {
          url
        }
      }
    }
  }
`;
