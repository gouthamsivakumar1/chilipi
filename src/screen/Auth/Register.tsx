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
import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {AuthStackParamList, RootStackParamList} from '../../navigation/types';

const Regsiter: React.FC = () => {
  const {width, height} = useLayout();
  const [modalVisible, setModalState] = React.useState(false);
  const {navigate, dispatch} =
    useNavigation<NavigationProp<AuthStackParamList>>();
  const theme = useTheme();

  const SignupSchema = Yup.object().shape({
    fullname: Yup.string().required(),
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
        initialValues={{fullname: ''}}
        validationSchema={SignupSchema}
        onSubmit={values => {
          nextScreen('Main');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}
            contentContainerStyle={{flexGrow: 1}}>
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
                  marginTop: 200,
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
                    placeholder="Enter user name..."
                    onChange={handleChange('fullname')}
                  />
                  {errors.fullname && touched.fullname ? (
                    <Text category="h6" style={{color: 'red', padding: 10}}>
                      {errors.fullname}
                    </Text>
                  ) : null}
                  <View
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      marginTop: 50,
                      alignSelf: 'center',
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
                  }}></View>
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
