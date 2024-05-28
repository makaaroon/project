import { useNavigate } from 'react-router-dom';
import './Card.scss'
import { FILM_ROUTE } from '../../utils/consts';
// 




export const Card = ({film}) => {
  const navigate = useNavigate()
   console.log()
  return (
    <>
    <div className='card-inline ' onClick={() => navigate(FILM_ROUTE + '/' + film.id)}>
      <div className='card-anim'>

      <div className='card-rating'>
        <h2 className='card-h2-rating'>{film.rating}</h2>
      </div>

      <img className='card-image-card' src= {'http://localhost:5000/' + film.img_card} alt= {film.name}/>
      </div>
      <p className='card-name'>{film.name}</p>
      <p className='card-year'>{film.release_year}</p>
    </div>




    </>

    // <div className='div-inline-block'>
        
    // </div>
  );
}