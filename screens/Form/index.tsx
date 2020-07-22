import AsyncStorage from '@react-native-community/async-storage';
import {Formik} from 'formik';
import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import * as yup from 'yup';
import {styles} from './styles';
import FormFields from '../../components/Form';
import {initialValues} from './initialValues';
import {IUserForm, IFormValues} from './types';

/**
 * ssn validation reference: https://www.etl-tools.com/regular-expressions/is-swedish-person-number.html
 * phone validation reference: https://www.etl-tools.com/regular-expressions/is-swedish-phone-number.html
 */
const validate = yup.object().shape({
  ssn: yup.string().required('SSN is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  email: yup.string().email().required('Email is required'),
  country: yup.string().required('Country is required'),
});

const UserForm: FC<IUserForm> = () => {
  const [formValues, handleFormValues] = useState(initialValues);
  useEffect(() => {
    const getValues = async () => {
      const data = await AsyncStorage.getItem('formValues');
      if (data) {
        handleFormValues(JSON.parse(data));
      }
    };
    getValues();
  }, []);
  const handleSubmit = (values: IFormValues) => {
    AsyncStorage.removeItem('formValues');
    handleFormValues(initialValues);
    if (values) {
      console.log('Success');
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        enableReinitialize={true}
        initialValues={formValues}
        onSubmit={handleSubmit}
        validationSchema={validate}>
        <FormFields />
      </Formik>
    </View>
  );
};

export default UserForm;
