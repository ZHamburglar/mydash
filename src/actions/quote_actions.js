import axios from 'axios';

import {
    GET_QUOTE,
    FOUND_QUOTE,
    ERROR_QUOTE
} from './types';

export const getQuotes = (callback) => async(dispatch) => {
    try {
        console.log('query: quote' )
        dispatch({ type: GET_QUOTE })
        const { data } = await axios.get('http://quotes.rest/qod.json')
        console.log("data for quotes: ", data.contents)
        dispatch({ type: FOUND_QUOTE, payload: data.contents.quotes[0] })
        callback();
    } catch(e){
        return {
            type: ERROR_QUOTE
        }
    }



}