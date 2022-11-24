import {SET_ADMINID,SET_ID,LOGOUT,SET_CONID, SET_IMAGE,SET_SEARCH} from '../actions/types';

export const logout=()=>{
    return{
        type:LOGOUT
    }
}

export const setid=(id)=>{
    return{
        type:SET_ID,
        payload:id,
    }
}

export const setadminid=(id)=>{
    return{
        type:SET_ADMINID,
        payload:id,
    }
}

export const setconductorid=(id)=>{
    return{
        type:SET_CONID,
        payload:id,
    }
}

export const setimage=(id)=>{
    return{
        type:SET_IMAGE,
        payload:id
    }
}

export const setsearch=(value)=>{
    return{
        type:SET_SEARCH,
        payload:value
    }
}