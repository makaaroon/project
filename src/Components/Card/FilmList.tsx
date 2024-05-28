import { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import films from './films.json'
import { Card } from './Card';
import { Button, Container } from 'react-bootstrap';


import { observer } from 'mobx-react-lite';
import { fetchFilms } from '../../http/FilmAPI';
import { Context } from '../../main';




export const FilmList = observer(() => {
  const {film} = useContext(Context)
  
  // useEffect(() => {
  //   fetchFilms().then(data => film.setFilms(data))
  // })

  return (
    <>
    
    
    {/* {films.map(film => <Card  title={film.title } image={film.image} rating={film.rating} year={film.year} alt={film.title}/>)} */}
    {film.films.map(film => <Card key={film.id} film={film}/>)}

    

    
    </>
  )
});