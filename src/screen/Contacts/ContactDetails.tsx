import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useTheme} from '@ui-kitten/components';
import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import CustomHeader from '../../components/Header';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import useLayout from '../../hooks/useLayout';
import {RootStackParamList} from '../../navigation/types';
import EventDetailsListItemComponent from './ContactDetailsListItem';

const data = [
  {
    name: 'Car',
    status: 'Added by Stephen',
    date: 'November 3,2018',
    amount: 600,
  },
  {
    name: 'Hotel',
    status: 'Added by Stephen',
    date: 'November 3,2018',
    amount: 500,
  },
  {
    name: 'Food',
    status: 'Added by Stephen',
    date: 'November 3,2018',
    amount: 500,
  },
  {
    name: 'Food',
    status: 'Added by Stephen',
    date: 'November 3,2018',
    amount: 500,
  },
  {
    name: 'Food',
    status: 'Added by Stephen',
    date: 'November 3,2018',
    amount: 500,
  },
  {
    name: 'Food',
    status: 'Added by Stephen',
    date: 'November 3,2018',
    amount: 500,
  },
];

const ContactDetails: React.FC = () => {
  const theme = useTheme();
  const {width} = useLayout();
  const {navigate, goBack} =
    useNavigation<NavigationProp<RootStackParamList>>();

  const onBack = () => {
    goBack();
  };
  const settleUpNav = () => {
    navigate('SettleUp', {
      screen: 'SettleUpHomeScreen',
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: theme['background-basic-color-1'],
          flex: 0.7,
          borderBottomRightRadius: width * 0.1,
          borderBottomLeftRadius: width * 0.1,
        }}>
        <CustomHeader
          labelStyle={{marginRight: 25}}
          backButtonEnabled={true}
          onBackPress={onBack}
        />

        <View style={{flex: 1}}>
          <View style={styles.labelInitialContainer}>
            <Text
              category="h1"
              style={{
                marginTop: 3,
                color: theme['text-red-color'],
                textAlignVertical: 'center',
                textAlign: 'center',
              }}>
              S
            </Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={{alignSelf: 'center'}}>
            <Text category="p1" style={{color: theme['text-white-color']}}>
              Staurt Little
            </Text>
            <Text
              category="p2"
              style={{color: theme['text-white-color'], marginVertical: 10}}>
              You owe
            </Text>
          </View>
          <View style={styles.dollarContainer}>
            <Text
              category="p1"
              style={{paddingHorizontal: 5, color: theme['text-white-color']}}>
              $
            </Text>
            <Text category="h4" style={{color: theme['text-white-color']}}>
              500
            </Text>
          </View>
        </View>
        <View style={styles.settleUpBtnContainer}>
          <TouchableThrottle onPress={settleUpNav}>
            <Text
              category="p1"
              style={[
                styles.topBarSettleContainer,
                {
                  backgroundColor: theme['background-basic-color-3'],
                },
              ]}>
              Settle Up
            </Text>
          </TouchableThrottle>
          <TouchableThrottle onPress={() => null}>
            <Text
              category="p1"
              style={[
                styles.topBarSettleContainer,
                {
                  paddingHorizontal: 20,
                  backgroundColor: theme['background-basic-color-3'],
                },
              ]}>
              Send Reminder
            </Text>
          </TouchableThrottle>
        </View>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          data={data}
          contentContainerStyle={{
            marginTop: 20,
            marginHorizontal: 20,
            paddingBottom: width * 0.3,
          }}
          renderItem={({item, index}) => (
            <EventDetailsListItemComponent item={item} index={index} />
          )}></FlatList>
      </View>
      <View
        style={[
          styles.floatingButton,
          {backgroundColor: theme['background-basic-color-1']},
        ]}>
        <Image
          source={require('../../assets/icon/plus.png')}
          style={[
            styles.topBarsIcon,
            {backgroundColor: theme['background-basic-color-1']},
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  label: {textAlign: 'center', marginTop: 5, color: '#fff'},
  topBarIcon: {width: 40, height: 40},
  topBarsIcon: {
    width: 40,
    height: 40,
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },

  topViewContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelInitialContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    borderColor: 'red',
    alignSelf: 'center',
  },
  topBarSettleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  dollarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settleUpBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    marginTop: 5,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
export default ContactDetails;
