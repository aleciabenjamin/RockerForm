import React, {FC, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import * as yup from 'yup';
import each from 'lodash/each';
import {handleSubmit, handleChange, loadUserData} from './duck/actions';
import {styles} from './styles';
import FormFields from '../../components/Form';
import {IUserForm} from './types';

const schema = yup.object().shape({
  ssn: yup
    .string()
    .test('validate-ssn', 'Enter Valid SSN.', (value: any) => {
      /**
       * https://gist.github.com/nekman/1058171/059fe8b2f4745d8b2fdcaa8747864c1a2559a485
       * Sample Format
       * 195505055555
       * 19550505-5555
       * 550505-5555
       * 550505 5555
       */
      if (value) {
        return /^\d{6,8}[-|(\s)]{0,1}\d{4}$/.test(value);
      }
      return true;
    })
    .required('SSN is required'),
  phoneNumber: yup
    .string()
    .test(
      'validate-phone-number',
      'Enter Valid Phone Number',
      (value: string) => {
        /**
         * https://www.etl-tools.com/regular-expressions/is-swedish-phone-number.html
         * +46 8 123 456 78
         * 08-123 456 78
         * 0123-456 78
         */
        if (value) {
          return /(([+]\d{2}[ ][1-9]\d{0,2}[ ])|([0]\d{1,3}[-]))((\d{2}([ ]\d{2}){2})|(\d{3}([ ]\d{3})*([ ]\d{2})+))$/.test(
            value,
          );
        }
        return true;
      },
    )
    .required('Phone Number is required'),
  email: yup.string().email().required('Email is required'),
  country: yup.string().required('Country is required'),
});

const UserForm: FC<IUserForm> = ({
  formData,
  countries,
  loadUserData,
  handleChange,
  handleSubmit,
}) => {
  const [errors, handleErrors] = useState({});
  useEffect(() => {
    loadUserData();
  }, []);
  const onSubmit = () => {
    handleErrors([]);
    schema
      .validate(formData, {abortEarly: false})
      .then(() => {
        handleSubmit();
      })
      .catch((err) => {
        const obj = {};
        each(err.inner, (details) => {
          obj[details.path] = details.message;
        });
        handleErrors(obj);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hey Rocker!</Text>
      <FormFields
        values={formData}
        countries={countries}
        errors={errors}
        handleChange={handleChange}
      />
      <TouchableOpacity style={styles.btn}>
        <View>
          <Button title="Submit" onPress={onSubmit} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const {formData, countries} = state.userDetails;
  return {
    formData,
    countries,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUserData: () => dispatch(loadUserData()),
    handleChange: (name: string, value: string) =>
      dispatch(handleChange(name, value)),
    handleSubmit: () => dispatch(handleSubmit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
