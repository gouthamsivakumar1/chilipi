import Svg, {Path} from 'react-native-svg';

import React, {memo, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, LogBox} from 'react-native';
import useLayout from '../../hooks/useLayout';
import Text from '../../components/Text';
import {Avatar} from '@ui-kitten/components';
import {AuthButton, AuthInput} from '../../components/authInput';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TouchableThrottle from '../../components/touchableThrottle';
import {
  CommonActions,
  NavigationProp,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../navigation/types';

const Login = memo(() => {
  const {width, height} = useLayout();
  const theme = useTheme();
  const {navigate, dispatch} =
    useNavigation<NavigationProp<AuthStackParamList>>();
  const {isInitialized, isSignedIn, isIntro, signIn, signOut} = useAuth();

  const SignupSchema = Yup.object().shape({
    phonenumber: Yup.number()
      .typeError("doesn't look like a phone number")
      .required('phone number must be a number.'),
    password: Yup.string().required(),
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <Formik
        initialValues={{phonenumber: '', password: ''}}
        validationSchema={SignupSchema}
        onSubmit={async values =>
          AsyncStorage.setItem('email', values.phonenumber)
            .then(res => {
              signIn();
              nextScreen('Main');
            })
            .catch(err => {})
        }>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
            <View style={{flex: 0.4}}>
              <View style={{position: 'absolute', right: -110, top: -20}}>
                <Svg width="300" height="217" viewBox="0 0 250 217" fill="none">
                  <Path
                    d="M196.956 -59.115C208.455 -68.7283 226.052 -62.7438 229.306 -48.113L282.751 192.173C286.138 207.402 271.559 220.473 256.788 215.45L14.4863 133.045C-0.284691 128.022 -3.87179 108.773 8.09828 98.766L196.956 -59.115Z"
                    fill="#4DC55A"
                    opacity="0.6"
                  />
                </Svg>
              </View>
              <View style={{position: 'absolute', right: -110, top: 40}}>
                <Svg width="250" height="217" viewBox="0 0 235 217" fill="none">
                  <Path
                    d="M196.956 -59.115C208.455 -68.7283 226.052 -62.7438 229.306 -48.113L282.751 192.173C286.138 207.402 271.559 220.473 256.788 215.45L14.4863 133.045C-0.284691 128.022 -3.87179 108.773 8.09828 98.766L196.956 -59.115Z"
                    fill="#4DC55A"
                    opacity="0.9"
                  />
                </Svg>
              </View>
              <View style={{position: 'absolute', left: 10}}>
                <View style={styles.traingle} />
              </View>
            </View>
            <View style={{flex: 0.6, marginTop: 50}}>
              <View
                style={[
                  styles.container,
                  {
                    borderTopWidth: height / 2,
                    borderBottomWidth: width * 1.5,
                    borderLeftWidth: height * 2,
                  },
                ]}></View>
              <View
                style={{
                  marginTop: 70,
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                }}>
                <Text category="h1" bold>
                  Login
                </Text>

                <View>
                  <AuthInput
                    value={values.phonenumber}
                    placeholder="Enter phone number ..."
                    onChange={handleChange('phonenumber')}
                  />
                  {errors.phonenumber && touched.phonenumber ? (
                    <Text category="h6" style={{color: 'red', padding: 10}}>
                      {errors.phonenumber}
                    </Text>
                  ) : null}
                  <AuthInput
                    value={values.password}
                    placeholder=" Enter password ..."
                    onChange={handleChange('password')}
                    passwordIcon={true}
                  />
                  {errors.password && touched.password ? (
                    <Text category="h6" style={{color: 'red', padding: 10}}>
                      {errors.password}
                    </Text>
                  ) : null}
                  <View
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 50,
                      alignItems: 'center',
                    }}>
                    <Text category="h6" bold center>
                      Forgot password?
                    </Text>
                    <AuthButton
                      title={'login'}
                      onPress={handleSubmit}></AuthButton>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 50,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableThrottle onPress={() => null}>
                      <Avatar
                        source={require('../../assets/icon/google.png')}
                        style={{
                          marginRight: 20,
                          backgroundColor: theme['backgorund-white-color'],
                        }}
                        shape="square"
                      />
                    </TouchableThrottle>
                    <TouchableThrottle onPress={() => null}>
                      <Avatar
                        source={require('../../assets/icon/fb.png')}
                        style={{
                          marginRight: 20,
                          backgroundColor: theme['backgorund-white-color'],
                        }}
                        size="medium"
                        shape="square"
                      />
                    </TouchableThrottle>
                    <TouchableThrottle onPress={() => null}>
                      <Avatar
                        source={require('../../assets/icon/apple.png')}
                        style={{
                          marginRight: 20,
                          backgroundColor: theme['backgorund-white-color'],
                        }}
                        shape="square"
                      />
                    </TouchableThrottle>
                  </View>
                  <TouchableThrottle onPress={() => navigate('SignUp')}>
                    <Text category="h6">New Here ?{'\n'}Register</Text>
                  </TouchableThrottle>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  traingle: {
    width: 734,
    height: 200,
    top: 0,
    left: -450,
    backgroundColor: '#4DC55A',
    opacity: 0.5,
    borderRadius: 20,
    transform: [{rotate: '-39.35deg'}],
  },
  container: {
    position: 'absolute',
    top: 55,
    borderTopWidth: 250,
    backgroundColor: 'transparent',
    borderBottomColor: '#4DC55A',
    borderRightColor: 'yellow',
    borderLeftColor: 'pink',
    borderStartColor: '#4DC55A',
    borderTopColor: 'transparent',
  },
});

export default Login;
