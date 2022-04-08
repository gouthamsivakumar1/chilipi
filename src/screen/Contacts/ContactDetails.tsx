import {useNavigation} from '@react-navigation/native';
import {useTheme, Icon} from '@ui-kitten/components';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import useLayout from '../../hooks/useLayout';
import ContactDetailsListItemComponent from './ContactDetailsListItem';

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
  {name: 'Stuart Little', status: 'you won', amount: 600},
  {name: 'Stuart Little', status: 'you won', amount: 600},
  {name: 'Stuart Little', status: 'you won', amount: 600},
];

const ContactDetails: React.FC = () => {
  const theme = useTheme();
  const {width} = useLayout();
  const {goBack} = useNavigation();

  const onBack = () => {
    goBack();
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
        <View style={styles.topViewContainer}>
          <TouchableThrottle onPress={onBack}>
            <Icon name="arrow-ios-back" fill="#fff" style={styles.topBarIcon} />
          </TouchableThrottle>
          <Text style={styles.label} category="h4" bold>
            Chilipi
          </Text>

          <Icon
            name="more-vertical-outline"
            fill="#fff"
            style={styles.topBarIcon}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.labelInitialContainer}>
            <Text
              category="h1"
              style={{
                color: 'red',
                textAlignVertical: 'center',
                textAlign: 'center',
              }}
              bold>
              S
            </Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={{alignSelf: 'center'}}>
            <Text
              category="p1"
              style={{paddingHorizontal: 10, marginVertical: 5}}>
              you won <Text bold>Staurt Little</Text>
            </Text>
          </View>
          <View style={styles.dollarContainer}>
            <Text category="p1" style={{paddingHorizontal: 5}}>
              $
            </Text>
            <Text category="h4" bold>
              500
            </Text>
          </View>
        </View>
        <View style={styles.settleUpBtnContainer}>
          <TouchableThrottle onPress={() => null}>
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
              Balances
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
            <ContactDetailsListItemComponent item={item} index={index} />
          )}></FlatList>
      </View>
      <View
        style={[
          styles.floatingButton,
          {backgroundColor: theme['background-basic-color-1']},
        ]}>
        <Icon
          name="plus"
          fill="#fff"
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
  topBarIcon: {width: 30, height: 30},
  topBarsIcon: {
    width: 40,
    height: 40,
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },

  topViewContainer: {
    marginVertical: 20,
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
    paddingHorizontal: 10,
    marginTop: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
