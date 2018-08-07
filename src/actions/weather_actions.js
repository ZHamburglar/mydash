import axios from 'axios';
// import qs from 'qs';

import {
    GET_WEATHER,
    RETRIEVED_WEATHER,
    ERROR_WEATHER
} from './types'

const WEATHER_ROOT_URL ='api.openweathermap.org/data/2.5/weather?zip=78757,us&APPID=f5a95128aad4a9638e86353dc200192e&units=imperial';


export const getWeather = (callback) => async(dispatch) => {


    try {
        dispatch({type: GET_WEATHER})
        let { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=78757,us&APPID=f5a95128aad4a9638e86353dc200192e&units=imperial')
        console.log("data", data)
        dispatch({type:RETRIEVED_WEATHER, payload: data})
        callback();



    } catch(e){
        return {
            type: ERROR_WEATHER
        }
    }



}
