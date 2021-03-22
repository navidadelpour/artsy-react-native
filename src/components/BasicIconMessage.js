import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Text, Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  wrapper: {justifyContent: 'center', alignItems: 'center', flexGrow: 1},
});

export default function BasicIconMessage({error = false, icon, message}) {
  const color = error ? Colors.red400 : Colors.grey400;
  return (
    <View style={styles.wrapper}>
      <Icon name={icon} size={50} color={color} />
      <Text style={{color}}>{message}</Text>
    </View>
  );
}
