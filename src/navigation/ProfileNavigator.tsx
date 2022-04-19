import React, {memo} from 'react';
import {ProfileStackParamList} from './types';
import createStackNavigator from './createStackNavigator';
import Profile from '../screen/Profile/Profile';
import Settings from '../screen/Profile/Settings';
import FAQ from '../screen/Profile/Faq';
import Terms from '../screen/Profile/Terms';

const Stack = createStackNavigator<ProfileStackParamList>();

const SettleUpNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProfileDetails">
      <Stack.Screen name="ProfileDetails" component={Profile} />
      <Stack.Screen name="Setting" component={Settings} />
      <Stack.Screen name="Faq" component={FAQ} />
      <Stack.Screen name="Terms" component={Terms} />
    </Stack.Navigator>
  );
});

export default SettleUpNavigator;
