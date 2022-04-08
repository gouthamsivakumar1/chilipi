import React, {memo} from 'react';

import {EventStackParamList} from './types';
import createStackNavigator from './createStackNavigator';
import EventListComponent from '../screen/Events/EventList';

const Stack = createStackNavigator<EventStackParamList>();

const EventNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="EventList">
      <Stack.Screen name="EventList" component={EventListComponent} />
    </Stack.Navigator>
  );
});

export default EventNavigator;
