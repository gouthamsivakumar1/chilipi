import {useNavigation} from '@react-navigation/native';
import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';

const FAQ: React.FC = () => {
  const theme = useTheme();
  const {goBack} = useNavigation();

  const onBack = () => goBack();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme['background-white-color']},
      ]}>
      <View style={styles.topBarContainer}>
        <TouchableThrottle onPress={onBack}>
          <Icon
            name="arrow-ios-back"
            fill={theme['text-input-color-1']}
            style={styles.topBarIcon}
          />
        </TouchableThrottle>
        <Text
          style={[styles.topLabel, {color: theme['text-input-color-1']}]}
          category="h5">
          FAQ
        </Text>
      </View>
      <ScrollView>
        <Text
          style={{
            color: theme['text-ash-color-1'],
            marginTop: 20,
            paddingHorizontal: 20,
            textAlign: 'justify',
          }}>
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{'\n\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  label: {textAlign: 'center', marginTop: 5, color: '#fff'},
  contentContainer: {
    borderRadius: 10,
  },
  topBarIcon: {
    height: 40,
    width: 40,
  },
  topLabel: {marginLeft: 24},
});
export default FAQ;
