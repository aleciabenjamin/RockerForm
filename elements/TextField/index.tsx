import React, {Fragment, FC} from 'react';
import {TextInput, Text} from 'react-native';
import {styles} from '../style';

interface ITextField {
  name: string;
  placeholder: string;
  value: string | number;
  error: string | undefined;
  handleChange: (name: string, value: string) => void;
}

const TextField: FC<ITextField> = ({
  name,
  placeholder,
  value,
  error,
  handleChange,
}) => {
  return (
    <Fragment>
      <TextInput
        value={value}
        onChangeText={(text: string) => handleChange(name, text)}
        placeholder={placeholder}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </Fragment>
  );
};

export default TextField;
