import { Container, Row, Col } from 'react-bootstrap'
import VillageSignupForm from '../../components/VillageSignupForm/VillageSignupForm'
import { Link } from 'react-router-dom'
import VillageFeaturesForm from '../../components/VillageFeaturesForm/VillageFeaturesForm'
import { useState } from 'react'

const VillageSignupPage = () => {

    const [step, setStep] = useState(1)

    const updateState = () => {
        setStep(2)
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h1>Regístrate</h1>
                    <p>¿Eres un usuario? <Link to='/registro'>Regístrate aquí</Link></p>
                    {step === 1 && <VillageSignupForm updateState={updateState} />}
                    {step === 2 && <VillageFeaturesForm />}
                </Col>
            </Row>
        </Container>
    )
}

export default VillageSignupPage