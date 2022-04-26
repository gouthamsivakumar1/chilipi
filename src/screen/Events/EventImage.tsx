import {Icon, useTheme} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import TouchableThrottle from '../../components/touchableThrottle';
import * as ImagePicker from 'react-native-image-picker';
import {Modalize} from 'react-native-modalize';
import Text from '../../components/Text';

export type props = {
  onChange: (value: any) => any;
  onClosing: () => void;
};
const EventImage: React.FC<props> = ({onChange, onClosing}) => {
  const modalizeRef = React.useRef<Modalize>(null);
  const theme = useTheme();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  useEffect(() => {
    onOpen();
  }, []);

  const onButtonPress = React.useCallback(type => {
    if (type === 'capture') {
      ImagePicker.launchCamera(
        {
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
        },
        (value: any) => {
          onClose();
          if (value?.assets != undefined) {
            onChange(value?.assets[0].uri);
          }
        },
      );
    } else {
      ImagePicker.launchImageLibrary(
        {
          maxHeight: 200,
          maxWidth: 200,
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: false,
        },
        (value: any) => {
          onClose();
          if (value?.assets != undefined) {
            onChange(value?.assets[0].uri);
          }
        },
      );
    }
  }, []);

  const imgOptions = [
    {
      name: 'Take Picture',
      onPress: () => onButtonPress('capture'),
      icon: 'camera',
    },
    {
      name: 'Gallery',
      onPress: () => onButtonPress('gallery'),
      icon: 'archive-outline',
    },
  ];

  return (
    <>
      <Modalize ref={modalizeRef} snapPoint={160} onClosed={onClosing}>
        <View style={{flex: 1, paddingHorizontal: 20, marginTop: 10}}>
          <Text
            category="h5"
            style={{color: theme['text-ash-color-1'], textAlign: 'center'}}
            bold>
            Select Option
          </Text>
          <View style={{marginTop: 15}}>
            {imgOptions.map((element, index) => (
              <TouchableThrottle
                key={index}
                onPress={() => {
                  onClose();
                  element.onPress();
                }}
                style={{
                  marginVertical: 5,
                  minHeight: 25,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Icon
                  name={element.icon}
                  fill={theme['text-ash-color-1']}
                  style={{height: 25, width: 25}}
                />
                <Text
                  style={{
                    color: theme['text-ash-color-1'],
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}>
                  {element.name}
                </Text>
              </TouchableThrottle>
            ))}
          </View>
        </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({});

export default EventImage;
