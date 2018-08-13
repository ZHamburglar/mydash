import {
    GOOGLE_LOGIN
  } from '../actions/types';

  const INITIAL_STATE = {
    
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GOOGLE_LOGIN:
        // console.log("getting weather reducer")
        return { ...state
        };

      default:
        return state;
    }
  }