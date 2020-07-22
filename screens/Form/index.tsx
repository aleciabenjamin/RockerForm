import React, {FC, Fragment, useEffect} from 'react';
import {Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Formik, useFormikContext} from 'formik';
import * as yup from 'yup';
import TextField from '../../elements/TextField';
import Select from '../../elements/Select';
import {initialValues, countryList} from './initialValues';

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
    console.log('values', values);
    AsyncStorage.setItem('formValues', '342342434242432432').then((val) => {
      console.log('setFOrmvalues::::', val);
      AsyncStorage.getItem('formValues', (values) => {
        console.log('getFOrmvalues::::', values);
      });
    });
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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
      validationSchema={validate}>
      <UserFormFields />
    </Formik>
  );
};

export default UserForm;
