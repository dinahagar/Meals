import { MEALS_DATA, MEALS_ERROR, MEALS_LOADING, SEARCH_MEAL } from "../actions/types";

const initialState = {
    meals : [] ,
    loading : false , 
    error : null,
    search : [] ,
}

export const mealReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case MEALS_LOADING :
            return { ...state , loading : true}
        case MEALS_DATA :
            return { ...state , loading : false , meals : action.payload }
        case MEALS_ERROR :
            return { ...state , loading : false , error : "" }
        case SEARCH_MEAL :
            return { ...state , loading : false , search : action.payload }

        default:
            return state;
    }
}