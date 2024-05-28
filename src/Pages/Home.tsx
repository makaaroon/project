import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Poster } from "../Components/Poster/Poster";
import { Recommendation } from "../Components/Recs/Recommendation/Recommendation";
import { Card1 } from "../Components/Card1/Card1";
import films from '../films.json'



export function Home() {

    return (
        <>
            {/* {films.map(film => <Card1  name={film.name} img={film.img} rating={film.rating} year={film.year} alt={film.name}/>)} */}
            <Poster/>
            <div className="hz">
                <Recommendation from={0} to={4} header="Фильмы недели" subtitle="Только свежие новинки"/>
            
            </div>
            
            <Recommendation from={4} to={8} header="Нестареющая классика" subtitle="Киноленты, которые выдержали испытание временем и продолжают вдохновлять зрителей всех поколений" />
            <Recommendation from={8} to={12} header="Смех до слёз" subtitle="Готовьтесь к нескончаемому веселью и незабываемым моментам смеха"/>
            <Footer/>            
            
        </>
    )


}