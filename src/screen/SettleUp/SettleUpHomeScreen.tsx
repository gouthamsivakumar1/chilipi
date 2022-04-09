import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Icon, Layout, useTheme} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CustomNameIconContainer from '../../components/CustomNameIconContainer';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import useLayout from '../../hooks/useLayout';
import {SettleUpStackParamList} from '../../navigation/types';

const Data = [
  {
    src: require('../../assets/icon/paytm.png'),
    name: 'paytm',
    status: 'Pay via PayTM',
  },
  {
    src: require('../../assets/icon/gpay.png'),
    name: 'google',
    status: 'Pay via Google Pay',
  },
  {
    src: require('../../assets/icon/paytm.png'),
    name: 'card',
    status: 'Pay Via Debit/Credit Card',
  },
  {
    src: require('../../assets/icon/record.png'),
    name: 'Record',
    status: 'Record  Other Payment Method',
  },
];

const SettleUpHomeScreen: React.FC = () => {
  const {goBack, navigate} =
    useNavigation<NavigationProp<SettleUpStackParamList>>();
  const theme = useTheme();
  const {width} = useLayout();
  const [paymentMethod, setPaymentMethodState] = useState<string>();

  const onBack = () => goBack();

  const onNavigate = () => {
    navigate('SettleUpConfirmationScreen');
  };

  const getStatus = () => {
    return paymentMethod == undefined ? true : false;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBarContainer}>
        <TouchableThrottle onPress={onBack}>
          <Icon
            name="arrow-ios-back"
            fill={theme['text-input-color-1']}
            style={styles.topBarIcon}
          />
        </TouchableThrottle>
        <Text
          style={[styles.topLabel, {color: theme['text-input-color-1']}]}
          category="h5">
          Settle Up
        </Text>
      </View>
      <ScrollView style={{paddingHorizontal: 50}}>
        <Text
          style={[
            styles.oweContainer,
            {
              color: theme['text-basic-color-1'],
            },
          ]}>
          You owe Stuart Little{' '}
          <Text style={{color: theme['text-red-color']}}>$500.</Text>
        </Text>
        <View style={styles.nameContainer}>
          <CustomNameIconContainer
            name="M"
            textColor={theme['background-basic-color-8']}
          />

          <Icon
            name="arrow-forward-outline"
            fill={theme['icon-primary-color-1']}
            style={{
              height: 60,
              width: 60,
              paddingHorizontal: 50,
            }}
          />
          <CustomNameIconContainer
            name="S"
            textColor={theme['text-red-color']}
          />
        </View>
        <Text
          category="p1"
          style={[
            styles.oweContainer,
            {
              marginTop: 24,
              color: theme['text-basic-color-1'],
            },
          ]}>
          Choose a payment Method
        </Text>
        <View style={{margin: 10}} />
        {Data.map(element => {
          return (
            <TouchableThrottle
              onPress={() => setPaymentMethodState(element.name)}>
              <Layout
                style={[
                  styles.paymentMethodContainer,
                  {
                    backgroundColor: theme['text-white-color'],
                    borderColor: theme['icon-primary-color-1'],
                  },
                ]}>
                <View>
                  <View
                    style={[
                      styles.rbStyle,
                      {
                        borderColor:
                          paymentMethod === element.name
                            ? theme['background-basic-color-8']
                            : theme['icon-primary-color-1'],
                      },
                    ]}>
                    {paymentMethod === element.name && (
                      <View
                        style={[
                          styles.selected,
                          {
                            backgroundColor: theme['background-basic-color-8'],
                          },
                        ]}
                      />
                    )}
                  </View>
                </View>
                <View style={{marginHorizontal: 10}}>
                  {element.src != undefined && (
                    <Image
                      source={element.src}
                      resizeMode="contain"
                      style={{height: 20}}
                    />
                  )}
                  <Text
                    category="p1"
                    style={{
                      color: theme['text-basic-color-1'],
                      marginHorizontal: 2,
                    }}>
                    {element.status}
                  </Text>
                </View>
              </Layout>
            </TouchableThrottle>
          );
        })}
      </ScrollView>
      <TouchableThrottle disabled={getStatus()} onPress={onNavigate}>
        <Layout
          style={[
            styles.settleUpBtn,
            {
              backgroundColor: getStatus()
                ? theme['text-white-color']
                : theme['background-basic-color-1'],
              borderColor: theme['border-basic-color'],
              width: width * 0.7,
            },
          ]}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Lato-Regular',

              color: getStatus()
                ? theme['text-ash-color']
                : theme['text-white-color'],
            }}>
            Settle Up
          </Text>
        </Layout>
      </TouchableThrottle>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBarContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  topBarIcon: {
    height: 40,
    width: 40,
  },
  topLabel: {marginLeft: 24},
  oweContainer: {
    marginTop: 20,
    textAlign: 'center',
  },

  paymentMethodContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rbStyle: {
    marginTop: 8,
    height: 20,
    width: 20,
    borderRadius: 15,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  settleUpBtn: {
    alignSelf: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  nameContainer: {flexDirection: 'row', alignSelf: 'center', marginTop: 30},
});

export default SettleUpHomeScreen;
