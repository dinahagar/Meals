import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../../redux/actions/mealAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

const Search = () => {

  const [inputText , setInputText] = useState()
  const searchMeals = useSelector(state => state.meal.search)

  console.log(searchMeals);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearch(inputText))
  }, [inputText])

  return (
    <div className='search-page'>

      <div className='search-page-input'>
        <input 
          type="text" 
          placeholder='what do you want to eat ?' 
          onChange={(e) => setInputText(e.target.value)} 
          defaultValue={inputText}
        />
      </div>
    
      <div className='search-page-content'>
        {searchMeals && inputText ? 
          (searchMeals.meals?.map(meal => (
            <div className='search-page-content-div' key={meal.idMeal}>
              <img src={meal.strMealThumb} />
              <h3>{meal.strMeal}</h3>
              <h5>{meal.strCategory}</h5>
            </div>
          ))) : 
          (<h2><FontAwesomeIcon icon={faCookieBite} fade /></h2>)
        }
      </div>

    </div>
  )
}

export default Search