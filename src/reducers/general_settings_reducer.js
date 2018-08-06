import {
  GET_WEATHER,
  RETRIEVED_WEATHER
} from '../actions/types';

const INITIAL_STATE = {
  loadingWeather: false,
  weather: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state,
        loadingWeather: true
      };
    case RETRIEVED_WEATHER:
      return { ...state,
        loadingWeather: false,
        weather: action.payload
      };
    default:
      return state;
  }
}