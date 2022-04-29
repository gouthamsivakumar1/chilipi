import {useNavigation} from '@react-navigation/native';
import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';
import TouchableThrottle from './touchableThrottle';

export type props = {
  title: string;
};
const HeaderSecondary: React.FC<props> = ({title}) => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  return (
    <View style={styles.topBarContainer}>
      <TouchableThrottle onPress={goBack}>
        <Icon
          name="arrow-ios-back"
          fill={theme['text-input-color-1']}
          style={styles.topBarIcon}
        />
      </TouchableThrottle>
      <Text
        style={[styles.topLabel, {color: theme['text-input-color-1']}]}
        category="h5">
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  topLabel: {marginLeft: 24},
  topBarIcon: {
    height: 40,
    width: 40,
  },
});

export default HeaderSecondary;
