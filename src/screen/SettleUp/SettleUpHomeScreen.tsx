import {useNavigation} from '@react-navigation/native';
import {Icon, Layout, useTheme} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CustomNameIconContainer from '../../components/CustomNameIconContainer';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import useLayout from '../../hooks/useLayout';

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
  const {goBack} = useNavigation();
  const theme = useTheme();
  const {width} = useLayout();
  const [paymentMethod, setPaymentMethodState] = useState<string>();

  const onBack = () => goBack();

  const getStatus = () => {
    return paymentMethod == undefined ? true : false;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBarContainer}>
        <TouchableThrottle style={{flex: 0.5}} onPress={onBack}>
          <Icon
            name="arrow-ios-back"
            fill={theme['text-input-color-1']}
            style={styles.topBarIcon}
          />
        </TouchableThrottle>
        <Text
          style={[styles.topLabel, {color: theme['text-input-color-1']}]}
          category="h5"
          bold>
          Settle Up
        </Text>
      </View>
      <ScrollView style={{paddingHorizontal: 50}}>
        <Text
          category="p1"
          style={[
            styles.oweContainer,
            {
              color: theme['text-basic-color-1'],
            },
          ]}>
          You owe Stuart Little <Text style={{color: 'red'}}>$500.</Text>
        </Text>
        <View style={styles.nameContainer}>
          <CustomNameIconContainer name="S" />

          <Icon
            name="arrow-forward-outline"
            fill={theme['icon-primary-color-1']}
            style={{
              height: 60,
              width: 60,
            }}
          />
          <CustomNameIconContainer name="S" />
        </View>
        <Text
          category="p1"
          style={[
            styles.oweContainer,
            {
              marginTop: 50,
              color: theme['text-basic-color-1'],
            },
          ]}>
          Choose a payment Method
        </Text>
        {Data.map(element => {
          return (
            <TouchableThrottle
              onPress={() => setPaymentMethodState(element.name)}>
              <Layout
                style={[
                  styles.paymentMethodContainer,
                  {
                    backgroundColor: theme['text-white-color'],
                    borderColor: theme['border-basic-color'],
                  },
                ]}>
                <View>
                  <View
                    style={[
                      styles.rbStyle,
                      {borderColor: theme['icon-primary-color-1']},
                    ]}>
                    {paymentMethod === element.name && (
                      <View style={styles.selected} />
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

            color: getStatus()
              ? theme['text-black-color']
              : theme['text-white-color'],
          }}
          bold>
          Settle Up
        </Text>
      </Layout>
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topBarIcon: {
    height: 40,
    width: 40,
    flex: 1,
  },
  topLabel: {flex: 1, marginLeft: 24},
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
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'green',
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
