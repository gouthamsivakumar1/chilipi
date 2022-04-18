import {Card, Layout, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomNameIconContainer from '../../components/CustomNameIconContainer';
import Text from '../../components/Text';
import {EventProps} from '../../navigation/types';

interface RenderItemProps {
  item?: EventProps;
  onPress?(): void;
  index: number;
}
const TransactionListItemComponent: React.FC<RenderItemProps> = ({
  item,
  onPress,
  index,
}) => {
  const theme = useTheme();

  return (
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
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <CustomNameIconContainer
          textColor={
            index % 2 == 0
              ? theme['text-red-color']
              : theme['background-basic-color-8']
          }
          name={item?.name}
        />
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: 10,
            marginTop: 5,
            flex: 1,
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
    </Layout>
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
    paddingHorizontal: 10,
  },
});

export default TransactionListItemComponent;
