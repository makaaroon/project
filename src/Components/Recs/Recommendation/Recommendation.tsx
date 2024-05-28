import './Recomendation.scss'
// import films from '../../films.json'
// import { Card } from '../Card/Card'
import { Context } from '../../../main'
import { useContext, useEffect, useState } from 'react'
import { fetchFilms } from '../../../http/FilmAPI';
import { FilmList } from '../../Card/FilmList';
import { Card } from '../../Card/Card';
import films from '../../../films.json'
import { Card1 } from '../../Card1/Card1';
interface IRecommend {
    header: string;
    subtitle: string;
    from: number;
    to: number;
}


export const Recommendation = 
(props: IRecommend) => {
    const films1 = films.slice(props.from, props.to)
    // const {film} = useContext(Context)
    
    // расскоментируй useEffect чтообы загрузить с сервера
    // useEffect(() => {
    //     fetchFilms().then(data => 
    //         {
    //             switch (props.rec) {
    //                 case 1:
                        
    //                     film.setFilmsByYear(data)
    //                     // console.log("good")
    //                     break;

    //                 case 2:

    //                     film.setFilmsByYearReverse(data)
    //                     // console.log("bad")
    //                     break;
                
    //                 default:
    //                     break;
    //             }
                
    //         })
    //   }, [])
    // const recommend = film.films.slice(0, 2) 

    return (
        <>
            <h1 className="rec-title">{props.header}</h1>
            <h2 className='rec-subtitle'>{props.subtitle}</h2>
            <div className='rec-arr'>
            
            {films1.map((film) => <Card1 film={film}/> )}
            {/* <FilmList/> */}


   
            </div>
                
            
        </>
    )



}