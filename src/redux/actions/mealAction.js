import axios from "axios"
import { MEALS_DATA, MEALS_ERROR, MEALS_LOADING, SEARCH_MEAL } from "./types"

export const mealLoading = () => {
    return {
        type : MEALS_LOADING
    }
}
export const mealData = (data) => {
    return {
        type : MEALS_DATA,
        payload : data
    }
}
export const mealError = () => {
    return {
        type : MEALS_ERROR
    }
}

export const searchMeal = (data) => {
    return {
        type : SEARCH_MEAL,
        payload : data
    }
}

export const getMeals = () => {
    return (dispatch) => {

        dispatch(mealLoading())

    return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(response => {
        dispatch(mealData(response.data))
    })
    .catch((err) => {
        dispatch(mealError(err))
        console.log(err);
    })
    }
}

export const getSearch = (inputText) => {
    return (dispatch) => {

        dispatch(mealLoading())

    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
    .then(response => {
        dispatch(searchMeal(response.data))
    })
    .catch(err => {
        dispatch(mealError(err))
        console.log(err);
    })
    }
}