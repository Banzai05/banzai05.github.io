import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavbarComp = () => <Navbar bg="light" expand="md">
    <Container>
        <Navbar.Brand href="#home">Portfolio Esequiel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

// function navbarComp() {
//     return (

//     );
// }

export default NavbarComp;