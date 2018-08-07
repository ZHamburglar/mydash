import {
  GET_WEATHER,
  RETRIEVED_WEATHER,
  ERROR_WEATHER,
} from '../actions/types';

const INITIAL_STATE = {
  loadingWeather: false,
  weather: '',
  weatherError: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER:
      console.log("getting weather reducer")
      return { ...state,
        loadingWeather: true
      };
    case RETRIEVED_WEATHER:
      console.log("got the weather")
      return { ...state,
        loadingWeather: false,
        weather: action.payload,
        weatherError: ''
      };
    case ERROR_WEATHER:
      console.log('weather retrieve error')
      return { ...state,
        weatherError: 'ERROR HERE',
        loadingWeather: false,
        weather: ''
      };
    default:
      return state;
  }
}