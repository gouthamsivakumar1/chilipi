import {Icon, useTheme} from '@ui-kitten/components';
import React, {memo} from 'react';
import {Image, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import Text from '../components/Text';
import TouchableThrottle from './touchableThrottle';

export interface props extends ViewStyle {
  searchEnabled?: boolean;
  backButtonEnabled?: boolean;
  onBackPress?: (value: any) => void;
  onSearchPress?: (value: any) => void;
  labelStyle?: ViewStyle;
}
const CustomHeader = memo(
  ({
    searchEnabled = false,
    backButtonEnabled = false,
    onBackPress = () => null,
    onSearchPress = () => null,
    labelStyle,
  }: props) => {
    const theme = useTheme();
    return (
      <View
        style={[
          styles.topBarContainer,
          {backgroundColor: theme['background-basic-color-1']},
        ]}>
        {backButtonEnabled && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableThrottle onPress={onBackPress}>
              <Icon
                name="arrow-ios-back"
                fill="#fff"
                style={styles.topBarsIcon}
              />
            </TouchableThrottle>
          </View>
        )}

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.label, labelStyle]} category="h3" bold>
            Chilipi
          </Text>
        </View>

        {searchEnabled && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableThrottle onPress={onSearchPress}>
              <Image
                source={require('../assets/icon/search_icon.png')}
                style={{height: 25, width: 25, marginRight: 20}}
              />
            </TouchableThrottle>
          </View>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  topBarContainer: {
    minHeight: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  label: {textAlign: 'center', color: '#fff'},
  topBarsIcon: {
    width: 40,
    height: 40,
  },
});

export default CustomHeader;
