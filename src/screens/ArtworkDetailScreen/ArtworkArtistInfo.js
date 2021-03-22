import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Avatar, Button, Card, Colors} from 'react-native-paper';
import BasicIconMessage from '../../components/BasicIconMessage';
import {ARTIST} from '../../graphql/artists';
import useMockedQuery from '../../hooks/useMockedQuery';

export default function ArtistInfo({id}) {
  const {data, loading, error} = useMockedQuery(ARTIST, {variables: {id}});

  if (error) {
    return <BasicIconMessage error icon="warning" message="There is some problems" />;
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  const {name, birthday, nationality, image} = data.artist;
  const url = image && image.url;

  return (
    <View>
      <Card.Title
        title={name}
        subtitle={`${nationality}, b ${birthday}`}
        left={props => <Avatar.Image {...props} source={{uri: url}} />}
        right={props => (
          <Button {...props} color={Colors.black} disabled>
            Follow
          </Button>
        )}
      />
    </View>
  );
}
