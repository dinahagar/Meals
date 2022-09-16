import { CATEGORIES_FILTER, MEALS_DATA, MEALS_ERROR, MEALS_LOADING, MEAL_DETAILS, RANDOM_MEAL, SEARCH_MEAL } from "../actions/types";

const initialState = {
    meals : [] ,
    search : [] ,
    random : [],
    details : [],
    categories_filter : [],
    loading : false , 
    error : null,
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
        case RANDOM_MEAL :
            return { ...state , loading : false , random : action.payload }
        case MEAL_DETAILS :
            return { ...state , loading : false , details : action.payload }
        case CATEGORIES_FILTER :
            return { ...state , loading : false , categories_filter : action.payload }

        default:
            return state;
    }
}