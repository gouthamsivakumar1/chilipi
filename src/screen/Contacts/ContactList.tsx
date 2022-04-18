import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useTheme} from '@ui-kitten/components';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Image} from 'react-native';
import CustomHeader from '../../components/Header';
import Text from '../../components/Text';
import useLayout from '../../hooks/useLayout';
import {RootStackParamList} from '../../navigation/types';
import ContactListItemComponent from './ContactListItem';

const ContactListComponent: React.FC = () => {
  const theme = useTheme();
  const {width} = useLayout();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const data = [
    {name: 'Stuart Little', status: 'you won', amount: 600},
    {name: 'Stuart Little', status: 'you won', amount: 600},
    {name: 'Stuart Little', status: 'you won', amount: 600},
  ];

  const searchNav = () => navigate('ContactSearchScreen');

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
              Overall ,you owe
              <Text style={{color: theme['text-red-color']}}>{`\t`} $100</Text>
            </Text>
          </View>

          <FlatList
            data={data}
            contentContainerStyle={{marginTop: 20}}
            renderItem={({item, index}) => (
              <ContactListItemComponent item={item} index={index} />
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

export default ContactListComponent;
