import {useNavigation} from '@react-navigation/native';
import {Icon, Input, useTheme} from '@ui-kitten/components';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import CustomHeader from '../../components/Header';
import TransactionListItemComponent from './TransactionListItem';

const TransactionSearchScreen: React.FC = () => {
  const {goBack} = useNavigation();
  const theme = useTheme();

  const onBack = () => goBack();
  const data = [
    {name: 'You Added Fries', status: 'Stuart Little owes you'},
    {
      name: 'Stuart Little added to the group Movie Night',
    },
    {
      name: 'You added Stuart to the group Trip To Long Islands',
    },
  ];

  const HeaderComponent = () => {
    return (
      <Input
        accessoryLeft={() => (
          <Icon
            name="search"
            fill={theme['icon-primary-color-2']}
            style={style.searchIcon}
          />
        )}
        textStyle={{
          color: theme['background-ash-color-1'],
        }}
        placeholder="Search Transactions..."
        style={{
          color: 'black',
          backgroundColor: theme['background-white-color'],
          marginVertical: 5,
          borderColor: theme['border-primary-color'],
          borderRadius: 7,
        }}
      />
    );
  };

  return (
    <SafeAreaView
      style={[
        style.container,
        {backgroundColor: theme['background-white-color']},
      ]}>
      <CustomHeader
        backButtonEnabled={true}
        onBackPress={onBack}
        labelStyle={{marginRight: 25}}
      />
      <FlatList
        data={data}
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={style.flatListContainerStyle}
        renderItem={({item, index}) => (
          <TransactionListItemComponent item={item} index={index} />
        )}></FlatList>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainerStyle: {
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  searchIcon: {height: 25, width: 25},
});

export default TransactionSearchScreen;
