import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.scss'
import icontg from '/icons/Telegram.svg'
import iconInstagram from '/icons/Youtube.svg';
import iconVK from '/icons/Vkontakte.svg';
import { NavLink } from 'react-router-dom';


export const Footer = () => {
  return (
    <>
      <Navbar className="foot-bot    border-top head-border-7" bg="black" data-bs-theme="dark">
        <Container >
        <NavLink className='foot-brand text-white' to="/">Movido</NavLink>
          <Nav className='foot-wrap' > 
            <NavLink className="foot-mid-links " to="/aboutus">О нас</NavLink>
            <NavLink className="foot-mid-links" to="/contacts">Контакты</NavLink>
            <NavLink className="foot-mid-links" to="/faq">FAQ</NavLink>
          </Nav>

          <Nav className='foot-right-links' > 
            <Navbar.Brand>
              <img src={icontg} width={70} height={70}/>
            </Navbar.Brand>

            <Navbar.Brand>
              <img src={iconInstagram} width={70} height={70}/>
            </Navbar.Brand>

            <Navbar.Brand>
              <img src={iconVK} width={70} height={70}/>
            </Navbar.Brand>
            
            
          </Nav>
        </Container>
      </Navbar>
 
    </>

  )
}
