import React from 'react'
import { header_img } from '../../Config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinWide , faFaceGrinBeamSweat , faHandPointDown} from '@fortawesome/free-solid-svg-icons';
import "./Home.scss"
import Categories from '../categories/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>

        <div className='home-header'>
          <h1><i>Meal</i></h1>
          <div className='container'>
          <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <img src={header_img} />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='home-header-p'>
                    <p className='first'>Welcome to our Website! You can find almost all types of food here! </p>
                    <p className='second'>Have a nice meal 
                      <span><FontAwesomeIcon icon={faFaceGrinWide} /></span> 
                    </p>  
                    <p className='third'>If you are confused, you can try with a random meal 
                      <span><FontAwesomeIcon icon={faHandPointDown} bounce /></span>
                    </p>  
                    <Link to="/random">
                      <button>Random
                        <span><FontAwesomeIcon icon={faFaceGrinBeamSweat} /></span>
                      </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>  {/* row*/}

        </div>

      <Categories />

    </div>
  )
}

export default Home