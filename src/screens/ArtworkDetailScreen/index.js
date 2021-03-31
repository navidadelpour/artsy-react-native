import React, {useCallback} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Avatar, Caption, Card} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';

import {ARTWORK} from 'graphql/artwork';
import useMockedQuery from 'hooks/useMockedQuery';
import withMountAfterInteraction from 'utils/withMountAfterInteraction';
import BasicIconMessage from 'components/BasicIconMessage';
import Loader from 'components/Loader';
import Button from 'components/Button';
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

function ArtworkDetailScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  const id = params && params.id;
  const {data, loading, error} = useMockedQuery(ARTWORK, {
    variables: {id},
  });

  if (error) {
    return (
      <BasicIconMessage error icon="warning" message="Unknown error happend" />
    );
  }

  if (loading) {
    return <Loader />;
  }

  const {artwork} = data;

  return <ArtworkDetailResult artwork={artwork} />;
}

function ArtworkDetailResult({artwork}) {
  const {image, formattedMetadata, artist} = artwork;
  const {name, birthday, nationality, image: artistImage} = artist;
  const url = image && image.url;
  const artistUrl = artistImage && artistImage.url;

  function onARButtonPress() {
    navigation.navigate('ArtworkAR', {artwork});
  }

  const cardTitleLeft = useCallback(
    props => <Avatar.Image {...props} source={{uri: artistUrl}} />,
    [artistUrl],
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ArtworkImage url={url} />
      <Caption style={styles.imageCaption}>{formattedMetadata}</Caption>
      <Card.Title
        title={name}
        subtitle={`${nationality}, b ${birthday}`}
        left={cardTitleLeft}
      />
      <ArtworkInformation artwork={artwork} />
      <Button mode="contained" style={styles.button} onPress={onARButtonPress}>
        View in Augmented Reality
      </Button>
    </ScrollView>
  );
}

export default withMountAfterInteraction(ArtworkDetailScreen);
