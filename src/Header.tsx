import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () =>{
    return (
    <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand  href="/">
                Gutendex
            </Navbar.Brand>
        </Container>
    </Navbar>);
}  
export default Header;