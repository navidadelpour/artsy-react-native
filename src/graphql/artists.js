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

export const ARTIST = gql`
  query Artist($id: String!) {
    artist(id: $id) {
      id
      name
      nationality
      birthday
      location
      biography {
        id
        author {
          name
        }
        href
        thumbnail_title
        thumbnail_teaser
        published_at
        thumbnail_image {
          url
        }
      }
      artworks {
        id
        title
        category
        is_sold
        price
        image {
          url
        }
      }
    }
  }
`;
