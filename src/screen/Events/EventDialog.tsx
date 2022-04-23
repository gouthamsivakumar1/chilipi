import {useTheme} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import useLayout from '../../hooks/useLayout';
import BottomSheet from 'reanimated-bottom-sheet';

export type props = {
  visible: boolean;
};

const EventDialog: React.FC<props> = ({visible}) => {
  const {height, width} = useLayout();
  const [alignment] = React.useState(new Animated.Value(0));
  const sheetRef = React.useRef(null);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      height: height / 2.4,
      width: width / 1.05,
      paddingBottom: 20,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,

      marginHorizontal: 10,
    },
    grabber: {
      width: 60,
      borderTopWidth: 5,
      borderTopColor: 'yellow',
    },
  });

  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const hideActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 2.4 + 50, 0],
  });

  const actionSheetStyle = {
    bottom: actionSheetInterpolate,
  };

  const gestureHandler = (element: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log('value');
    if (element.nativeEvent.contentOffset.y > 0) {
      bringUpActionSheet();
    } else {
      hideActionSheet();
    }
  };
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'black',
        padding: 16,
        height: 450,
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[450, 300, 0]}
      borderRadius={10}
      renderContent={renderContent}
    />
  );
  //   return visible ? (
  //     <View style={styles.container}>
  //       <Text style={{backgroundColor: 'black'}}>HI</Text>
  //     </View>
  //   ) : null;
};

export default EventDialog;
