import React, {Fragment, FC} from 'react';
import {TextInput} from 'react-native';

interface ITextField {
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: (name: string, value: string) => void;
}

const TextField: FC<ITextField> = ({
  name,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <Fragment>
      <TextInput
        value={value}
        onChangeText={(text: string) => handleChange(name, text)}
        placeholder={placeholder}
      />
    </Fragment>
  );
};

export default TextField;
