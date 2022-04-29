import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {FlatList, View} from 'react-native';
import Text from './Text';
import TouchableThrottle from './touchableThrottle';

export type props = {
  list?: string[];
  itemOnDelete: (value: any) => void;
  deleteEnabled: boolean;
  icon: any;
};
const ChipSelect: React.FC<props> = ({list = [], itemOnDelete}) => {
  console.log('list on', list);
  const theme = useTheme();

  const RenderItem: React.FC = ({item}: any) => {
    console.log('item', item);
    const theme = useTheme();
    return (
      <View
        style={{
          flexDirection: 'row',
          borderColor: '#d2dbe8',
          backgroundColor: theme['icon-basic-color'],
          borderWidth: 1,
          marginRight: 5,
          paddingVertical: 2,
          paddingRight: 10,
          borderRadius: 4,
          marginVertical: 2,
          alignItems: 'center',
        }}>
        <TouchableThrottle
          onPress={() => {
            list.splice(list.indexOf(item), 1);

            itemOnDelete(list);
          }}>
          <Icon
            name={'close-circle-outline'}
            fill={theme['icon-white-color']}
            style={{
              height: 25,
              width: 25,
            }}
          />
        </TouchableThrottle>

        <Text
          style={{
            maxWidth: 100,
            fontSize: 15,
            marginRight: 3,
            color: theme['text-ash-color'],
          }}
          numberOfLines={1}>
          {item}
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      style={{
        borderColor: theme['border-basic-color'],
        backgroundColor: theme['background-white-color'],
        borderWidth: 1,
        maxHeight: 150,
        padding: 10,
        borderRadius: 5,
      }}
      keyExtractor={e => e}
      columnWrapperStyle={{
        flexWrap: 'wrap',
      }}
      numColumns={7}
      horizontal={false}
      data={list}
      renderItem={({item, index}) => <RenderItem item={item} />}
    />
  );
};
export default ChipSelect;
