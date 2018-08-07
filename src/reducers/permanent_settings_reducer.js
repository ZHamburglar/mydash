import {
    CHANGE_ZIPCODE
  } from '../actions/types';
  
  const INITIAL_STATE = {
    zipCode: ''
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHANGE_ZIPCODE:
        return { ...state,
          zipCode: action.payload
        }
      default:
        return state;
    }
  }