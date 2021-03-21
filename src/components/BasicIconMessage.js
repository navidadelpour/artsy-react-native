import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Caption, Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  wrapper: {justifyContent: 'center', alignItems: 'center', flexGrow: 1},
  caption: {fontStyle: 'italic'},
});

export default function BasicIconMessage({icon, message}) {
  return (
    <View style={styles.wrapper}>
      <Icon name={icon} size={50} color={Colors.grey400} />
      <Caption style={styles.caption}>{message}</Caption>
    </View>
  );
}
