import React from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';

import {
  useNavigation,
  NavigationProp,
  CommonActions,
} from '@react-navigation/native';
import {Icon, Layout, useTheme} from '@ui-kitten/components';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import useLayout from '../../hooks/useLayout';
import {RootStackParamList} from '../../navigation/types';

const SettleUpConfirmationScreen: React.FC = () => {
  const theme = useTheme();
  const {goBack, navigate, dispatch} =
    useNavigation<NavigationProp<RootStackParamList>>();
  const {width} = useLayout();

  const onBack = () => goBack();
  const nextScreen = React.useCallback(() => {
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [
        {
          name: 'Main',
        },
      ],
    });
    dispatch(resetAction);
  }, []);
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
          Settle Up
        </Text>
      </View>
      <View style={styles.tickContainer}>
        <Image
          style={styles.tickIcon}
          resizeMode="contain"
          source={require('../../assets/icon/tick.png')}
        />

        <Text
          category="h4"
          style={{color: theme['text-input-color-2'], marginTop: 25}}
          bold>
          Hurray!!
        </Text>

        <Text
          category="p1"
          style={{
            color: theme['text-input-color-2'],
            marginTop: 40,
            marginHorizontal: 50,
            textAlign: 'center',
          }}>
          Your account with{' '}
          <Text category="p1" style={{color: theme['text-input-color-2']}} bold>
            Subodh Kolhe
          </Text>{' '}
          {'\n'} has been settled up
        </Text>
        <TouchableThrottle onPress={nextScreen}>
          <Layout
            style={[
              styles.settleUpBtn,
              {
                backgroundColor: theme['background-basic-color-1'],
                borderColor: theme['border-basic-color'],
                width: width * 0.7,
              },
            ]}>
            <Text
              style={[
                styles.doneLabel,
                {
                  color: theme['text-white-color'],
                },
              ]}>
              Done
            </Text>
          </Layout>
        </TouchableThrottle>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  topBarContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  label: {textAlign: 'center', marginTop: 5, color: '#fff'},
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    top: -5,
    marginVertical: 5,
  },
  topBarIcon: {
    height: 40,
    width: 40,
  },
  topLabel: {marginLeft: 24},
  tickContainer: {
    marginTop: 64,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickIcon: {height: 100, width: 100, alignSelf: 'center'},
  settleUpBtn: {
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  doneLabel: {
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
});

export default SettleUpConfirmationScreen;
