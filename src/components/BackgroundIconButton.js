import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    margin: 8,
  },
  icon: {
    margin: 0,
  },
});

function BackgroundIconButton({
  style,
  backgroundColor = 'rgba(0,0,0,.5)',
  ...rest
}) {
  return (
    <View
      style={{
        backgroundColor,
        ...styles.wrapper,
        ...style,
      }}>
      <IconButton color="white" style={[styles.icon, rest.style]} {...rest} />
    </View>
  );
}

export default memo(BackgroundIconButton);
