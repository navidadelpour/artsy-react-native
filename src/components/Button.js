import React from 'react';
import {Text} from 'react-native';
import {Button as PaperButton, useTheme} from 'react-native-paper';

export default function Button({children, ...props}) {
  const theme = useTheme();

  return (
    <PaperButton {...props} color={theme.colors.onSurface}>
      <Text style={{color: theme.colors.background}}>{children}</Text>
    </PaperButton>
  );
}
