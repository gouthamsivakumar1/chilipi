import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Layout, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import {EventProps, RootStackParamList} from '../../navigation/types';

interface RenderItemProps {
  item?: EventProps;
  onPress?(): void;
  index: number;
}
const ContactListItemComponent: React.FC<RenderItemProps> = ({
  item,
  onPress,
  index,
}) => {
  const theme = useTheme();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const navgateToDetails = () => {
    navigate('ContactDetails');
  };

  return (
    <TouchableThrottle onPress={navgateToDetails}>
      <Layout
        style={[
          styles.container,
          {
            borderColor: theme['border-basic-color'],
          },
        ]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            <View
              style={{
                width: 50,
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 25,
                borderColor:
                  index % 2 == 0
                    ? theme['text-red-color']
                    : theme['background-basic-color-8'],
              }}>
              <Text
                category="h3"
                style={{
                  textAlign: 'center',
                  color:
                    index % 2 == 0
                      ? theme['text-red-color']
                      : theme['background-basic-color-8'],
                }}>
                {item?.name?.split('')[0]}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 10,
                marginTop: 5,
              }}>
              <Text category="p1" style={{color: theme['text-ash-color-1']}}>
                {item?.name}
              </Text>
              <Text
                category="p2"
                style={{
                  marginTop: 10,
                  color: theme['text-ash-color-1'],
                }}>
                {item?.status}
              </Text>
            </View>
          </View>

          <View style={{alignSelf: 'flex-end'}}>
            <Text category="p2" style={{color: theme['text-ash-color-1']}}>
              ${' '}
              <Text
                category="h4"
                style={{
                  color: theme['text-ash-color-1'],
                }}>
                {item?.amount}
              </Text>
            </Text>
          </View>
        </View>
      </Layout>
    </TouchableThrottle>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    minHeight: 70,
  },
});

export default ContactListItemComponent;
