import { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Catalog } from './Pages/Catalog';
import { Home } from './Pages/Home';
import { Poster } from './Components/Poster/Poster';
import { Answer } from './Components/Answer/Answer';
import { FAQ } from './Pages/FAQ';
import { Contacts } from './Pages/Contacts/Contacts';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import { FilmPage } from './Pages/Film/FilmPage';
import {Registration} from './Registration/Registration'
import { Autorization } from './Pages/Authorization/Authorization';
import { Profile } from './Pages/Profile/Profile';
import { Heart } from './Components/Heart/Heart';
import {AppRouter} from './Components/AppRouter/AppRouter'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from './main';
import { check } from './http/userAPI';
import { Header } from './Components/Header/Header';
import { Spinner } from 'react-bootstrap';



const  App = observer(() => {
  const [count, setCount] = useState(0)
  const {user} =  useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"}/>
}
  

  return (
    <>




     <BrowserRouter>
        <Header/>
        <AppRouter/>
     </BrowserRouter>

 
    </>
  )
})

export default App
