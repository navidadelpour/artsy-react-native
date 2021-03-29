import React, {memo, useCallback} from 'react';

import {IconButton, useTheme} from 'react-native-paper';
import {isDarkTheme} from '../apollo/cache';

function ToggleThemeButton(props) {
  const theme = useTheme();
  const icon = theme.dark ? 'weather-sunny' : 'weather-night';

  const onPress = useCallback(() => {
    isDarkTheme(!isDarkTheme());
  }, []);

  return <IconButton icon={icon} onPress={onPress} {...props} />;
}

export default memo(ToggleThemeButton);
