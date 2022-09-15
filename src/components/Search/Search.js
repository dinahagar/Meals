import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../../redux/actions/mealAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite , faCircleInfo , faHeart  , faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const [inputText , setInputText] = useState()
  const searchMeals = useSelector(state => state.meal.search)

  console.log(searchMeals);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getSearch(inputText))
  }, [inputText])

  const handleDetails = (meal) => {
    navigate("/mealdetails" , {
      state : {
        id: meal.idMeal
      }
    })
  }

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
          (searchMeals.meals?.length > 0 ? (searchMeals.meals?.map(meal => (
            <div className='search-page-content-div' key={meal.idMeal}>
              <img src={meal.strMealThumb} />
              <h3>{meal.strMeal.length > 30 ? `${meal.strMeal.substring(0, 33)}...` : meal.strMeal}</h3>
              <h4>" {meal.strCategory} "</h4>
              <div className='search-page-content-div-btns'>
                <FontAwesomeIcon icon={faCircleInfo} className="info" onClick={()=>handleDetails(meal)}/>
                <FontAwesomeIcon icon={faHeart} className="save" />
              </div>
            </div>
          ))) : (
            <h1>No match <span><FontAwesomeIcon icon={faFaceFrownOpen} /></span> Try again !</h1>
            )) 
          : (<h2><FontAwesomeIcon icon={faCookieBite} fade /></h2>)
        }
      </div>

    </div>
  )
}

export default Search