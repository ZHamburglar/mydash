import axios from 'axios';
// import qs from 'qs';

import {
    GET_WEATHER,
    RETRIEVED_WEATHER,
    ERROR_WEATHER,
    CHANGE_ZIPCODE
} from './types'

const WEATHER_ROOT_URL ='https://api.openweathermap.org/data/2.5/weather?zip=';
const WEATHER_FIN_URL=',us&APPID=f5a95128aad4a9638e86353dc200192e&units=imperial'


export const getWeather = (zip, callback) => async(dispatch) => {
    try {
        const query = `${WEATHER_ROOT_URL}${zip}${WEATHER_FIN_URL}`
        dispatch({ type: GET_WEATHER })
        const { data } = await axios.get(query)
        // console.log("data", data)
        dispatch({ type:RETRIEVED_WEATHER, payload: data })
        callback();
    } catch(e){
        return {
            type: ERROR_WEATHER
        }
    }



}
