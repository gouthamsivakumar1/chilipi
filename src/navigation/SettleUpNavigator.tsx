import React, {memo} from 'react';
import {SettleUpStackParamList} from './types';
import createStackNavigator from './createStackNavigator';
import SettleUpHomeScreen from '../screen/SettleUp/SettleUpHomeScreen';
import EventSettleListComponent from '../screen/SettleUp/EventSettleUpScreen';
import SettleUpConfirmationScreen from '../screen/SettleUp/SettleUpConfirmationScreen';

const Stack = createStackNavigator<SettleUpStackParamList>();

const SettleUpNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SettleUpHomeScreen">
      <Stack.Screen name="SettleUpHomeScreen" component={SettleUpHomeScreen} />
      <Stack.Screen
        name="EventSettleUpHomeScreen"
        component={EventSettleListComponent}
      />
      <Stack.Screen
        name="SettleUpConfirmationScreen"
        component={SettleUpConfirmationScreen}
      />
    </Stack.Navigator>
  );
});

export default SettleUpNavigator;
