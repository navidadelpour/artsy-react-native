import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, useTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

export default function Loader({style}) {
  const theme = useTheme();
  return (
    <View style={[styles.loader, style]}>
      <ActivityIndicator color={theme.colors.text} />
    </View>
  );
}
