import React from 'react';
import {Image, Modal, StyleSheet, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import useBoolean from 'hooks/useBoolean';
import BackgroundIconButton from 'components/BackgroundIconButton';

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1 / 1,
  },
  fullscreenButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default function ArtworkImage({url}) {
  const [fullscreen, setFullscreenTrue, setFullscreenFalse] = useBoolean(false);
  return (
    <>
      <View>
        <Image style={styles.image} source={{uri: url}} />
        <BackgroundIconButton
          style={styles.fullscreenButton}
          icon="fullscreen"
          onPress={setFullscreenTrue}
        />
      </View>
      <Modal visible={fullscreen} transparent>
        <ImageViewer
          enableSwipeDown
          onCancel={setFullscreenFalse}
          imageUrls={[{url}]}
          renderFooter={() => (
            <BackgroundIconButton icon="close" onPress={setFullscreenFalse} />
          )}
        />
      </Modal>
    </>
  );
}
