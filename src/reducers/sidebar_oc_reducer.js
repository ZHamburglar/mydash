import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from '../actions/types';

const INITIAL_STATE = {
    sidebarOpen: true,
    docked: true
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case OPEN_SIDEBAR:
            return {...state, docked: true, sidebarOpen: false};
        case CLOSE_SIDEBAR:
            return {...state, docked: false, sidebarOpen: false};
        default:
            return state;
    }
}