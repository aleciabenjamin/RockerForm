import React, {Fragment, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useFormikContext} from 'formik';
import {Button} from 'react-native';
import Select from '../elements/Select';
import TextField from '../elements/TextField';
import {initialValues} from './initialValues';
import {countryList} from './initialValues';

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

export default UserFormFields;
