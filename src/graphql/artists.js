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
  query TrendingArtists($name: TrendingMetrics!) {
    trending_artists(name: $name) {
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
      image {
        url
      }
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
      shows {
        id
        name
        exhibition_period
        city
        cover_image {
          url
        }
      }
    }
  }
`;
