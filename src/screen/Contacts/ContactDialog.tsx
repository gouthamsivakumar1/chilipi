import {Datepicker, Input, useTheme} from '@ui-kitten/components';
import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';

import Text from '../../components/Text';
import {Modalize} from 'react-native-modalize';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TouchableThrottle from '../../components/touchableThrottle';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AuthButton} from '../../components/authInput';
import moment from 'moment';

export type props = {
  visible: boolean;
  onChange: (value: any) => void;
};

const ContactDialog: React.FC<props> = ({visible, onChange}) => {
  const modalizeRef = React.useRef<Modalize>(null);

  React.useEffect(() => {
    onOpen();
  }, [visible]);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return visible ? (
    <Modalize
      ref={modalizeRef}
      onClosed={() => onChange(false)}
      modalStyle={{flex: 1, marginTop: 80}}>
      <RenderContent />
    </Modalize>
  ) : null;
};

const RenderContent = () => {
  const theme = useTheme();
  const [date, setDate] = React.useState(new Date());
  const [time, setTimeState] = React.useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setTimeState(date);
    hideDatePicker();
  };

  const addEventSchema = Yup.object().shape({
    name: Yup.string().required(),
    amt: Yup.number().required(),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        amt: '',
      }}
      onSubmit={values => console.log('value', values)}
      validationSchema={addEventSchema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <KeyboardAvoidingView
          style={{
            padding: 16,
          }}>
          <Text
            category="h3"
            style={{textAlign: 'center', color: theme['text-black-color']}}
            bold>
            ADD EXPENSE
          </Text>
          <Text category="p1" style={{color: theme['text-ash-color-1']}} bold>
            Expense Name
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
            placeholder="Enter event..."
          />
          {errors.name && touched.name ? (
            <Text category="p1" style={styles.errorMsg}>
              {errors.name}
            </Text>
          ) : null}

          <Text category="p1" style={{color: theme['text-ash-color-1']}} bold>
            Expense Amount
          </Text>
          <Input
            keyboardType="numeric"
            onChangeText={handleChange('amt')}
            textStyle={{color: theme['text-ash-color-1']}}
            style={[
              styles.inputContainer,
              {
                backgroundColor: theme['background-white-color'],
                borderColor: theme['border-basic-color'],
              },
            ]}
            placeholder="Enter amount ..."
          />
          {errors.amt && touched.amt ? (
            <Text category="p1" style={styles.errorMsg}>
              {errors.amt}
            </Text>
          ) : null}
          <Text category="p1" style={{color: theme['text-ash-color-1']}} bold>
            Expense Date
          </Text>
          <Datepicker
            status={'primary'}
            controlStyle={{backgroundColor: 'white'}}
            style={styles.inputContainer}
            date={date}
            onSelect={nextDate => setDate(nextDate)}
          />
          <Text category="p1" style={{color: theme['text-ash-color-1']}} bold>
            Expense Time
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
            <AuthButton onPress={handleSubmit} title="Submit" />
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  inputContainer: {
    marginVertical: 10,
  },
  errorMsg: {color: 'red', padding: 5},

  inputDateContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 10,
  },
  handleSubmitBtn: {flexWrap: 'wrap', alignSelf: 'center', marginVertical: 10},
});

export default ContactDialog;
