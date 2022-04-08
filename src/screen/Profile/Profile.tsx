import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';

const Profile: React.FC = () => {
  const {dispatch} = useNavigation();
  const theme = useTheme();
  const [profile, setProfile] = React.useState('');
  React.useEffect(() => {
    getDetails();
  }, []);

  const nextScreen = React.useCallback((screenName: string) => {
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [
        {
          name: screenName,
        },
      ],
    });
    dispatch(resetAction);
  }, []);

  const logout = () => {
    AsyncStorage.clear()
      .then(res => {
        nextScreen('Auth');
      })
      .catch(err => {});
  };

  const getDetails = async () => {
    const profile = await AsyncStorage.getItem('email');
    if (profile != null) {
      setProfile(profile);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: 'center', color: 'black'}} category="h2" bold>
        Profile
      </Text>
      <View style={styles.topBarIcon}>
        <Icon name="person" fill={theme['icon-basic-color']} />
      </View>

      <Text style={{textAlign: 'center', color: 'black'}} category="h6">
        username :{profile}
      </Text>

      <TouchableThrottle
        style={{
          alignSelf: 'center',
          padding: 10,
          marginTop: 30,
          borderRadius: 10,
          paddingHorizontal: 50,
          backgroundColor: theme['background-basic-color-1'],
        }}
        onPress={() => logout()}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableThrottle>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  topBarIcon: {width: 70, height: 70, alignSelf: 'center'},
});

export default Profile;
