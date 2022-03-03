import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {

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
                        <NavLink to="/registro">
                            <Nav.Link as="span">Regístrate</Nav.Link>
                        </NavLink>
                        <NavLink to="/iniciar-sesion">
                            <Nav.Link as="span">Inicia sesión</Nav.Link>
                        </NavLink>

                        {/* {
                            !isLoggedIn ?
                                <>
                                    <NavLink to="/registro">
                                        <Nav.Link as="span">Registro</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/inicio-sesion">
                                        <Nav.Link as="span">Iniciar sesión</Nav.Link>
                                    </NavLink>
                                </>
                                :
                                <>
                                    <Nav.Link as="span">¡Hola, {user?.username}!</Nav.Link>
                                    <Nav.Link as="span" onClick={logOutUser}>Cerrar sesión</Nav.Link>
                                </>
                        } */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation