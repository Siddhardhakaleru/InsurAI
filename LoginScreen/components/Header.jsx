import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
    return(
        <>
        <Navbar bg="primary" variant='dark'>
          <Container>
            <Navbar.Brand to='/'>InsureAI Automation</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className='nav-link'>Home</Nav.Link>
              <Nav.Link as={Link} to="/login" className='nav-link'>Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    );
}
      