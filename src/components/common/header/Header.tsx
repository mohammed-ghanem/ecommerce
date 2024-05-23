import { Badge, Navbar, Nav, Container } from "react-bootstrap"
import HeaderBasket from "../../ecommerce/headBasket/HeaderBasket";
import styles from "./style.module.css"


const { headerContainer, headerLogo } = styles;

const Header = () => {
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>our</span> <Badge bg="info">Ecom</Badge>
                </h1>

                <HeaderBasket />
            </div>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" >
                                Home
                            </Nav.Link>
                            <Nav.Link href="#">
                                Categories
                            </Nav.Link>
                            <Nav.Link href="#">
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">
                                Login
                            </Nav.Link>
                            <Nav.Link href="#">
                                Register
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;