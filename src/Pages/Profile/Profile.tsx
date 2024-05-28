import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import './Profile.scss'
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/consts';
import Modal from 'react-bootstrap/Modal';
import { CreateFilm } from '../../Components/CreateFilm/CreateFilm';
export function Profile() {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [filmVisible, setFilmVisible] = useState(false)

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      navigate(HOME_ROUTE)
    }



    return (

        <>
        
            <Button className=' profile-btn btn-primary  ' onClick={() => setFilmVisible(true)}>Создать фильм</Button>
            <Button onClick={() => logOut()} className=' profile-btn btn-primary  '>Выйти</Button>
            <CreateFilm show={filmVisible} onHide={() => setFilmVisible(false)} />
            {/* <div className='profile-full'>
                <h1 className='profile-title'>Личный кабинет</h1>

                <div className='profile-cabinet'>
                    <span>
                        <h2 className='profile-info-title' >Логин</h2> 
                        <h4 className='profile-info-ans'>ALFzz</h4>
                    </span>

                    <span>
                        <h2 className='profile-info-title' >Почта</h2> 
                        <h4 className='profile-info-ans'>qiranem@gmail.com</h4>
                    </span>

                    <Button onClick={() => logOut()} className=' profile-btn btn-primary  '>Выйти</Button>
                </div>

                <h1 className='profile-fav-title'>Любимые Фильмы</h1>
                <div className='profile-wrap'>
                    <ListGroup  className='profile-bas'>
                        <ListGroup.Item className='profile-fas'>Люди в черном (1997)</ListGroup.Item>
                        <ListGroup.Item className='profile-fas'>1+1 (2011)</ListGroup.Item>
                        <ListGroup.Item className='profile-fas'>Такси (1998)</ListGroup.Item>
                        <ListGroup.Item className='profile-fas'>Такси (1998)</ListGroup.Item>

                    

                    </ListGroup>
                </div>


                
                    

                

            </div> */}

            
            <Footer/>

           
        </>
    )
}