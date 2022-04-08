import React, {memo} from 'react';
import {ProfileStackParamList} from './types';
import createStackNavigator from './createStackNavigator';
import Profile from '../screen/Profile/Profile';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
});

export default ProfileNavigator;
