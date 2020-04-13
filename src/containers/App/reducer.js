import {setUser, clearUser} from './action';
import {handleActions} from 'redux-actions';

const initialState = {
  currentUser: null,
  isLoading: null,
};
export const userReducer = handleActions (
  {
    [setUser]: (state, {payload}) => {
      console.log ('payload', payload);
      return {
        ...state,
        ...{
          currentUser: payload,
          isLoading: false,
        },
      };
    },
    [clearUser]: state => {
      return {
        ...state,
        ...{currentUser: null},
      };
    },
  },
  initialState
);
