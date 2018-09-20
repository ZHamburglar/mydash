// const INITIAL_STATE = {
// 	loadingWeather: false,
// 	weather: '',
// 	weatherError: '',
// };

export default function generalSettingsReducer(state = 	{
	loadingWeather: false,
	weather: '',
	weatherError: '',
}, action) {
	switch (action.type) {
	case 'get_weather':
		// console.log('getting weather reducer');
		return {
			...state,
			loadingWeather: true,
		};
	case 'retrieved_weather':
		// console.log('got the weather');
		return {
			...state,
			loadingWeather: false,
			weather: action.payload,
			weatherError: '',
		};
	case 'error_weather':
		return {
			...state,
			weatherError: 'ERROR HERE',
			loadingWeather: false,
			weather: '',
		};
	default:
		return state;
	}
}
