import { useState } from "react"
import villagesService from "../../services/villages.service"
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom"


const VillageFeaturesForm = () => {

    const [featuresForm, setFeaturesForm] = useState({
        distanceToCity: 0,
        residents: 0,
        averagePurchasePrice: 0,
        healthService: false,
        sportsFacilities: false,
        isCoastalVillage: false,
        isMountainVillage: false,
        otherServices: ''
    })

    const { pueblo_id } = useParams()
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setFeaturesForm({
            ...featuresForm,
            [name]: value
        })
    }

    const handleCheckedChange = e => {
        const { name, checked } = e.target
        setFeaturesForm({
            ...featuresForm,
            [name]: checked
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        villagesService
            .editVillageFeatures(pueblo_id, featuresForm)
            .then(({ data }) => {
                navigate('/iniciar-sesion')
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Distancia a la ciudad</Form.Label>
                <Form.Control type="number" name="distanceToCity" value={featuresForm.distanceToCity} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Habitantes</Form.Label>
                <Form.Control type="number" name="residents" value={featuresForm.residents} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Precio medio de compra</Form.Label>
                <Form.Control type="number" name="averagePurchasePrice" value={featuresForm.averagePurchasePrice} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Servicios sanitarios</Form.Label>
                <Form.Check type="checkbox" name="healthService" checked={featuresForm.healthService} onChange={handleCheckedChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Instalaciones deportivas</Form.Label>
                <Form.Check type="checkbox" name="sportsFacilities" checked={featuresForm.sportsFacilities} onChange={handleCheckedChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Playa</Form.Label>
                <Form.Check type="checkbox" name="isCoastalVillage" checked={featuresForm.isCoastalVillage} onChange={handleCheckedChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Montaña</Form.Label>
                <Form.Check type="checkbox" name="isMountainVillage" checked={featuresForm.isMountainVillage} onChange={handleCheckedChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Otros servicios</Form.Label>
                <Form.Control type="text-area" name="otherServices" value={featuresForm.otherServices} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Guardar</Button>

        </Form>
    )
}

export default VillageFeaturesForm