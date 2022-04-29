import {
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {Icon, Input, useTheme, Layout} from '@ui-kitten/components';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ViewProps,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ChipSelect from '../../components/chipSelect';
import CustomNameIconContainer from '../../components/CustomNameIconContainer';
import CustomPrimaryNameIcon from '../../components/customNameIconPrimary';
import HeaderSecondary from '../../components/HeaderSecondary';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import useLayout from '../../hooks/useLayout';

const Invitee: React.FC<ViewProps> = () => {
  const theme = useTheme();
  const [invitee, setInviteeState] = React.useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  console.log('route', route.params);

  const list = [
    'Aaren',
    'Aarika',
    'Abagael',
    'Abagail',
    'Abbe',
    'Abbey',
    'Abbi',
    'Abbie',
    'Abby',
    'Abbye',
    'Abigael',
    'Abigail',
    'Abigale',
    'Abra',
    'Ada',
    'Adah',
    'Adaline',
    'Adan',
    'Adara',
    'Adda',
    'Addi',
    'Addia',
    'Addie',
    'Addy',
    'Adel',
    'Adela',
    'Adelaida',
  ];
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme['background-white-color']},
      ]}>
      <Input
        accessoryLeft={() => (
          <TouchableThrottle
            onPress={() => {
              route?.params?.state?.onSelect(invitee);
              navigation.goBack();
            }}>
            <Icon
              name="arrow-back-outline"
              fill={theme['icon-primary-color-2']}
              style={styles.searchIcon}
            />
          </TouchableThrottle>
        )}
        placeholder="Search Events..."
        textStyle={{
          color: theme['background-ash-color-1'],
          minHeight: 50,
        }}
        style={{
          color: theme['text-ash-color-1'],
          backgroundColor: theme['background-white-color'],
          elevation: 10,
        }}
      />
      <View
        style={{
          marginVertical: 20,
        }}>
        {invitee?.length != 0 && (
          <ChipSelect
            list={invitee}
            itemOnDelete={async list => {
              console.log('Enter', list);
              setInviteeState([]);
              const newArray = list;
              setTimeout(() => {
                setInviteeState(list);
              }, 10);
            }}
            deleteEnabled={true}
            icon="close-circle-outline"
          />
        )}
      </View>

      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}
        keyExtractor={element => element}
        renderItem={({item, index}) => (
          <RenderItem
            item={item}
            index={index}
            invitee={invitee}
            onSelect={(item: never) => {
              if (invitee.includes(item)) {
                let newList = invitee.filter(e => e != item);
                setInviteeState(newList);
              } else {
                setInviteeState([...invitee, item]);
              }
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const RenderItem: React.FC<any> = ({
  item,
  index,
  onSelect,
  invitee = [],
}: any) => {
  const theme = useTheme();
  const {height, width} = useLayout();
  return (
    <TouchableThrottle onPress={() => onSelect(item)}>
      <Layout
        style={{
          borderRadius: 10,
          marginVertical: 10,
          paddingVertical: 5,
          paddingHorizontal: 10,
          flexDirection: 'row',
          backgroundColor: theme['background-white-color'],
          borderColor: theme['border-basic-color'],
          borderWidth: 1,
        }}>
        <View style={{backgroundColor: theme['background-white-color']}}>
          <CustomPrimaryNameIcon name={item} index={index} />
          {invitee?.includes(item) && (
            <Icon
              name={'close-circle-outline'}
              fill={theme['icon-red-color']}
              style={{
                backgroundColor: theme['background-white-color'],
                height: 20,
                width: 20,
                position: 'absolute',
                top: -18,
                right: -5,
              }}
            />
          )}
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Text
            category="h5"
            style={{
              color: theme['text-ash-color-1'],
              textAlign: 'left',
              marginLeft: 10,
            }}
            bold>
            {item}
          </Text>
        </View>
      </Layout>
    </TouchableThrottle>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchIcon: {height: 50, width: 50},
});

export default Invitee;
