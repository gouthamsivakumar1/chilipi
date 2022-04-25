import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TouchableThrottle from '../../components/touchableThrottle';
import * as ImagePicker from 'react-native-image-picker';
import {Modalize} from 'react-native-modalize';
import Text from '../../components/Text';

export type props = {
  onChange: (value: any) => null;
};
const EventImage: React.FC<props> = ({onChange}) => {
  const modalizeRef = React.useRef<Modalize>(null);
  const theme = useTheme();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

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
  return (
    <>
      <Modalize ref={modalizeRef} snapPoint={50}>
        <View style={{flex: 1}}>
          <TouchableThrottle onPress={() => onButtonPress('capture')}>
            <Text style={{color: theme['text-ash-color-1']}}>Take Picture</Text>
          </TouchableThrottle>
          <TouchableThrottle onPress={() => onButtonPress('gallery')}>
            <Text style={{color: theme['text-ash-color-1']}}>
              Choose from Gallery
            </Text>
          </TouchableThrottle>
        </View>
      </Modalize>
      <TouchableThrottle
        onPress={onOpen}
        style={[
          styles.imgContainer,
          {backgroundColor: theme['icon-basic-color']},
        ]}>
        <Icon name="person" fill={theme['background-white-color']} />
        <View></View>
      </TouchableThrottle>
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    padding: 10,
    borderRadius: 50,
  },
});

export default EventImage;
