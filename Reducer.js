import { combineReducers } from "redux";

const initialState={
    identity:"",
    hospitalizationNumber:"",
    motherIdentity:"",
    birthDate:"",
    babyCare:"",
    _id:"",
}

export const babyReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "save_identity":
            return {...state,identity:action.payloud};
        case "save_hospitalizationNumber":
            return {...state,hospitalizationNumber:action.payloud};
        case "save_motherIdentity":
            return {...state,motherIdentity:action.payloud};
        case "save_birthDate":
            return {...state,birthDate:action.payloud};
        case "save_babyCare":
            return {...state,babyCare:action.payloud};
        case "save_id_mongo":
            return {...state,_id:action.payloud};
        default:
            return state;
    }
}

export default combineReducers({baby:babyReducer});