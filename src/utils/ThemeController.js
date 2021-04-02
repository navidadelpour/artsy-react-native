import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {isDarkTheme} from 'apollo/cache';
import Loader from 'components/Loader';
import useIsDarkMode from 'hooks/useDarkModeQuery';
import getTheme from './theme';

export default function ThemeController({children}) {
  const isDarkMode = useIsDarkMode();
  const theme = getTheme(isDarkMode);

  useEffect(() => {
    AsyncStorage.getItem('isDarkTheme').then(value => {
      const isDarkThemeStorage = value === 'true';
      isDarkTheme(isDarkThemeStorage);
    });
  }, []);

  useEffect(() => {
    if (isDarkMode !== undefined) {
      AsyncStorage.setItem('isDarkTheme', `${isDarkMode}`);
    }
  }, [isDarkMode]);

  if (isDarkMode === undefined) {
    return <Loader />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </PaperProvider>
    </View>
  );
}
