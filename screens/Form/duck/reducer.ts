import {initialState} from './initialState';
import {SET_USER_DATA} from './action-types';
import {IFormValues} from '../types';

interface IAction {
  type: string;
  payload: IFormValues;
}

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_USER_DATA:
      const {ssn, phoneNumber, email, country} = action.payload;
      state = {
        ...initialState,
        ssn,
        phoneNumber,
        email,
        country,
      };
      break;
  }
  return state;
}

export default reducer;
