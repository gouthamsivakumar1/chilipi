import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import CustomHeader from '../../components/Header';
import Text from '../../components/Text';
import useLayout from '../../hooks/useLayout';
import {RootStackParamList} from '../../navigation/types';
import TransactionListItemComponent from './TransactionListItem';

const TransactionListComponent: React.FC = () => {
  const theme = useTheme();
  const {width} = useLayout();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const data = [
    {name: 'You Added Fries', status: 'Stuart Little owes you'},
    {
      name: 'Stuart Little added to the group Movie Night',
    },
    {
      name: 'You added Stuart to the group Trip To Long Islands',
    },
  ];
  const searchNav = () => navigate('TransactionSearchScreen');

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
          <Text style={{color: theme['text-ash-color-1']}}>
            Overall ,you owe
            <Text style={{color: theme['text-red-color']}}>{`\t`} $100</Text>
          </Text>

          <FlatList
            data={data}
            contentContainerStyle={{marginTop: 20}}
            renderItem={({item, index}) => (
              <TransactionListItemComponent item={item} index={index} />
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
});

export default TransactionListComponent;
