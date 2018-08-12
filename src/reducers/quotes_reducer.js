import {
    GET_QUOTE,
    FOUND_QUOTE,
    ERROR_QUOTE
} from '../actions/types';

const INITIAL_STATE = {
    quote: '',
    quoteAuthor: '',
    quoteDate: '',
    loadingQuote: false,
    errorQuote: ''
  }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_QUOTE:
            return { ...state,
                loadingQuote: true
                
            }
        case FOUND_QUOTE:
            console.log('action payload: ', action.payload.quote)
            return { ...state,
                loadingQuote: false,
                errorQuote: '',
                quote: action.payload
            }
        case ERROR_QUOTE:
            return { ...state,
                loadingQuote: false,
                errorQuote: 'Error finding quote'

            }
        default:
            return state;
    }
  }