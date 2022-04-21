import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  LogBox,
  Alert,
} from 'react-native';
import useLayout from '../../hooks/useLayout';
import Text from '../../components/Text';
import {
  Avatar,
  Button,
  Card,
  Input,
  Layout,
  Modal,
  useTheme,
} from '@ui-kitten/components';
import {AuthButton, AuthInput} from '../../components/authInput';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TouchableThrottle from '../../components/touchableThrottle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList, RootStackParamList} from '../../navigation/types';

const Regsiter: React.FC = () => {
  const {width, height} = useLayout();
  const [modalVisible, setModalState] = React.useState(false);
  const {navigate} = useNavigation<NavigationProp<AuthStackParamList>>();
  const theme = useTheme();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    fullname: Yup.string().required(),
    password: Yup.string().required(),
    phonenumber: Yup.number()
      .typeError("doesn't look like a phone number")
      .required('phone number must be a number.'),
  });

  const onLogin = () => navigate('Login');

  const EmailAlert = () => {
    const [error, setError] = React.useState(false);
    const [otp, setOtpState] = React.useState('');  

    return (
      <Layout level="1">
        <Modal visible={modalVisible}>
          <Card
            disabled={true}
            style={{backgroundColor: theme['background-white-color']}}>
            <View style={{flex: 1}}>
              <Text
                style={{textAlign: 'center', color: theme['text-ash-color-1']}}>
                {` Verification code has been send in your email.Please enter`}
              </Text>
            </View>

            <Input
              placeholder="Enter Otp"
              keyboardType="numeric"
              textStyle={{
                color: theme['text-ash-color-1'],
              }}
              style={{
                marginVertical: 20,

                backgroundColor: theme['backgorund-white-color'],
                color: theme['text-ash-color-1'],
              }}
              onChangeText={text => {
                setError(false);
                setOtpState(text);
              }}
            />
            {error && (
              <Text
                category="p2"
                style={{color: theme['text-red-color'], marginBottom: 5}}>
                Please enter valid otp
              </Text>
            )}
            <Button
              onPress={() => {
                if (otp?.length != 0) {
                  setModalState(false);
                  onLogin();
                } else {
                  setError(true);
                }
              }}>
              Submit
            </Button>
          </Card>
        </Modal>
      </Layout>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {modalVisible && <EmailAlert />}
      <Formik
        initialValues={{fullname: '', email: '', password: '', phonenumber: ''}}
        validationSchema={SignupSchema}
        onSubmit={values => {
          setModalState(true);
        }}>
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
            <View style={{flex: 0.4, marginTop: 50}}>
              <View
                style={[
                  styles.container,
                  {
                    borderTopWidth: height / 2 + 50,
                    borderBottomWidth: width * 1.5,
                    borderLeftWidth: height * 2,
                  },
                ]}></View>
              <View
                style={{
                  marginTop: 150,
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                  paddingBottom: 50,
                }}>
                <Text category="h1" bold>
                  Register
                </Text>

                <View>
                  <AuthInput
                    value={values.fullname}
                    placeholder="Enter full name..."
                    onChange={handleChange('fullname')}
                  />
                  {errors.fullname && touched.fullname ? (
                    <Text category="h6" style={{color: 'red', padding: 10}}>
                      {errors.fullname}
                    </Text>
                  ) : null}
                  <AuthInput
                    value={values.email}
                    placeholder="Enter email..."
                    onChange={handleChange('email')}
                  />
                  {errors.email && touched.email ? (
                    <Text category="h6" style={{color: 'red', padding: 2}}>
                      {errors.email}
                    </Text>
                  ) : null}
                  <AuthInput
                    value={values.phonenumber}
                    type="numeric"
                    placeholder="Enter phone number..."
                    onChange={handleChange('phonenumber')}
                  />
                  {errors.phonenumber && touched.phonenumber ? (
                    <Text category="h6" style={{color: 'red', padding: 10}}>
                      {errors.phonenumber}
                    </Text>
                  ) : null}
                  <AuthInput
                    value={values.password}
                    placeholder="Enter password..."
                    onChange={handleChange('password')}
                    passwordIcon={true}
                  />
                  {errors.password && touched.password ? (
                    <Text category="h6" style={{color: 'red', padding: 2}}>
                      {errors.password}
                    </Text>
                  ) : null}
                  <View
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: 50,
                      alignItems: 'center',
                    }}>
                    <AuthButton
                      title={'Register'}
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
                  <TouchableThrottle onPress={handleSubmit}>
                    <Text category="h6">Already a {'\n'} Member? Login</Text>
                  </TouchableThrottle>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  traingle: {
    width: 734,
    height: 200,
    top: 0,
    left: -450,
    backgroundColor: '#4DC55A',
    opacity: 0.9,
    borderRadius: 20,
    transform: [{rotate: '-39.35deg'}],
  },
  container: {
    position: 'absolute',
    top: 100,
    backgroundColor: 'transparent',
    borderBottomColor: '#4DC55A',
    borderRightColor: 'yellow',
    borderLeftColor: 'pink',
    borderStartColor: '#4DC55A',
    borderTopColor: 'transparent',
  },
});

export default Regsiter;
