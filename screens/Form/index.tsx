import {Formik} from 'formik';
import React, {FC} from 'react';
import {Alert, Button, View} from 'react-native';
import * as yup from 'yup';
import TextField from '../../elements/TextField';
import {styles} from './styles';

const initialValues = {
  ssn: '',
  phoneNumber: '',
  email: '',
  country: '',
};

const validate = yup.object().shape({
  ssn: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().email().required(),
  country: yup.string().required(),
});

const UserForm: FC<any> = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
      validationSchema={validate}>
      {(formikProps) => (
        <View style={styles.container}>
          <TextField name="ssn" placeholder="Social security number" />
          <TextField name="phoneNumber" placeholder="Phone number" />
          <TextField name="email" placeholder="Email" />
          <TextField name="country" placeholder="Country" />
          <Button
            title="Submit"
            disabled={!formikProps.isValid}
            onPress={formikProps.handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

export default UserForm;
