import {useNavigation} from '@react-navigation/native';
import {Datepicker, Icon, Input, useTheme} from '@ui-kitten/components';
import {Formik} from 'formik';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Text from '../../components/Text';
import TouchableThrottle from '../../components/touchableThrottle';
import moment from 'moment';
import * as Yup from 'yup';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {AuthButton} from '../../components/authInput';
import EventImage from './EventImage';
const Header: React.FC = () => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  return (
    <View style={styles.topBarContainer}>
      <TouchableThrottle onPress={goBack}>
        <Icon
          name="arrow-ios-back"
          fill={theme['text-input-color-1']}
          style={styles.topBarIcon}
        />
      </TouchableThrottle>
      <Text
        style={[styles.topLabel, {color: theme['text-input-color-1']}]}
        category="h5">
        Add Events
      </Text>
    </View>
  );
};

const addExpenseSchema = Yup.object().shape({
  name: Yup.string().required('Event name is required.'),
  img: Yup.string().required(),
  time: Yup.string().required(),
  date: Yup.string().required(),
});

const EventInput: React.FC = () => {
  const theme = useTheme();

  const [date, setDate] = React.useState(new Date());
  const [time, setTimeState] = React.useState(new Date());
  const [img, setImgState] = React.useState<any>('');
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn('A date has been picked: ', date);
    setTimeState(date);
    hideDatePicker();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        img: '',
      }}
      onSubmit={values => console.log('value', values)}
      validationSchema={addExpenseSchema}>
      {({handleChange, handleSubmit, values, errors, touched}) => (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View>
            <EventImage onChange={() => null} />
            <Text>{JSON.stringify(img)}</Text>
            <Text
              category="p1"
              style={{color: theme['text-ash-color-1'], marginVertical: 5}}
              bold>
              Event Name
            </Text>
            <Input
              textStyle={{color: theme['text-ash-color-1']}}
              onChangeText={handleChange('name')}
              style={[
                styles.inputContainer,
                {
                  backgroundColor: theme['background-white-color'],
                  borderColor: theme['border-basic-color'],
                },
              ]}
              placeholder={'Enter Events ...'}
            />
            {errors.name && touched.name ? (
              <Text category="p1" style={styles.errorMsg}>
                {errors.name}
              </Text>
            ) : null}
            <Text
              category="p1"
              style={{color: theme['text-ash-color-1'], marginVertical: 5}}
              bold>
              Event Date
            </Text>
            <Datepicker
              status={'primary'}
              controlStyle={{backgroundColor: 'white'}}
              style={styles.inputContainer}
              date={date}
              onSelect={nextDate => setDate(nextDate)}
            />
            <Text
              category="p1"
              style={{color: theme['text-ash-color-1'], marginVertical: 5}}
              bold>
              Event Time
            </Text>
            <TouchableThrottle onPress={showDatePicker}>
              <Text
                style={[
                  styles.inputDateContainer,
                  {
                    color: theme['text-ash-color-1'],
                    backgroundColor: theme['background-white-color'],
                    borderColor: theme['border-basic-color'],
                  },
                ]}>
                {moment(time).format('h:mm a')}
              </Text>
            </TouchableThrottle>
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <View style={styles.handleSubmitBtn}>
              <AuthButton onPress={handleSubmit} title="ADD EVENTS" />
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const AddEvents: React.FC = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme['background-white-color']},
      ]}>
      <Header />
      <View style={{marginVertical: 20, flex: 1}}>
        <EventInput />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  topBarContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  topLabel: {marginLeft: 24},
  topBarIcon: {
    height: 40,
    width: 40,
  },
  imgContainer: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    padding: 10,
    borderRadius: 50,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  errorMsg: {color: 'red', marginHorizontal: 5, marginBottom: 14},

  inputDateContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 10,
  },
  handleSubmitBtn: {flexWrap: 'wrap', alignSelf: 'center', marginVertical: 10},
});

export default AddEvents;
