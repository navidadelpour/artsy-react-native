import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  wrapper: {justifyContent: 'center', alignItems: 'center', flexGrow: 1},
});

function BasicIconMessage({style, error = false, icon, message}) {
  const color = error ? Colors.red400 : Colors.grey400;
  return (
    <View style={[styles.wrapper, style]}>
      <Icon name={icon} size={50} color={color} />
      <Text style={{color}}>{message}</Text>
    </View>
  );
}

export default memo(BasicIconMessage);
