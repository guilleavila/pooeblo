import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'

const SignupPage = () => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h1>Soy el registro</h1>
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage