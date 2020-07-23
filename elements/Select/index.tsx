import React, {FC} from 'react';
import {Picker} from '@react-native-community/picker';
import map from 'lodash/map';
import {styles} from '../style';
import {Text} from 'react-native';

interface IOption {
  label: string | number;
  value: string | number;
}

interface ISelect {
  name: string;
  value: string | number;
  values: IOption[];
  error: string | undefined;
  handleChange: (name: string, value: string) => void;
}

const Select: FC<ISelect> = ({name, values, value, error, handleChange}) => {
  return (
    <>
      <Picker
        selectedValue={value}
        style={{height: 50}}
        onValueChange={(value: string) => handleChange(name, value)}>
        {map(values, ({label, value}) => {
          return <Picker.Item key={value} label={label} value={value} />;
        })}
      </Picker>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

export default Select;
