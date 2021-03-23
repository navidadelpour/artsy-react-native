import {gql} from '@apollo/client';

export const SHOW = gql`
  query Show($id: String!) {
    show(id: $id) {
      id
      name
      city
      description
      exhibition_period
      kind
      status
      press_release
      counts {
        artists
        artworks
      }
      cover_image {
        url
      }
      images {
        url
      }
    }
  }
`;
