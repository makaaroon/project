import './Header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const HeaderLogged=() => {
    return (
        <>
            <Navbar className=" fixed-top pb-0 mb-2 border-bottom  border-7" bg="black" data-bs-theme="dark">
        <Container >
        <Navbar.Brand className='brand' href="/">Movido</Navbar.Brand>
          <Nav > 
            <Nav.Link className="mid-links " href="/catalog">Главная</Nav.Link>
            <Nav.Link className="mid-links" href="/catalog"> Все Фильмы</Nav.Link>
            <Nav.Link className="mid-links" href="/catalog">Детективы</Nav.Link>
            <Nav.Link className="mid-links" href="/catalog">Боевики</Nav.Link>
          </Nav>

          <Nav  > 
            
            <Nav.Link  className='reg' href="/profile">Личный кабинет</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}