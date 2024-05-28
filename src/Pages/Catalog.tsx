import { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import films from './films.json'
import { Card } from '../Components/Card/Card';
import { Button, Container } from 'react-bootstrap';
import {Header} from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import { FilmList } from '../Components/Card/FilmList';
import { fetchFilms,  } from '../http/FilmAPI';




export const Catalog = observer(() => {
  const {film} = useContext(Context)
  // for (let i = 0; i < film.length; i++){
  //   console.log(film[i].genreId)
  //   if (film[i].genreId != 2) { film.splice(i, 1)} 
     
  // }
  

  useEffect(() => {
    // console.log()
    fetchFilms().then(data => {
      // let i = 4

      // do {
      //   console.log(data)
      //    console.log(i)
      //   if (data[i].genreId != 2) { data.splice(i, 1)} 
      //   else {console.log("goods")}
      //   i++
      // }
      // while(i < data.length) 
      // data.splice(i,1)
      // console.log(data)
      // film.setFilmsByGenre(data, 1)
      film.setFilms(data)
      
    }
      
      
    )  

 
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