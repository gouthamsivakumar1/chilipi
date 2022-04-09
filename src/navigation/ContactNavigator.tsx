import React, {memo} from 'react';

import {ContactStackParamList} from './types';
import createStackNavigator from './createStackNavigator';
import ContactListComponent from '../screen/Contacts/ContactList';
import ContactDetails from '../screen/Contacts/ContactDetails';

const Stack = createStackNavigator<ContactStackParamList>();

const ContactNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ContactList">
      <Stack.Screen name="ContactList" component={ContactListComponent} />
      <Stack.Screen name="ContactDetails" component={ContactDetails} />
    </Stack.Navigator>
  );
});

export default ContactNavigator;
