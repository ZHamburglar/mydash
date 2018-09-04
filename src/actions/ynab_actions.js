import axios from 'axios';

import {
    GET_YNAB
} from './types';


export const GET_YNAB_DATA = () => async(dispatch) => {
    console.log('this is a test output')
    console.log(process)

    try {
        // const query = `${WEATHER_ROOT_URL}${zip}${WEATHER_FIN_URL}`
        // // console.log('query: ', query, zip)
        // dispatch({ type: GET_WEATHER })
        // const { data } = await axios.get(query)
        // // console.log("data", data)
        // dispatch({ type:RETRIEVED_WEATHER, payload: data })
        // callback();
    } catch(e){
        return {
            type: GET_YNAB_ERROR
        }
    }
}