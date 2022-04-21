import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, useTheme} from '@ui-kitten/components';
import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import ContactNavigator from '../../navigation/ContactNavigator';
import EventNavigator from '../../navigation/EventNavigator';
import ProfileNavigator from '../../navigation/ProfileNavigator';
import {MainBottomStackList} from '../../navigation/types';
import Login from '../Auth/Login';
import TransactionListComponent from '../Transactions/TransactionList';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({children, onPress}: any) => {
  return (
    <TouchableThrottle
      style={{
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
        ...style.shadow,
        borderRadius: 45,
        backgroundColor: 'white',
      }}
      onPress={() => null}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#4DC55A',
        }}>
        {children}
      </View>
    </TouchableThrottle>
  );
};

const Tabs = () => {
  const theme = useTheme();
  const [addBtn, setAddBtnVisible] = useState(true);

  const isTabBarVisible = route => {
    // console.log('Enter', JSON.stringify(route));
    // if()
    // return !['HideScreen1', 'HideScreen2'].includes(routeName);
  };

  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarVisible: false,
        tabBarStyle: {
          position: 'absolute',

          backgroundColor: 'white',
          height: 70,
          bottom: 0,
          ...style.shadow,
        },
      })}>
      <Tab.Screen
        name="Events"
        component={EventNavigator}
        options={({route, navigation}) => ({
          tabBarVisible: false,
          tabBarIcon: ({focused}) => (
            <View style={style.tabIconContainer}>
              <Icon
                name="people"
                fill={
                  focused
                    ? theme['background-basic-color-2']
                    : theme['icon-primary-color-2']
                }
                style={style.tabIcon}
              />
              <Text
                category="p2"
                style={{
                  color: focused
                    ? theme['background-basic-color-2']
                    : theme['icon-primary-color-2'],
                }}>
                Events
              </Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Contacts"
        component={ContactNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={style.tabIconContainer}>
              <Icon
                name="person"
                fill={
                  focused
                    ? theme['background-basic-color-2']
                    : theme['icon-primary-color-2']
                }
                style={style.tabIcon}
              />
              <Text
                category="p2"
                style={{
                  color: focused
                    ? theme['background-basic-color-2']
                    : '#5F6368',
                }}>
                Contacts
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={Login}
        options={{
          tabBarButton: props => <CustomTabButton {...props} />,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icon/plus.png')}
              style={style.addTabIcon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Transactions"
        component={TransactionListComponent}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={style.tabIconContainer}>
              <Icon
                name="flip-2-outline"
                fill={
                  focused
                    ? theme['background-basic-color-2']
                    : theme['icon-primary-color-2']
                }
                style={style.tabIcon}
              />
              <Text
                numberOfLines={1}
                category="p2"
                style={{
                  color: focused
                    ? theme['background-basic-color-2']
                    : theme['icon-primary-color-2'],
                }}>
                Transactions
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={style.tabIconContainer}>
              <Icon
                name="person"
                fill={
                  focused
                    ? theme['background-basic-color-2']
                    : theme['icon-primary-color-2']
                }
                style={style.tabIcon}
              />
              <Text
                category="p2"
                style={{
                  color: focused
                    ? theme['background-basic-color-2']
                    : theme['icon-primary-color-2'],
                }}>
                Accounts
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator: React.FC = () => {
  return <Tabs />;
};

export const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabIconContainer: {alignItems: 'center', justifyContent: 'center', top: 2},
  tabIcon: {
    width: 25,
    height: 25,
  },
  addTabIcon: {
    width: 30,
    height: 30,
  },
});

export default MainNavigator;
