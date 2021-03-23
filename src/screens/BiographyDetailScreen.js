import React from 'react';
import {useRoute} from '@react-navigation/native';
import WebView from 'react-native-webview';

export default function BiographyDetailScreen() {
  const {params} = useRoute();
  return <WebView source={{uri: params.link}} />;
}