import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import { getDetails } from '../../redux/actions/mealAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './MealDetails.scss'

const MealDetails = () => {

  const details = useSelector(state => state.meal.details)
  console.log(details);

  const dispatch = useDispatch()
  const state = useLocation().state; 
  let id = state?.id 

  useEffect(() => {
    dispatch(getDetails(id))
  }, [])
  
  return (
    <div className='details'>
      {details.meals?.map(meal => (
        <div key={meal.idMeal} className="details-content">
          <img src={meal.strMealThumb} />
          <h1>{meal.strMeal}</h1>
          <h2>" {meal.strCategory} "</h2>
          <h4>( {meal.strArea} ) <span><FontAwesomeIcon icon={faHeart} /></span> </h4>

          {/*insructions*/}
          <div className='details-content-btn'>
            <div className='details-content-btn-insructions'>
              <button type="button" className="btn inst" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Instructions
              </button>

              <div className="modal fade modal-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h2 className="modal-title" id="exampleModalLabel">Instructions</h2>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>{meal.strInstructions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/*Ingredients*/}

          <div className='details-content-btn-Ingredients'>
            <button type="button" className="btn ingr" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Ingredients
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="staticBackdropLabel">Ingredients</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>{meal.strIngredient1} = {meal.strMeasure1}</p>
                    <p>{meal.strIngredient2} = {meal.strMeasure2}</p>
                    <p>{meal.strIngredient3} = {meal.strMeasure3}</p>
                    <p>{meal.strIngredient4} = {meal.strMeasure4}</p>
                    <p>{meal.strIngredient5} = {meal.strMeasure5}</p>
                    <p>{meal.strIngredient6} = {meal.strMeasure6}</p>
                    <p>{meal.strIngredient7} = {meal.strMeasure7}</p>
                    <p>{meal.strIngredient8} = {meal.strMeasure8}</p>
                    <p>{meal.strIngredient9} = {meal.strMeasure9}</p>
                    <p>{meal.strIngredient10} = {meal.strMeasure10}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div> 
      ))}
    </div>
  )
}

export default MealDetails

{/**<p>{meal.strIngredient1} = {meal.strMeasure1}</p>
                      <p>{meal.strIngredient2} = {meal.strMeasure2}</p>
                      <p>{meal.strIngredient3} = {meal.strMeasure3}</p>
                      <p>{meal.strIngredient4} = {meal.strMeasure4}</p>
                      <p>{meal.strIngredient5} = {meal.strMeasure5}</p>
                      <p>{meal.strIngredient6} = {meal.strMeasure6}</p>
                      <p>{meal.strIngredient7} = {meal.strMeasure7}</p>
                      <p>{meal.strIngredient8} = {meal.strMeasure8}</p>
                      <p>{meal.strIngredient9} = {meal.strMeasure9}</p>
                      <p>{meal.strIngredient10} = {meal.strMeasure10}</p> */}