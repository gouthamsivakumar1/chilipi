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
import ContactDetails from '../screen/Contacts/ContactDetails';
import ContactSearchScreen from '../screen/Contacts/ContactSearchScreen';
import EventSearchScreen from '../screen/Events/EventSearchScreen';
import TransactionSearchScreen from '../screen/Transactions/TransactionSearchScreen';
import ProfileNavigator from './ProfileNavigator';
import AddEvents from '../screen/Events/AddEvent';
import Invitee from '../screen/Events/invitee';

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
          <Stack.Screen name="AddEvents" component={AddEvents} />

          <Stack.Screen name="ContactDetails" component={ContactDetails} />
          <Stack.Screen name="SettleUp" component={SettleUpNavigator} />
          <Stack.Screen name="Profile" component={ProfileNavigator} />

          <Stack.Screen
            name="ContactSearchScreen"
            component={ContactSearchScreen}
          />
          <Stack.Screen
            name="EventSearchScreen"
            component={EventSearchScreen}
          />
          <Stack.Screen
            name="TransactionSearchScreen"
            component={TransactionSearchScreen}
          />

          <Stack.Screen name="invitee" component={Invitee} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
