import React, {memo} from 'react';
import {TouchableOpacity, ViewProps} from 'react-native';

const _ = require('lodash');

export interface props extends ViewProps {
  disabled?: boolean;
  onPress: (value: any) => void;
}
export const TouchableThrottle = memo(
  ({onPress, disabled = false, ...rest}: props) => {
    const handlePress = () => {
      return _.throttle(onPress, 1000, {
        leading: true,
        trailing: false,
      });
    };
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.5}
        {...rest}
        onPress={handlePress()}>
        {rest.children}
      </TouchableOpacity>
    );
  },
);
export default TouchableThrottle;
