import {
    SB_ADDITEM,
    SB_REMOVEITEM
} from '../actions/types';

const INITIAL_STATE = {
    sideItems: []
  }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SB_ADDITEM:
            var i = state.sideItems.length
            while (i--) {
                if(state.sideItems[i] === action.payload) {
                    return {
                        ...state
                    }
                }
            }
            return { ...state,
                sideItems: [ ...state.sideItems, action.payload]
            }
        case SB_REMOVEITEM:
            const newSideItems = state.sideItems.filter(item => item !== action.payload)
            console.log('new Items: ', newSideItems)
            return { ...state,
                sideItems: newSideItems
            }

        default:
            return state;
    }
  }