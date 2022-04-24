import React from 'react';
import {useTheme} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

export type props = {
  name?: string;
  index: number;
};
const CustomPrimaryNameIcon: React.FC<props> = ({name,index}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        width: 50,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 25,
        borderColor:
          index % 2 == 0
            ? theme['text-red-color']
            : theme['background-basic-color-8'],
      }}>
      <Text
        category="h3"
        style={{
          textAlign: 'center',
          color:
            index % 2 == 0
              ? theme['text-red-color']
              : theme['background-basic-color-8'],
        }}>
        {name?.split('')[0]}
      </Text>
    </View>
  );
};

export default CustomPrimaryNameIcon;

const styles = StyleSheet.create({
  nameContainer: {flexDirection: 'row', alignSelf: 'center', marginTop: 30},
  nameIconLabelContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
  },
});
