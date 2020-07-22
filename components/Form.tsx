import React, {FC} from 'react';
import Select from '../elements/Select';
import TextField from '../elements/TextField';
import {countryList} from './initialValues';
import {IFormValues} from '../screens/Form/types';
import {View} from 'react-native';
import {styles} from '../screens/Form/styles';

interface IUserFormFields {
  values: IFormValues;
  handleChange: (name: string, value: string) => void;
}

const UserFormFields: FC<IUserFormFields> = ({values, handleChange}) => {
  return (
    <View style={styles.form}>
      <TextField
        name="ssn"
        placeholder="Social security number"
        value={values.ssn}
        handleChange={handleChange}
      />
      <TextField
        name="phoneNumber"
        placeholder="Phone number"
        value={values.phoneNumber}
        handleChange={handleChange}
      />
      <TextField
        name="email"
        placeholder="Email"
        value={values.email}
        handleChange={handleChange}
      />
      <Select
        name="country"
        values={countryList}
        value={values.country}
        handleChange={handleChange}
      />
    </View>
  );
};

export default UserFormFields;
