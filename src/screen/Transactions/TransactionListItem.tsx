import {Card, Layout, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import {EventProps} from '../../navigation/types';

interface RenderItemProps {
  item?: EventProps;
  onPress?(): void;
  index: number;
}
const EventListItemComponent: React.FC<RenderItemProps> = ({
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
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
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
            {item?.name?.split('')[0]}
          </Text>
        </View>
        <View style={{flexDirection: 'column', paddingHorizontal: 10, flex: 1}}>
          <Text
            category="h6"
            numberOfLines={3}
            style={{color: theme['text-black-color']}}>
            {item?.name}
          </Text>
          <Text category="p1" style={{color: theme['text-basic-color-1']}}>
            {item?.status}
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
    paddingHorizontal: 10,
  },
});

export default EventListItemComponent;
