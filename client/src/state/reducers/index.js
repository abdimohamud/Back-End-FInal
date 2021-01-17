import {
    LOG_IN,
    SET_LOADING,
    SET_CURRENT_USER,

  } from '../types';
  
  const INITIAL_STATE = {
    CURRENT_USER: {},
    LOGGED_IN: false,
    LOADING: false,
    ERROR: '',
  };
  
  export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, CURRENT_USER: action.payload };
      case LOG_IN:
        return { ...state, LOGGED_IN: true };
      case 'LOG_OUT':
        return { ...state, LOGGED_IN: false };
      case SET_LOADING:
        return { ...state, LOADING: action.payload };

      default:
        return state;
    }
  };