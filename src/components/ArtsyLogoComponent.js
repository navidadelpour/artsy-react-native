import React, {memo} from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';

import ArtsyLogoLight from 'assets/logo/artsy-logo-light.svg';
import ArtsyLogoDark from 'assets/logo/artsy-logo-dark.svg';

function ArtsyLogoComponent(props) {
  const theme = useTheme();
  return (
    <View style={{marginRight: 32, marginLeft: -8}} {...props}>
      {theme.dark ? <ArtsyLogoLight /> : <ArtsyLogoDark />}
    </View>
  );
}

export default memo(ArtsyLogoComponent);
