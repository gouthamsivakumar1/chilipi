import React from 'react';
import {enableScreens} from 'react-native-screens';
import {LogBox, View} from 'react-native';
import {useTheme} from '@ui-kitten/components';
import createStackNavigator from './createStackNavigator';
import {RootStackParamList} from './types';
import AuthNavigator from './AuthNavigator';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import MainNavigator from '../screen/main/MainNavigator';
import EventDetails from '../screen/Events/EventDetails';
import SettleUpNavigator from './SettleUpNavigator';

enableScreens();

interface AppContainerProps {
  cachedResources: boolean;
}

LogBox.ignoreAllLogs();

const Stack = createStackNavigator<RootStackParamList>();

const AppContainer: React.FC<AppContainerProps> = ({cachedResources}) => {
  const themes = useTheme();
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  const routeNameRef = React.useRef<string | undefined>(undefined);
  const {isInitialized, isSignedIn, isIntro} = useAuth();

  const getInitialRouteName = React.useCallback(() => {
    if (!isIntro) {
      return 'Main'; //Intro
    }
    if (isSignedIn) {
      return 'Main';
    }
    return 'Auth'; //Sign In
  }, [isIntro, isSignedIn]);

  return (
    <NavigationContainer ref={navigationRef}>
      <View
        style={{backgroundColor: themes['background-basic-color-1'], flex: 1}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={getInitialRouteName()}>
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen name="EventDetails" component={EventDetails} />
          <Stack.Screen name="SettleUp" component={SettleUpNavigator} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
