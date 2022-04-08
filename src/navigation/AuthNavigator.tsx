import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo, useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import Login from '../screen/Auth/Login';
import Regsiter from '../screen/Auth/Register';
import MainNavigator from '../screen/main/MainNavigator';
import {AuthStackParamList} from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = memo(() => {
  const {isSignedIn} = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={!isSignedIn ? 'Login' : 'SignUp'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Regsiter} />
    </Stack.Navigator>
  );
});

export default AuthNavigator;
