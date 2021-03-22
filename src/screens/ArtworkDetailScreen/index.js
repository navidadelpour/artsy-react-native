import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ScrollView, StyleSheet} from 'react-native';
import {Caption} from 'react-native-paper';
import BasicIconMessage from '../../components/BasicIconMessage';
import Loader from '../../components/Loader';
import {ARTWORK} from '../../graphql/artwork';
import useMockedQuery from '../../hooks/useMockedQuery';
import ArtworkImage from './ArtworkImage';
import ArtistInfo from './ArtworkArtistInfo';
import ArtworkInformation from './ArtworkInformation';

const styles = StyleSheet.create({
  imageCaption: {
    textAlign: 'center',
    paddingHorizontal: 4,
  },
});

export default function ArtworkDetailScreen() {
  const {params} = useRoute();
  const id = params && params.id;
  const {data, loading, error} = useMockedQuery(ARTWORK, {
    variables: {id},
  });

  if (error) {
    return <BasicIconMessage error icon="warning" message="There is some problems" />;
  }

  if (loading) {
    return <Loader />;
  }

  const {artwork} = data;
  const {image, title, formattedMetadata, artist} = artwork;
  const url = image && image.url;
  const artistId = artist && artist.id;

  return (
    <ScrollView>
      <ArtworkImage url={url} />
      <Caption style={styles.imageCaption}>{formattedMetadata || title}</Caption>
      <ArtistInfo id={artistId} />
      <ArtworkInformation artwork={artwork} />
    </ScrollView>
  );
}
