import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Image} from 'react-native';
import CustomHeader from '../../components/Header';
import Text from '../../components/Text';
import useLayout from '../../hooks/useLayout';
import {RootStackParamList} from '../../navigation/types';
import EventListItemComponent from './EventListItem';

const EventListComponent: React.FC = () => {
  const theme = useTheme();
  const {width} = useLayout();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const data = [
    {title: 'Trekking Trip', status: 'You owe', amount: 600},
    {title: 'Dinner', status: 'owes you', amount: 500},
    {title: 'Trekking Trip', status: 'You owe', amount: 600},
  ];
  const searchNav = () => navigate('EventSearchScreen');

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme['background-basic-color-1']},
      ]}>
      <CustomHeader searchEnabled={true} onSearchPress={searchNav} />
      <View
        style={[
          styles.contentContainer,
          {
            borderTopLeftRadius: width * 0.1,
            borderTopEndRadius: width * 0.1,
          },
        ]}>
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{color: theme['text-ash-color-1']}}>
              Overall Expense
              <Text style={{color: theme['text-red-color']}}>{`\t`}$100</Text>
            </Text>
          </View>

          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{marginTop: 20}}
            renderItem={({item, index}) => (
              <EventListItemComponent item={item} index={index} />
            )}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    top: -5,
    marginVertical: 5,
  },
  topBarIcon: {width: 30, height: 30},
});

export default EventListComponent;
