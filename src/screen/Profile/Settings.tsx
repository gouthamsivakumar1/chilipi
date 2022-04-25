import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {
  Card,
  Icon,
  IndexPath,
  Select,
  SelectItem,
  Toggle,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';
import {Alert, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import {RootStackParamList} from '../../navigation/types';

const Settings: React.FC = () => {
  const theme = useTheme();
  const [allowNotifcation, setNotification] = React.useState(true);
  const [currency, setCurrency] = React.useState(new IndexPath(0));
  const {goBack, navigate, dispatch} =
    useNavigation<NavigationProp<RootStackParamList>>();

  const currency_list = [
    'INR',
    'CAD',
    'EUR',
    'USD',
    'CHF',
    'EUR',
    'KYD',
    'GBP',
    'JOD',
    'OMR',
    'BHD',
  ];

  const onBack = () => goBack();
  const onFaq = () => navigate('Profile', {screen: 'Faq'});
  const onTerms = () => navigate('Profile', {screen: 'Terms'});

  const onDeleteAccount = () => {
    Alert.alert('', 'Do you want to delete this account ?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => onLogin()},
    ]);
  };
  const onLogin = () => {
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [
        {
          name: 'Auth',
        },
      ],
    });
    dispatch(resetAction);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme['background-white-color']},
      ]}>
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
          Settings
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, padding: 20}}>
        <Card
          style={[
            styles.contentContainer,
            {
              backgroundColor: theme['background-white-color'],
              borderColor: theme['border-basic-color'],
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: theme['text-ash-color-1']}}>
              Allow Notification
            </Text>
            <Toggle
              checked={allowNotifcation}
              onChange={setNotification}></Toggle>
          </View>
        </Card>
        <Card
          style={[
            styles.contentContainer,
            {
              backgroundColor: theme['background-white-color'],
              borderColor: theme['border-basic-color'],
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: theme['text-ash-color-1']}}>
              Slelect Currency
            </Text>
            <Select
              selectedIndex={currency}
              placeholder="Default"
              value={currency_list[currency.row]}
              onSelect={index => setCurrency(index)}
              style={{minWidth: 120, backgroundColor: 'white'}}>
              {currency_list.map((item, index) => (
                <SelectItem title={item} key={index} />
              ))}
            </Select>
          </View>
        </Card>
        <Card
          onPress={onFaq}
          style={[
            styles.contentContainer,

            {
              backgroundColor: theme['background-white-color'],
              borderColor: theme['border-basic-color'],
            },
          ]}>
          <View style={styles.cardContentContainer}>
            <Text
              style={{
                color: theme['text-ash-color-1'],
              }}>
              FAQ
            </Text>
            <Icon
              name="arrow-ios-forward"
              fill={theme['icon-basic-color']}
              style={styles.topBarIcon}
            />
          </View>
        </Card>

        <Card
          onPress={onTerms}
          style={[
            styles.contentContainer,

            {
              backgroundColor: theme['background-white-color'],
              borderColor: theme['border-basic-color'],
            },
          ]}>
          <View style={styles.cardContentContainer}>
            <Text
              style={{
                color: theme['text-ash-color-1'],
              }}>{`Terms & Conditions`}</Text>
            <Icon
              name="arrow-ios-forward"
              fill={theme['icon-basic-color']}
              style={styles.topBarIcon}
            />
          </View>
        </Card>

        <Card
          onPress={onDeleteAccount}
          style={[
            styles.contentContainer,

            {
              backgroundColor: theme['background-white-color'],
              borderColor: theme['border-basic-color'],
            },
          ]}>
          <View style={styles.cardContentContainer}>
            <Text
              style={{
                color: theme['text-ash-color-1'],
              }}>
              Delete Account
            </Text>
            <Icon
              name="arrow-ios-forward"
              fill={theme['icon-basic-color']}
              style={styles.topBarIcon}
            />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  label: {textAlign: 'center', marginTop: 5, color: '#fff'},
  contentContainer: {
    marginVertical: 10,
    borderRadius: 10,
  },
  topBarIcon: {
    height: 40,
    width: 40,
  },
  topLabel: {marginLeft: 24},
});

export default Settings;
