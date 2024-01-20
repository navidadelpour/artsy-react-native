import React, {useEffect, useRef, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  ViroARPlaneSelector,
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
} from '@viro-community/react-viro';
import {Dimensions, PixelRatio} from 'react-native';

function ArtworkARScene({image}) {
  const sceneRef = useRef();
  const [transform, setTransform] = useState({
    position: [0, 0, 1],
    rotation: [-90, 0, 0],
    scale: [1, 1, 1],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      sceneRef.current.getCameraOrientationAsync().then(() => {
        sceneRef.current
          .performARHitTestWithPoint(
            (Dimensions.get('window').width * PixelRatio.get()) / 2,
            (Dimensions.get('window').height * PixelRatio.get()) / 2,
          )
          .then(results => {
            for (let i = 0; i < results.length; i++) {
              const result = results[i];
              if (result.type == 'ExistingPlaneUsingExtent') {
                // We hit a plane, do something!
                setTransform(prevTransform => ({
                  ...prevTransform,
                  position: result.transform.position,
                }));
              }
            }
          });
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ViroARScene ref={sceneRef} anchorDetectionTypes="PlanesHorizontal">
      <ViroARPlaneSelector
        minHeight={0.1}
        minWidth={0.1}
        alignment="Horizontal"
        ref={sceneRef}>
        <ViroImage
          height={0.5}
          width={0.5}
          source={{uri: image}}
          {...transform}
        />
      </ViroARPlaneSelector>
    </ViroARScene>
  );
}

export default function ArtworkARScreen() {
  const {params} = useRoute();
  const artwork = params?.artwork;
  const image = artwork?.image?.url;

  return (
    <ViroARSceneNavigator
      style={{flex: 1}}
      initialScene={{
        scene: ArtworkARScene,
        passProps: {image},
      }}
    />
  );
}
