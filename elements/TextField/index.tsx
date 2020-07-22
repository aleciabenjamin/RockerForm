import React, {Fragment, FC} from 'react';
import {TextInput, Text} from 'react-native';
import {useField} from 'formik';

const TextField: FC<any> = ({placeholder, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <TextInput
        value={field.value}
        onChangeText={field.onChange(props.name)}
        onBlur={field.onBlur(props.name)}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <Text style={{fontSize: 10, color: 'red'}}>{meta.error}</Text>
      )}
    </Fragment>
  );
};

export default TextField;
