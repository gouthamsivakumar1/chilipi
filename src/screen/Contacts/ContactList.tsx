import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import useLayout from '../../hooks/useLayout';
import ContactListItemComponent from './ContactListItem';

const ContactListComponent: React.FC = () => {
  const theme = useTheme();
  const {width} = useLayout();

  const data = [
    {title: 'Trekking Trip', status: 'You owe', amount: 600},
    {title: 'Dinner', status: 'owes you', amount: 500},
    {title: 'Trekking Trip', status: 'You owe', amount: 600},
  ];

  const ListFooterComponent = () => {
    return (
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
          borderColor: theme['background-basic-color-2'],
          borderWidth: 1,
          padding: 5,
          borderRadius: 8,
        }}>
        <Icon
          name="person-add"
          fill={theme['flatlist-footer-icon']}
          style={styles.topBarIcon}
        />
        <Text
          category="p1"
          style={{
            textAlignVertical: 'center',
            color: theme['flatlist-footer-icon'],
          }}
          bold>
          Start a new event
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme['background-basic-color-1']},
      ]}>
      <View style={[styles.topBarContainer]}>
        <View></View>
        <Text style={styles.label} category="h4" bold>
          Chilipi
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="search" fill="#fff" style={styles.topBarIcon} />
          <Icon
            name="more-vertical-outline"
            fill="#fff"
            style={styles.topBarIcon}
          />
        </View>
      </View>

      <View
        style={[
          styles.contentContainer,
          {
            borderTopLeftRadius: width * 0.1,
            borderTopEndRadius: width * 0.1,
          },
        ]}>
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#616161'}}>
              Overall Expense
              <Text style={{color: 'red'}} bold>
                {`\t`} $500
              </Text>
            </Text>
            <Icon
              name="options-2-outline"
              fill={theme['icon-basic-color']}
              style={{height: 25, width: 25}}></Icon>
          </View>

          <FlatList
            data={data}
            contentContainerStyle={{marginTop: 20}}
            ListFooterComponent={ListFooterComponent}
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
  topBarContainer: {
    minHeight: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  label: {textAlign: 'center', marginTop: 5, color: '#fff'},
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    top: -5,
    marginVertical: 5,
  },
  topBarIcon: {width: 30, height: 30},
});

export default ContactListComponent;
