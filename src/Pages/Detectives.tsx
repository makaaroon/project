import { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import films from './films.json'
import { Card } from '../Components/Card/Card';
import { Button, Container } from 'react-bootstrap';
import {Header} from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import { FilmList } from '../Components/Card/FilmList';
import { fetchFilms } from '../http/FilmAPI';




export const Detectives = observer(() => {
  const {film} = useContext(Context)

  

  useEffect(() => {
    fetchFilms().then(data => {
      film.setFilmsByGenre(data, 1)
    })  
 
  }, [])
  

  return (
    <>
    
    
    {/* {films.map(film => <Card  title={film.title } image={film.image} rating={film.rating} year={film.year} alt={film.title}/>)} */}
    {/* {film.films.map(film => <Card id={film.id} key={film.id} title={film.title } image={film.image} rating={film.rating} year={film.year} alt={film.title}/>)} */}
    <FilmList/>
    

    <Footer/>
    </>
  )
});