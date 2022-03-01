import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavbarComp = () => <Navbar bg="light" expand="md" fixed='top'>
    <Container>
        <Navbar.Brand href="#home">Esequiel Morales</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href='#banner'>Home</Nav.Link>
                <Nav.Link href="#profileSec">Acerca de mi</Nav.Link>
                <Nav.Link href="#experienceSec">Trayectoria</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

// function navbarComp() {
//     return (

//     );
// }

export default NavbarComp;