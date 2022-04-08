import React, {memo} from 'react';
import {SettleUpStackParamList} from './types';
import createStackNavigator from './createStackNavigator';
import SettleUpHomeScreen from '../screen/SettleUp/SettleUpHomeScreen';

const Stack = createStackNavigator<SettleUpStackParamList>();

const SettleUpNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SettleUpHomeScreen">
      <Stack.Screen name="SettleUpHomeScreen" component={SettleUpHomeScreen} />
    </Stack.Navigator>
  );
});

export default SettleUpNavigator;
