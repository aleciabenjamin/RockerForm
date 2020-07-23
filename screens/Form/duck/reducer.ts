import {initialState} from './initialState';
import {SET_USER_DATA, SET_COUNTRIES_LIST} from './action-types';
import {IFormValues} from '../types';

interface ICountries {
  type: typeof SET_COUNTRIES_LIST;
  payload: IFormValues;
}

interface IFORMDATA {
  type: typeof SET_USER_DATA;
  payload: IFormValues;
}

type IAction = ICountries | IFORMDATA;

function reducer(state: typeof initialState = initialState, action: IAction) {
  switch (action.type) {
    case SET_COUNTRIES_LIST:
      state = {
        ...state,
        countries: action.payload.countries,
      };
      break;
    case SET_USER_DATA:
      const {ssn, phoneNumber, email, country} = action.payload;
      state = {
        ...state,
        formData: {
          ssn,
          phoneNumber,
          email,
          country,
        },
      };
      break;
  }
  return state;
}

export default reducer;
