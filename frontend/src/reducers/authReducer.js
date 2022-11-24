import {SET_ADMINID,SET_ID,LOGOUT, SET_IMAGE, SET_CONID, SET_SEARCH} from '../actions/types';

const initialState={
    id:null,
    adminid:null,
    conid:null,
    imageid:null,
    search:""
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_ID:
            return{
                ...state,
                id:action.payload
            }

            case SET_ADMINID:
            return{
                ...state,
                adminid:action.payload
            }
            case SET_CONID:
                return{
                    ...state,
                    conid:action.payload
                }
            case SET_IMAGE:
                return{
                    ...state,
                    imageid:action.payload
                }  
            case SET_SEARCH:
                return{
                    ...state,
                    search:action.payload
                }         


        case LOGOUT:
            return initialState;
            
        default:
            return state
    }
}

