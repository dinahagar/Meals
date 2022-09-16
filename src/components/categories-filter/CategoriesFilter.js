import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { getCategoriesFilter } from '../../redux/actions/mealAction'

const CategoriesFilter = () => {

    const state = useLocation().state
    let category = state?.category

    const categories_filter = useSelector(state => state?.meal.categories_filter)
    console.log(categories_filter);

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getCategoriesFilter(category))
    }, [])
    
  return (
    <div>
        {categories_filter ? 
        
            (categories_filter.meals?.map(meal => (
                <div key={meal.idMeal}>
                    <img src={meal.strMealThumb}/>
                    <h2>{meal.strMeal}</h2>
                </div>
            ))) 
            : 
            (<h1>Not available now !!!</h1>)
        }
    </div>
  )
}

export default CategoriesFilter