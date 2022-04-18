import {useNavigation} from '@react-navigation/native';
import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import useLayout from '../../hooks/useLayout';
import EventSettleListItemComponent from './EventSettleUpListItem';

const EventSettleListComponent: React.FC = () => {
  const theme = useTheme();
  const {width} = useLayout();
  const {goBack} = useNavigation();

  const data = [
    {
      name: 'Stuart Little',
      email: 'subodhkolhe@gmail.com',
      status: 'you won',
      amount: 600,
    },
    {
      name: 'Stuart Little',
      email: 'subodhkolhe@gmail.com',
      status: 'you won',
      amount: 600,
    },
    {
      name: 'Stuart Little',
      email: 'subodhkolhe@gmail.com',
      status: 'owes you',
      amount: 600,
    },
  ];

  const onBack = () => goBack();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme['text-white-color']}]}>
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
      <Text
        style={{
          marginTop: 40,
          textAlign: 'center',
          color: theme['text-ash-color-1'],
        }}>
        who do you want to settle up with?
      </Text>
      <FlatList
        data={data}
        contentContainerStyle={{margin: 30}}
        renderItem={({item, index}) => (
          <EventSettleListItemComponent item={item} index={index} />
        )}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  oweContainer: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default EventSettleListComponent;
