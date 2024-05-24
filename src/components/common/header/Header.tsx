import { Badge, Navbar, Nav, Container } from "react-bootstrap"
import HeaderBasket from "../../ecommerce/headBasket/HeaderBasket";
import styles from "./style.module.css"
import { NavLink } from "react-router-dom";

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
                            <Nav.Link as={NavLink} to={"/"} >
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={"/categories"}>
                                Categories
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={"/about-us"}>
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to={"/login"}>
                                Login
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={"/register"}>
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