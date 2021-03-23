import {gql} from '@apollo/client';

export const ARTWORK = gql`
  query Artwork($id: String!) {
    artwork(id: $id) {
      formattedMetadata
      contact_message
      priceIncludesTax
      width
      height
      widthCm
      heightCm
      sizeScore
      publisher
      signature
      displayLabel
      medium
      imageUrl
      image_rights
      image_title
      literature
      manufacturer
      metric
      provenance
      series
      published
      series
      title
      category
      is_sold
      price
      conditionDescription {
        label
        details
      }
      certificateOfAuthenticity {
        label
        details
      }
      framed {
        label
        details
      }
      partner {
        name
      }
      artist {
        id
        name
        birthday
        nationality
        image {
          url
        }
      }
      image {
        url
      }
    }
  }
`;
