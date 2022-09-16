import axios from "axios"
import { CATEGORIES_FILTER, MEALS_DATA, MEALS_ERROR, MEALS_LOADING, MEAL_DETAILS, RANDOM_MEAL, SEARCH_MEAL } from "./types"

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

export const randomMeal = (data) => {
    return {
        type : RANDOM_MEAL,
        payload : data
    }
}

export const mealDetails = (data) => {
    return {
        type : MEAL_DETAILS,
        payload : data
    }
}

export const categoriesFilter = (data) => {
    return {
        type : CATEGORIES_FILTER,
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

export const getRandom = () => {
    return (dispatch) => {

        dispatch(mealLoading())

    return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(response => {
        dispatch(randomMeal(response.data))
    })
    .catch(err => {
        dispatch(mealError(err))
        console.log(err);
    })
    }
}

export const getDetails = (id) => {
    return (dispatch) => {

        dispatch(mealLoading())

    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => {
        dispatch(mealDetails(response.data))
    })
    .catch(err => {
        dispatch(mealError(err))
        console.log(err);
    })
    }
}

export const getCategoriesFilter = (category) => {
    return (dispatch) => {
        dispatch(mealLoading())

    return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => {
        dispatch(categoriesFilter(response.data))
    })
    .catch(err => {
        dispatch(mealError(err))
        console.log(err);
    })
    }
}