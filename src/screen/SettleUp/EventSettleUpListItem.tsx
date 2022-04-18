import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Layout, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomNameIconContainer from '../../components/CustomNameIconContainer';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import {
  ContactSettleListProps,
  RootStackParamList,
  SettleUpStackParamList,
} from '../../navigation/types';

interface RenderItemProps {
  item: ContactSettleListProps;
  onPress?(): void;
  index: number;
}
const EventSettleListItemComponent: React.FC<RenderItemProps> = ({
  item,
  onPress,
  index,
}) => {
  const theme = useTheme();
  const {navigate} = useNavigation<NavigationProp<SettleUpStackParamList>>();

  const navgateToDetails = () => {
    navigate('SettleUpHomeScreen');
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
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CustomNameIconContainer
              name={item.name}
              textColor={
                index % 2 == 0
                  ? theme['text-red-color']
                  : theme['background-basic-color-8']
              }
            />
            <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
              <Text category="p1" style={{color: theme['text-ash-color-1']}}>
                {item?.name}
              </Text>
              <Text
                category="p2"
                style={{color: theme['text-ash-color'], marginTop: 6}}>
                {item?.email}
              </Text>
            </View>
          </View>

          <View>
            <Text
              category="p1"
              style={{
                marginBottom: 7,
                color:
                  index % 2 == 0
                    ? theme['text-red-color']
                    : theme['background-basic-color-8'],
              }}>
              {item.status}
            </Text>
            <Text
              category="p1"
              style={{
                color:
                  index % 2 == 0
                    ? theme['text-red-color']
                    : theme['background-basic-color-8'],
              }}>
              ${' '}
              <Text
                category="h3"
                style={{
                  color:
                    index % 2 == 0
                      ? theme['text-red-color']
                      : theme['background-basic-color-8'],
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

export default EventSettleListItemComponent;
