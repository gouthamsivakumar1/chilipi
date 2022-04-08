import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Card, Layout, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import {EventDetailsProps, EventStackParamList} from '../../navigation/types';

interface RenderItemProps {
  item?: EventDetailsProps;
  onPress?(): void;
  index: number;
}
const EventDetailsListItemComponent: React.FC<RenderItemProps> = ({
  item,
  onPress,
  index,
}) => {
  const {navigate} = useNavigation<NavigationProp<EventStackParamList>>();
  const theme = useTheme();

  const navgateToDetails = () => {
    //  navigate('EventDetails');
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
          <View style={{flexWrap: 'wrap', flexDirection: 'column'}}>
            <View
              style={{
                width: 50,
                backgroundColor: 'white',
                borderWidth: 2,
                padding: 10,
                borderRadius: 25,
                borderColor: index % 2 == 0 ? 'red' : 'green',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: index % 2 == 0 ? 'red' : 'green',
                }}>
                {item?.name?.split('')[0]}
              </Text>
            </View>
            <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
              <Text style={{color: theme['text-black-color'], marginTop: 10}}>
                {item?.name}
              </Text>
              <Text
                category="p1"
                style={{color: theme['text-black-color-1'], marginTop: 10}}>
                {item?.status}
              </Text>
            </View>
          </View>

          <View
            style={{justifyContent: 'space-between', alignSelf: 'flex-end'}}>
            <Text
              category="p2"
              style={{color: theme['text-black-color-1'], flex: 1}}>
              {item?.date}
            </Text>
            <View style={{flex: 1, alignSelf: 'flex-end'}}>
              <Text
                style={{
                  color: theme['text-black-color-1'],
                  marginVertical: 10,
                }}>
                you owe
              </Text>
              <Text category="p1" style={{color: theme['text-black-color']}}>
                ${' '}
                <Text
                  category="h4"
                  style={{
                    color: theme['text-black-color'],
                  }}>
                  {item?.amount}
                </Text>
              </Text>
            </View>
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

export default EventDetailsListItemComponent;
