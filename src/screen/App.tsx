import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as eva from '@eva-design/eva';
import ThemeContext from '../../ThemeContext';
import {default as darkTheme} from '../constants/theme/dark.json';
import {default as customTheme} from '../constants/theme/appTheme.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContainer from '../navigation/Appcontianer';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import mapping from '../constants/theme/mapping.json';

const Hello: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  useEffect(() => {
    AsyncStorage.getItem('theme').then(value => {
      if (value === 'light' || value === 'dark') setTheme(value);
      SplashScreen.hide();
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    AsyncStorage.setItem('theme', nextTheme).then(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <IconRegistry icons={EvaIconsPack} />

        <ApplicationProvider
          {...eva}
          customMapping={mapping}
          theme={
            theme === 'light'
              ? {...eva.light, ...customTheme, ...darkTheme}
              : {...eva.dark, ...customTheme, ...darkTheme}
          }>
          <AppContainer cachedResources={true} />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Hello;
