import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from './types';


export const closeSideBar = () => {
    console.log("close")
    return {
        type: CLOSE_SIDEBAR    
    }
}

export const openSideBar = () => {
    return {
        type: OPEN_SIDEBAR   
    }
}