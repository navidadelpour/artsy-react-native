import React, {useState} from 'react';
import {Image, View, Modal, StyleSheet} from 'react-native';
import {FlatList, TouchableHighlight} from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';
import BackgroundIconButton from '../../components/BackgroundIconButton';

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

export default function ShowImages({images}) {
  const [imageModalIndex, setImageModalIndex] = useState(-1);
  const modalOpen = imageModalIndex !== -1;

  function closeModal() {
    setImageModalIndex(-1);
  }
  return (
    <>
      <FlatList
        numColumns={3}
        contentContainerStyle={styles.list}
        data={images}
        keyExtractor={item => item.url}
        renderItem={props => <ImageCard setImageModalIndex={setImageModalIndex} {...props} />}
      />
      <Modal visible={modalOpen} transparent>
        <ImageViewer
          enableSwipeDown
          index={imageModalIndex}
          onCancel={closeModal}
          imageUrls={images.map(({url}) => ({url}))}
          renderFooter={() => <BackgroundIconButton icon="close" onPress={closeModal} />}
        />
      </Modal>
    </>
  );
}

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
