import React from 'react';
import {useTheme} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

export type props = {
  name: string;
};
const CustomNameIconContainer: React.FC<props> = ({name}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.nameIconLabelContainer,
        {
          backgroundColor: theme['icon-primary-color-1'],
        },
      ]}>
      <Text category="h5" style={{textAlign: 'center', color: 'green'}} bold>
        {name?.split('')[0]}
      </Text>
    </View>
  );
};

export default CustomNameIconContainer;

const styles = StyleSheet.create({
  nameContainer: {flexDirection: 'row', alignSelf: 'center', marginTop: 30},
  nameIconLabelContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
  },
});
