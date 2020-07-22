import {initialState} from './initialState';
import {SET_USER_DATA, SET_COUNTRIES_LIST} from './action-types';
import {IFormValues} from '../types';

interface IAction {
  type: string;
  payload: IFormValues | string[];
}

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_COUNTRIES_LIST:
      state = {
        ...state,
        countries: action.payload,
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
