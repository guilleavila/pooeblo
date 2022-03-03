import { useContext } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"

const Navigation = () => {

    const { isLoggedIn, user, logOutUser, isLoading } = useContext(AuthContext)

    return (
        <Navbar bg="dark" variant='dark' expand="lg" style={{ marginBottom: 30 }}>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand as="span">POOEBLO KK</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </NavLink>

                        {
                            isLoggedIn ?
                                <NavLink to="/iniciar-sesion">
                                    <Nav.Link as="span" onClick={logOutUser}>Cerrar sesión</Nav.Link>
                                </NavLink>
                                :
                                <>
                                    <NavLink to="/registro">
                                        <Nav.Link as="span">Regístrate</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/iniciar-sesion">
                                        <Nav.Link as="span">Inicia sesión</Nav.Link>
                                    </NavLink>
                                </>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation