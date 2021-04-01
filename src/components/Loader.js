import React, {memo} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {useTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

function Loader({style}) {
  const theme = useTheme();
  return (
    <ActivityIndicator
      style={[styles.loader, style]}
      color={theme.colors.text}
      size="large"
    />
  );
}

export default memo(Loader);
