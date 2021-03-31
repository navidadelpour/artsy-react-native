import React, {useCallback} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {Paragraph, Title, useTheme} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {SHOW} from 'graphql/show';
import withMountAfterInteraction from 'utils/withMountAfterInteraction';
import useMockedQuery from 'hooks/useMockedQuery';
import BasicIconMessage from 'components/BasicIconMessage';
import Loader from 'components/Loader';
import ShowImages from './ShowImages';
import ShowInformation from './ShowInformation';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  pressReleaseWrapper: {
    padding: 16,
  },
});

const ShowTab = createMaterialTopTabNavigator();
const initialLayout = {width: Dimensions.get('window').width};

function ShowDetailScreen() {
  const {params} = useRoute();

  const id = params && params.id;
  const {data, loading, error} = useMockedQuery(SHOW, {
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

  const {show} = data;
  return <ShowDetailScreenResult show={show} />;
}

function ShowDetailScreenResult({show}) {
  const theme = useTheme();
  const {press_release, cover_image: image, images} = show;

  const _ShowPressRelease = useCallback(
    props => <ShowPressRelease press_release={press_release} {...props} />,
    [press_release],
  );

  const _ShowInformation = useCallback(
    props => <ShowInformation show={show} {...props} />,
    [show],
  );
  const _ShowImages = useCallback(
    props => <ShowImages images={images} {...props} />,
    [images],
  );

  const LazyPlaceholder = useCallback(props => <Loader {...props} />, []);

  return (
    <>
      <Image style={styles.image} source={{uri: image?.url}} />
      <ShowTab.Navigator
        lazy
        lazyPlaceholder={LazyPlaceholder}
        initialRouteName="About"
        initialLayout={initialLayout}
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: theme.colors.text,
          },
        }}>
        <ShowTab.Screen name="Press Release" component={_ShowPressRelease} />
        <ShowTab.Screen name="About" component={_ShowInformation} />
        <ShowTab.Screen name="Pictures" component={_ShowImages} />
      </ShowTab.Navigator>
    </>
  );
}

function ShowPressRelease({press_release}) {
  if (!press_release) {
    return (
      <BasicIconMessage
        message="No press release available"
        icon="error-outline"
      />
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.pressReleaseWrapper}>
        <Title>Press Release</Title>
        <Paragraph>{press_release}</Paragraph>
      </View>
    </ScrollView>
  );
}

export default withMountAfterInteraction(ShowDetailScreen);
