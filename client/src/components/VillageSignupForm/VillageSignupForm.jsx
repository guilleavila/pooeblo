import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

const VillageSignupForm = ({ updateState }) => {

    const [signupForm, setSignupForm] = useState({
        name: '',
        lat: '',
        lng: '',
        email: '',
        password: '',
        phoneNumber: '',
        CCAA: '',
        province: '',
    })


    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        authService
            .villageSignup(signupForm)
            .then(({ data }) => {
                updateState()
                navigate(`/caracteristicas/${data.village._id}`)
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" value={signupForm.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lat</Form.Label>
                <Form.Control type="number" name="lat" value={signupForm.lat} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lng</Form.Label>
                <Form.Control type="number" name="lng" value={signupForm.lng} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={signupForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={signupForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nº de teléfono</Form.Label>
                <Form.Control type="text" name="phoneNumber" value={signupForm.phoneNumber} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Comunidad Autónoma</Form.Label>
                <Form.Control type="text" name="CCAA" value={signupForm.CCAA} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Provincia</Form.Label>
                <Form.Control type="text" name="province" value={signupForm.province} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Siguiente</Button>

        </Form>

    )
}

export default VillageSignupForm