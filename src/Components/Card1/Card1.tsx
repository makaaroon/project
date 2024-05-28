import { useNavigate } from 'react-router-dom';
import '../Card/Card.scss'
import { FILM_ROUTE } from '../../utils/consts';
// 

interface IFilm {
  name: string,
  img: string,
  rating: number,
  year: number,
  alt: string;
}


export const Card1 = ({film}) => {
  const navigate = useNavigate()
  return (
    <>
    <div className='card-inline' onClick={() => navigate(FILM_ROUTE + '/' + film.id)}>
      <div className='card-anim'>

      <div className='card-rating'>
        <h2 className='card-h2-rating'>{film.rating}</h2>
      </div>

      <img className='card-image-card' src= {film.img} alt= {film.name}/>
      </div>
      <p className='card-name'>{film.name}</p>
      <p className='card-year'>{film.year}</p>
    </div>

    </>
  )
}