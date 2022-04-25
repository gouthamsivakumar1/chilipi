import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {Icon, Input, useTheme} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  KeyboardTypeOptions,
} from 'react-native';
import Text from '../../components/Text';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TouchableThrottle from '../../components/touchableThrottle';
import {RootStackParamList} from '../../navigation/types';

const Profile: React.FC = () => {
  const {dispatch, navigate} =
    useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useTheme();
  const [profile, setProfile] = React.useState('');
  const [editEnabled, setEditState] = React.useState(false);
  React.useEffect(() => {
    getDetails();
  }, []);

  const profileSchema = Yup.object({
    email: Yup.string().email('Invalid email').required(),
    fullname: Yup.string().required('Full name is required.'),
    password: Yup.string().required('Password is required.'),
    phoneNumber: Yup.number()
      .typeError("doesn't look like a phone number.")
      .required('Phone number is required'),
    confirmPassword: Yup.string()
      .required('Please retype your password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
  });

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

  const onEdit = () => {
    setEditState(!editEnabled);
  };

  const settingNav = () => {
    navigate('Profile', {screen: 'Setting'});
  };

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
    <Formik
      initialValues={{
        email: 'g@gmail.com',
        password: '1111',
        confirmPassword: '1111',
        phoneNumber: '1111',
        fullname: 'goutham',
      }}
      validationSchema={profileSchema}
      onSubmit={logout}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        handleReset,
      }) => (
        <SafeAreaView
          style={[
            styles.container,
            {backgroundColor: theme['background-white-color']},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 5,
              shadowColor: 'black',
            }}>
            <View />
            <Text
              style={{alignSelf: 'center', color: 'black', marginLeft: 50}}
              category="h2"
              bold>
              Profile
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableThrottle
                onPress={() => {
                  if (editEnabled) handleReset();
                  onEdit();
                }}>
                <Icon
                  name="edit-outline"
                  fill={theme['icon-basic-color']}
                  style={{width: 30, height: 30}}
                />
              </TouchableThrottle>
              <TouchableThrottle onPress={settingNav}>
                <Icon
                  name="settings-2-outline"
                  fill={theme['icon-basic-color']}
                  style={{width: 30, height: 30}}
                />
              </TouchableThrottle>
            </View>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: theme['background-white-color']}}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingBottom: 100,
            }}>
            <View
              style={[
                styles.topBarIcon,
                {backgroundColor: theme['icon-basic-color']},
              ]}>
              <Icon name="person" fill={theme['background-white-color']} />
            </View>
            <View style={{flexDirection: 'column', marginTop: 30}}>
              <Text style={{color: theme['text-ash-color']}} category="p1" bold>
                Full Name
              </Text>
              <ProfileInput
                isEnabled={editEnabled}
                placeholder="Enter full name..."
                text={values.fullname}
                handleChange={handleChange('fullname')}
              />
              {errors.fullname && touched.fullname ? (
                <Text category="p2" style={{color: 'red', padding: 10}}>
                  {errors.fullname}
                </Text>
              ) : null}
            </View>
            <View style={{flexDirection: 'column', marginTop: 30}}>
              <Text style={{color: theme['text-ash-color']}} category="p1" bold>
                Email
              </Text>
              <ProfileInput
                placeholder="Enter email..."
                isEnabled={editEnabled}
                text={values.email}
                handleChange={handleChange('email')}
              />
              {errors.email && touched.email ? (
                <Text category="p2" style={{color: 'red', padding: 10}}>
                  {errors.email}
                </Text>
              ) : null}
            </View>
            <View style={{flexDirection: 'column', marginTop: 30}}>
              <Text style={{color: theme['text-ash-color']}} category="p1" bold>
                Phone number
              </Text>
              <ProfileInput
                type={'numeric'}
                isEnabled={editEnabled}
                placeholder="Enter phone number..."
                text={values.phoneNumber}
                handleChange={handleChange('phoneNumber')}
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <Text category="p2" style={{color: 'red', padding: 10}}>
                  {errors.phoneNumber}
                </Text>
              ) : null}
            </View>
            <View style={{flexDirection: 'column', marginTop: 30}}>
              <Text style={{color: theme['text-ash-color']}} category="p1" bold>
                Password
              </Text>
              <ProfileInput
                placeholder="Enter password..."
                text={values.password}
                isEnabled={editEnabled}
                handleChange={handleChange('password')}
                passwordIcon={true}
              />
              {errors.password && touched.password ? (
                <Text category="p2" style={{color: 'red', padding: 10}}>
                  {errors.password}
                </Text>
              ) : null}
            </View>
            <View style={{flexDirection: 'column', marginTop: 30}}>
              <Text style={{color: theme['text-ash-color']}} category="p1" bold>
                Confirm Password
              </Text>
              <ProfileInput
                placeholder="Enter new password..."
                text={values.confirmPassword}
                isEnabled={editEnabled}
                handleChange={handleChange('confirmPassword')}
                passwordIcon={true}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <Text category="p2" style={{color: 'red', padding: 10}}>
                  {errors.confirmPassword}
                </Text>
              ) : null}
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TouchableThrottle
                style={[
                  styles.logoutContainer,
                  {
                    backgroundColor: theme['background-basic-color-1'],
                  },
                ]}
                onPress={logout}>
                <Text style={{color: 'white'}}>Logout</Text>
              </TouchableThrottle>
              {editEnabled && (
                <View style={{marginHorizontal: 5}}>
                  <TouchableThrottle
                    style={[
                      styles.logoutContainer,
                      {
                        backgroundColor: theme['background-basic-color-1'],
                      },
                    ]}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={{color: 'white'}}>Submit</Text>
                  </TouchableThrottle>
                </View>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export type props = {
  placeholder: string;
  text: string;
  type?: KeyboardTypeOptions;
  handleChange: (value: string) => void;
  isEnabled?: boolean;
  passwordIcon?: boolean;
};
const ProfileInput: React.FC<props> = ({
  placeholder,
  text,
  type = 'default',
  handleChange,
  isEnabled = false,
  passwordIcon = false,
}) => {
  const theme = useTheme();
  const [secureText, setSecureText] = useState(false);

  useEffect(() => {
    if (passwordIcon && !isEnabled) {
      setSecureText(true);
    }
  });
  return (
    <Input
      disabled={!isEnabled}
      keyboardType={type}
      secureTextEntry={secureText}
      textStyle={{color: theme['text-black-color']}}
      accessoryRight={() =>
        passwordIcon && isEnabled ? (
          <TouchableThrottle onPress={() => setSecureText(!secureText)}>
            <Icon
              name={secureText ? 'eye-off-outline' : 'eye-outline'}
              fill={theme['icon-primary-color-2']}
              style={styles.passwordIcon}
            />
          </TouchableThrottle>
        ) : (
          <View />
        )
      }
      style={{
        backgroundColor: theme['background-white-color'],
        marginTop: 5,
        borderColor: theme['background-white-color'],
        borderBottomColor:
          isEnabled == true
            ? theme['text-ash-color-1']
            : theme['background-white-color'],
        borderBottomWidth: 1,
      }}
      value={text}
      placeholder={placeholder}
      onChangeText={handleChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  topBarIcon: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    padding: 5,
    borderRadius: 60,
  },

  logoutContainer: {
    alignSelf: 'center',
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: 50,
  },
  passwordIcon: {width: 25, height: 25},
});

export default Profile;
