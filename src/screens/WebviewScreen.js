import React from 'react';
import {useRoute} from '@react-navigation/native';
import WebView from 'react-native-webview';
import Loader from '../components/Loader';

export default function WebviewScreen() {
  const {params} = useRoute();
  return (
    <WebView
      startInLoadingState
      renderLoading={() => (
        <Loader style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} />
      )}
      source={{uri: params.link}}
    />
  );
}
