import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'
import { Link } from 'react-router-dom'

const SignupPage = () => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h1>Regístrate</h1>
                    <p>¿Eres un pueblo? <Link to='/registro-pueblo'>Regístrate aquí</Link></p>
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage