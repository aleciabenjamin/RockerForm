import React, {FC} from 'react';
import {Picker} from '@react-native-community/picker';
import map from 'lodash/map';

interface IOption {
  label: string | number;
  value: string | number;
}

interface ISelect {
  name: string;
  value: string | number;
  values: IOption[];
  handleChange: (name: string, value: string) => void;
}

const Select: FC<ISelect> = ({name, values, value, handleChange}) => {
  return (
    <Picker
      selectedValue={value}
      style={{height: 50}}
      onValueChange={(value: string) => handleChange(name, value)}>
      {map(values, ({label, value}) => {
        return <Picker.Item key={value} label={label} value={value} />;
      })}
    </Picker>
  );
};

export default Select;
