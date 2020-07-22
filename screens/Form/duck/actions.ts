import {SET_USER_DATA, SET_COUNTRIES_LIST} from './action-types';
import {IFormValues, ICountry} from '../types';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import map from 'lodash/map';
import {initialState} from './initialState';

export const setUserForm = (values: IFormValues) => {
  return {
    type: SET_USER_DATA,
    payload: values,
  };
};

export const setCountriesList = (countries: ICountry[]) => {
  return {
    type: SET_COUNTRIES_LIST,
    payload: countries,
  };
};

export const loadUserData = () => (dispatch: any) => {
  const fetchFormData = () => {
    return AsyncStorage.getItem('formValues')
      .then((values: any) => {
        const data = JSON.parse(values);
        return data;
      })
      .catch(() => {
        return initialState;
      });
  };
  const fetchCountriesList = () => {
    return axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({data}) => {
        return map(data, ({name}) => {
          return {label: name, value: name};
        });
      })
      .catch((error) => {
        return [];
      });
  };
  fetchCountriesList().then((values: ICountry[]) =>
    dispatch(setCountriesList(values)),
  );
  fetchFormData().then((values: IFormValues) => dispatch(setUserForm(values)));
};

export const handleChange = (name: string, value: string) => (
  dispatch: any,
  getState: any,
) => {
  const {userDetails} = getState();
  const data = {
    ...userDetails,
    [name]: value,
  };
  dispatch(setUserForm(data));
  AsyncStorage.setItem('formValues', JSON.stringify(data));
};
export const handleSubmit = () => (dispatch: any) => {
  console.log('Success');
  dispatch(setUserForm(initialState));
  AsyncStorage.removeItem('formValues');
};
