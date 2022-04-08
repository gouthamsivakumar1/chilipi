import {Card, Layout, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import {ContactProps} from '../../navigation/types';

interface RenderItemProps {
  item?: ContactProps;
  onPress?(): void;
  index: number;
}
const ContactListItemComponent: React.FC<RenderItemProps> = ({
  item,
  onPress,
  index,
}) => {
  const theme = useTheme();

  return (
    <Layout
      style={[
        styles.container,
        {
          borderColor: theme['border-basic-color'],
        },
      ]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <View
            style={{
              width: 50,
              backgroundColor: 'white',
              borderWidth: 2,
              padding: 10,
              borderRadius: 25,
              borderColor: index % 2 == 0 ? 'red' : 'green',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: index % 2 == 0 ? 'red' : 'green',
              }}>
              {item?.title?.split('')[0]}
            </Text>
          </View>
          <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
            <Text style={{color: theme['text-black-color']}}>
              {item?.title}
            </Text>
            <Text category="p1" style={{color: theme['text-black-color']}}>
              {item?.status}
            </Text>
          </View>
        </View>

        <View>
          <Text category="p1" style={{color: theme['text-black-color']}}>
            ${' '}
            <Text category="h4" style={{color: theme['text-black-color']}}>
              {item?.amount}
            </Text>
          </Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    minHeight: 70,
  },
});

export default ContactListItemComponent;
