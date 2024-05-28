import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createFilm = async (film) => {
    const {data} = await $host.post('api/film', film); 
    return data
}


export const fetchFilms = async () => {
    const {data} = await $host.get('api/film',);
    return data
}

export const fetchOneFilm = async (id) => {
    const {data} = await $host.get('api/film/' + id)
    return data
}

export const fetchGenres = async () => {
    const {data} = await $host.get('api/genre', )
    return data
}

