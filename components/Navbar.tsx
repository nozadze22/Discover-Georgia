import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.scss"


export function NavbarBs() {
  return (
    <Navbar style={{position:"fixed", width:"100", zIndex:"20"}}  expand="lg" className="navbar">
      <Container>
        <Navbar.Brand  style={{color:"red", fontSize:"30px"}} className='Georgia'>Georgia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="/Home">Why Georgia</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Taste">Taste</Nav.Link>

          
        
            <NavDropdown title="Georgia" id="basic-nav-dropdown">

              <NavDropdown.Item href="/Svaneti">svaneti</NavDropdown.Item>
              <NavDropdown.Item href="/Samegrelo">Samegrelo</NavDropdown.Item>
              <NavDropdown.Item href="/Qartli">Qartli</NavDropdown.Item>
              <NavDropdown.Item href="/Khaxeti">Khaxeti</NavDropdown.Item>
              <NavDropdown.Item href="/Imereti">Imereti</NavDropdown.Item>
              <NavDropdown.Item href="/Adjara">Adjara</NavDropdown.Item>
              <NavDropdown.Item href="/Mtskheta">Mtskheta-Mtianeti</NavDropdown.Item>
              <NavDropdown.Item href="/Racha">Racha-Lechkhumi & Kvemo Svaneti</NavDropdown.Item>
              <NavDropdown.Item href="/samtskhe-javakheti">samtskhe-javakheti</NavDropdown.Item>

              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}





