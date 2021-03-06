import React, {FC} from 'react';
import Select from '../elements/Select';
import TextField from '../elements/TextField';
import {IFormValues, ICountry} from '../screens/Form/types';
import {View} from 'react-native';

interface IErrors {
  ssn?: string;
  phoneNumber?: string;
  email?: string;
  country?: string;
}

interface IUserFormFields {
  values: IFormValues;
  countries: ICountry[];
  errors: IErrors;
  handleChange: (name: string, value: string) => void;
}

const UserFormFields: FC<IUserFormFields> = ({
  values,
  countries,
  errors,
  handleChange,
}) => {
  return (
    <View>
      <TextField
        name="ssn"
        placeholder="Social security number"
        value={values.ssn}
        error={errors.ssn}
        handleChange={handleChange}
      />
      <TextField
        name="phoneNumber"
        placeholder="Phone number"
        value={values.phoneNumber}
        error={errors.phoneNumber}
        handleChange={handleChange}
      />
      <TextField
        name="email"
        placeholder="Email"
        value={values.email}
        error={errors.email}
        handleChange={handleChange}
      />
      <Select
        name="country"
        values={countries}
        value={values.country}
        error={errors.country}
        handleChange={handleChange}
      />
    </View>
  );
};

export default UserFormFields;
