import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import { getDetails } from '../../redux/actions/mealAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

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
    <div>
      {details.meals?.map(meal => (
        <div key={meal.idMeal}>
          <img src={meal.strMealThumb} />
          <h1>{meal.strMeal}</h1>
          <h2>{meal.strCategory}</h2>
          <h4>{meal.strArea}</h4>

          {/*insructions model */}
          <div>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Instructions
              </button>

              <div className="modal fade modal-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Instructions</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>{meal.strInstructions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Ingredients */}

            <div className='details-content-Ingredients'>
              <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"   aria-controls="collapseExample">
                Ingredients
              </button>

              <div className="collapse" id="collapseExample">
                <div className="card card-body Ingredients-body">
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
      ))}
    </div>
  )
}

export default MealDetails