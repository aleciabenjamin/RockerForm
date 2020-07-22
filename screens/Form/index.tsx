import AsyncStorage from '@react-native-community/async-storage';
import {Formik, useFormikContext} from 'formik';
import React, {FC, Fragment, useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import * as yup from 'yup';
import Select from '../../elements/Select';
import TextField from '../../elements/TextField';
import {countryList, initialValues} from './initialValues';
import {styles} from './styles';

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

const UserFormFields = () => {
  const {isValid, handleSubmit, values} = useFormikContext();
  useEffect(() => {
    const saveData = async () => {
      if (values !== initialValues) {
        await AsyncStorage.setItem('formValues', JSON.stringify(values));
      }
    };
    saveData();
  }, [values]);
  return (
    <Fragment>
      <TextField name="ssn" placeholder="Social security number" />
      <TextField name="phoneNumber" placeholder="Phone number" />
      <TextField name="email" placeholder="Email" />
      <Select name="country" values={countryList} />
      <Button title="Submit" disabled={!isValid} onPress={handleSubmit} />
    </Fragment>
  );
};

const UserForm: FC<any> = () => {
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
  const handleSubmit = (values: any) => {
    AsyncStorage.removeItem('formValues');
    handleFormValues(initialValues);
  };
  return (
    <View style={styles.container}>
      <Formik
        enableReinitialize={true}
        initialValues={formValues}
        onSubmit={handleSubmit}
        validationSchema={validate}>
        <UserFormFields />
      </Formik>
    </View>
  );
};

export default UserForm;
