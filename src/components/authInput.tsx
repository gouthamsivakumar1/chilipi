import {Avatar, Button, Input, Text} from '@ui-kitten/components';
import React from 'react';
import TouchableThrottle from './touchableThrottle';
export type props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};
export const AuthInput: React.FC<props> = ({placeholder, value, onChange}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#D3D3D4"
      multiline={true}
      onChangeText={onChange}
      textStyle={{paddingVertical: 10}}
      style={{
        borderRadius: 10,
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#4DC55A',
      }}
    />
  );
};

export type ButtonProps = {
  title: string;
  onPress: (value: any) => void;
};
export const AuthButton: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableThrottle
      style={{
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderColor: 'white',
        backgroundColor: '#4DC55A',
      }}
      onPress={onPress}>
      <Text category="h6">{title}</Text>
    </TouchableThrottle>
  );
};
