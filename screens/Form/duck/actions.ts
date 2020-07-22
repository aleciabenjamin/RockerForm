import {SET_USER_DATA} from './action-types';
import {IFormValues} from '../types';
import AsyncStorage from '@react-native-community/async-storage';
import {initialState} from './initialState';

export const setUserForm = (values: IFormValues) => {
  return {
    type: SET_USER_DATA,
    payload: values,
  };
};

export const loadUserData = () => (dispatch: any) => {
  AsyncStorage.getItem('formValues')
    .then((values: any) => {
      const data = JSON.parse(values);
      dispatch(setUserForm(data));
    })
    .catch(() => {
      dispatch(setUserForm(initialState));
    });
};

export const handleChange = (name: string, value: string) => (
  dispatch: any,
  getState: any,
) => {
  const userDetails = getState();
  const data = {
    ...userDetails,
    [name]: value,
  };
  dispatch(setUserForm(data));
  AsyncStorage.setItem('formValues', JSON.stringify(data));
};

export const handleSubmit = () => (dispatch: any) => {
  dispatch(setUserForm(initialState));
  AsyncStorage.removeItem('formValues');
};
