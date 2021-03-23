import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, StyleSheet} from 'react-native';
import {Avatar, Caption, Card} from 'react-native-paper';
import BasicIconMessage from '../../components/BasicIconMessage';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import {ARTWORK} from '../../graphql/artwork';
import useMockedQuery from '../../hooks/useMockedQuery';
import ArtworkImage from './ArtworkImage';
import ArtworkInformation from './ArtworkInformation';

const styles = StyleSheet.create({
  imageCaption: {
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  button: {
    display: 'flex',
    flexGrow: 1,
    margin: 16,
  },
});

export default function ArtworkDetailScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  const id = params && params.id;
  const {data, loading, error} = useMockedQuery(ARTWORK, {
    variables: {id},
  });

  if (error) {
    return <BasicIconMessage error icon="warning" message="Unknown error happend" />;
  }

  if (loading) {
    return <Loader />;
  }

  const {artwork} = data;
  const {image, formattedMetadata, artist} = artwork;
  const {name, birthday, nationality, image: artistImage} = artist;
  const url = image && image.url;
  const artistUrl = artistImage && artistImage.url;

  function onARButtonPress() {
    navigation.navigate('ArtworkAR', {artwork});
  }

  return (
    <ScrollView>
      <ArtworkImage url={url} />
      <Caption style={styles.imageCaption}>{formattedMetadata}</Caption>
      <Card.Title
        title={name}
        subtitle={`${nationality}, b ${birthday}`}
        left={props => <Avatar.Image {...props} source={{uri: artistUrl}} />}
      />
      <ArtworkInformation artwork={artwork} />
      <Button mode="contained" style={styles.button} onPress={onARButtonPress}>
        View in Augmented Reality
      </Button>
    </ScrollView>
  );
}
