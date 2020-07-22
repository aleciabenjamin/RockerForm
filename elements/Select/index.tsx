import React, {Fragment, FC} from 'react';
import {Picker} from '@react-native-community/picker';
import {useField} from 'formik';
import {Text} from 'react-native';
import map from 'lodash/map';

const Select: FC<any> = (props) => {
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <Picker
        selectedValue={field.value}
        style={{height: 50}}
        onValueChange={field.onChange(props.name)}>
        {map(props.values, ({label, value}) => {
          return <Picker.Item key={value} label={label} value={value} />;
        })}
      </Picker>
      {meta.touched && meta.error && (
        <Text style={{fontSize: 10, color: 'red'}}>{meta.error}</Text>
      )}
    </Fragment>
  );
};

export default Select;
