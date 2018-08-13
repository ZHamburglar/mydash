import {
    SB_ADDITEM,
    SB_REMOVEITEM
} from '../actions/types';

const INITIAL_STATE = {
    sideItems: ''
  }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SB_ADDITEM:
            return { ...state
            }
        case SB_REMOVEITEM:
            console.log('action payload: ')
            return { ...state
            }

        default:
            return state;
    }
  }