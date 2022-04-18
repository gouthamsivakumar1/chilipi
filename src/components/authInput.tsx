import {Icon, Input, Text, useTheme} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import TouchableThrottle from './touchableThrottle';
export type props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  passwordIcon?: boolean;
};
export const AuthInput: React.FC<props> = ({
  placeholder,
  value,
  onChange,
  passwordIcon = false,
}) => {
  const [secureText, setSecureText] = React.useState(true);
  const theme = useTheme();
  React.useEffect(() => {
    if (passwordIcon) {
      setSecureText(true);
    }
  }, []);
  return (
    <View>
      <Input
        keyboardType={'default'}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureText}
        placeholderTextColor="#D3D3D4"
        multiline={secureText ? false : true}
        onChangeText={onChange}
        accessoryRight={() =>
          passwordIcon ? (
            <TouchableThrottle onPress={() => setSecureText(!secureText)}>
              <Icon
                name={secureText ? 'eye-off-outline' : 'eye-outline'}
                fill={theme['icon-white-color']}
                style={{height: 25, width: 25}}
              />
            </TouchableThrottle>
          ) : (
            <View />
          )
        }
        textStyle={{paddingVertical: 10}}
        style={{
          borderRadius: 10,
          marginTop: 50,
          borderWidth: 1,
          borderColor: 'white',
          backgroundColor: '#4DC55A',
        }}
      />
    </View>
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
