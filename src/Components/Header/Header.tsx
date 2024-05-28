import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.scss'
import { useContext } from 'react';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';
import { HOME_ROUTE } from '../../utils/consts';


 export const Header = observer(() => {
  const navigate = useNavigate()
  const {user} = useContext(Context)

//   const logOut = () => {
//     user.setUser({})
//     user.setIsAuth(false)
//     navigate(HOME_ROUTE)

// }
  
  return (
    <>

          <Navbar className=" fixed-top  mb-2 border-bottom  head-border-7" bg="black" data-bs-theme="dark">
            <Container >
            <NavLink className='head-brand text-white' to="/">Movido</NavLink>
              <Nav > 
                <NavLink className="head-mid-links " to="/">Главная</NavLink>
                <NavLink className="head-mid-links" to="/catalog"> Все Фильмы</NavLink>
                <NavLink className="head-mid-links" to="/detectives">Детективы</NavLink>
                <NavLink className="head-mid-links" to="/actions">Боевики</NavLink>
              </Nav>
              {user.isAuth ?
              <Nav>  
                {/* <NavLink  className='head-reg text-white' onClick={() => logOut()}>Выйти</NavLink> */}
                <NavLink  className='head-reg text-white' to="/profile">Личный кабинет</NavLink>
                
              </Nav>   
              :
              <Nav> 
                <NavLink className='head-enter'  to='/login'  >Вход</NavLink>
                <NavLink  className='head-reg' to="/registration">Регистрация</NavLink>
              </Nav>
              }
            </Container>
          </Navbar>
                

         
  
      



      

        
     
 
    </>

  )
});

// export default Header;
