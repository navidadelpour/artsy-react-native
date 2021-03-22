import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  loader: {justifyContent: 'center', alignItems: 'center', flexGrow: 1},
});

export default function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={Colors.black} />
    </View>
  );
}
