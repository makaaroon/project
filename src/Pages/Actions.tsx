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




export const Actions = observer(() => {
  const {film} = useContext(Context)
  

  useEffect(() => {
    
    fetchFilms().then(data => {
      film.setFilmsByGenre(data, 2)
    })  

}, [])
  

  return (
    <>
    
    
    
    <FilmList/>
    

    <Footer/>
    </>
  )
});