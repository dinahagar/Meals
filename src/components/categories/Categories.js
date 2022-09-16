import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux' 
import "./Categories.scss"
import { getMeals } from '../../redux/actions/mealAction'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Categories = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const meals = useSelector(state => state.meal.meals)
  // console.log(meals);

  useEffect(() => {
    dispatch(getMeals())
  } , [])

  const handleFilter = (meal) => {
    navigate("/categoriesfilter" , {
      state : {
        category : meal.strCategory
      }
    })
  }
    
  return (
    <div className='categories'>
      <h1>Categories</h1>
      <div className='container'>
        <div className='categories-content'>
          {meals.categories?.slice(0,12)?.map(meal => (
            <div key={meal.idCategory} className="categories-div" >
              <img src={meal.strCategoryThumb} alt="#" onClick={() => handleFilter(meal)}/>
              <h3>{meal.strCategory}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories