import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import HeaderBasket from "@components/ecommerce/headBasket/HeaderBasket";
import HeaderWishlist from "@components/ecommerce/headWishlist/HeaderWishlist";
import styles from "./style.module.css"
import { NavLink } from "react-router-dom";
import { useAppSelector  , useAppDispatch} from "@store/hooks";
import { userLogout } from "@store/auth/authSlice";

const { headerContainer, headerLogo } = styles;

const Header = () => {

    const { accessToken, user } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>our</span> <Badge bg="info">Ecom</Badge>
                </h1>
                <div className="d-flex">
                    <HeaderWishlist />
                    <HeaderBasket />
                </div>
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
                            {
                                !accessToken
                                    ?
                                    (
                                        <>
                                            <Nav.Link as={NavLink} to={"/login"}>
                                                Login
                                            </Nav.Link>
                                            <Nav.Link as={NavLink} to={"/register"}>
                                                Register
                                            </Nav.Link>
                                        </>
                                    )
                                    :
                                    (
                                        <NavDropdown
                                            title={`Welcome: ${user?.firstName} ${user?.lastName}`}
                                            id="basic-nav-dropdown"
                                        >
                                            <NavDropdown.Item as={NavLink} to="profile">
                                                Profile
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>Orders</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={
                                                () => {
                                                    dispatch(userLogout())
                                                    window.location.href = "/"
                                                }
                                            }
                                            >Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    )

                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;