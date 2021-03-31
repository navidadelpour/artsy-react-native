import React, {memo, useCallback, useState} from 'react';
import {Image, View, Modal, StyleSheet} from 'react-native';
import {FlatList, TouchableHighlight} from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';

import BackgroundIconButton from 'components/BackgroundIconButton';
import BasicIconMessage from 'components/BasicIconMessage';

const styles = StyleSheet.create({
  list: {
    paddingTop: 4,
    paddingLeft: 4,
  },
  card: {
    aspectRatio: 1 / 1,
    flex: 1,
    marginBottom: 4,
    marginRight: 4,
  },
  touchable: {
    width: '100%',
    height: '100%',
  },
  image: {
    aspectRatio: 1 / 1,
    flex: 1,
  },
});

function ImageCard({item, index, setImageModalIndex, ...props}) {
  function onImagePress() {
    setImageModalIndex(index);
  }

  return (
    <View style={[styles.card]} {...props}>
      <TouchableHighlight style={styles.touchable} onPress={onImagePress}>
        <Image style={styles.image} source={{uri: item.url}} />
      </TouchableHighlight>
    </View>
  );
}

const ImageCardMemoized = memo(ImageCard);

function keyExtractor(item) {
  return item.url;
}

function ImagesList({images, renderItem}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={3}
      initialNumToRender={9}
      maxToRenderPerBatch={3}
      contentContainerStyle={styles.list}
      data={images}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

const ImagesListMemoized = memo(ImagesList);

export default function ShowImages({images}) {
  const [imageModalIndex, setImageModalIndex] = useState(-1);
  const modalOpen = imageModalIndex !== -1;

  const closeModal = useCallback(() => {
    setImageModalIndex(-1);
  }, [setImageModalIndex]);

  const renderItem = useCallback(
    props => (
      <ImageCardMemoized setImageModalIndex={setImageModalIndex} {...props} />
    ),
    [setImageModalIndex],
  );

  const renderModalFooter = useCallback(
    () => <BackgroundIconButton icon="close" onPress={closeModal} />,
    [closeModal],
  );

  if (!images || images.length === 0) {
    return (
      <BasicIconMessage message="No images available" icon="error-outline" />
    );
  }

  return (
    <>
      <ImagesListMemoized images={images} renderItem={renderItem} />
      <Modal visible={modalOpen} transparent>
        <ImageViewer
          enableSwipeDown
          index={imageModalIndex}
          onCancel={closeModal}
          imageUrls={images.map(({url}) => ({url}))}
          renderFooter={renderModalFooter}
        />
      </Modal>
    </>
  );
}
