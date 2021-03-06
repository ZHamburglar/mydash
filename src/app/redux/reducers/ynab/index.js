const INITIAL_STATE = {
	YNABData: '',
	YNABDataMonthlyChart: '',
	loadingYNAB: false,
	ynabError: '',
};


export default function ynabReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case 'GET_YNAB_ERROR':
		return {
			...state,
			ynabError: 'there was an error with YNAB',
			loadingYNAB: false,
		};
	case 'FETCH_YNAB_DATA':
		console.log('getting YNAB Data');
		return {
			...state,
			loadingYNAB: true,
		};
	case 'YNAB_DATA_FOUND':
		console.log('YNAB data found');
		return {
			...state,
			YNABData: action.payload,
			loadingYNAB: false,
			ynabError: '',
		};
	default:
		return state;
	}
}
