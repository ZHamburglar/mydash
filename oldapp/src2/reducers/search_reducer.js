import {
    SEARCH_CHANGE,
    SEARCH_INITIATE,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
    searchItem: '',
    loading: false,
    gList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SEARCH_CHANGE:
            return {...state, searchItem: action.payload};
        case SEARCH_INITIATE:
            return {...state, loading: true};
        case SEARCH_FAILURE:
            return {...state, loading: false};
        case SEARCH_SUCCESS:
            return {...state, loading: false, gList: action.payload, searchItem: ''};
        default:
            return state;
    }
}