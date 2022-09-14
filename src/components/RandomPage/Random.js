import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandom, getVideo } from '../../redux/actions/mealAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinBeamSweat , faVideo} from '@fortawesome/free-solid-svg-icons';
import './Random.scss'
import { useNavigate } from 'react-router';

const Random = () => {

  const random = useSelector(state => state.meal.random)
  console.log(random);

  let videoId = "";

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getRandom())
  }, [])

  const handleRandom = () => {
    dispatch(getRandom())
  }

  return (
    <div className='random'>
      {random.meals?.map(meal => (
        <div key={meal.idMeal} className="random-content">
          
          <img src={meal.strMealThumb} />
          <h1>{meal.strMeal}</h1>
          <h2>" {meal.strCategory} "</h2>

          <div className='random-content-instructions'>
            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"   aria-controls="collapseExample">
              Instructions
            </button>
            <div className="collapse" id="collapseExample">
              <div className="card card-body instructions-body">
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          </div>

          <div className='random-content-btns'>

            <button className='video'>How to do 
              <span><FontAwesomeIcon icon={faVideo} /></span>
            </button>

            <button className='change' onClick={handleRandom}>Change<span><FontAwesomeIcon icon={faFaceGrinBeamSweat} /></span></button>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Random