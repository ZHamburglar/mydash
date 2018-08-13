import {
    SB_ADDITEM,
    SB_REMOVEITEM
} from './types';

export const addSideBarCalendar = (text) => {
    console.log("adding calendar to sidebar")
    return {
        type: SB_ADDITEM,
        payload: text
    }
}

export const removeSideBarCalendar = (text) => {
    console.log("adding calendar to sidebar")
    return {
        type: SB_REMOVEITEM,
        payload: text
    }
}