import { useState, useContext } from "react"
import { Form, Button } from 'react-bootstrap'
import housesService from "../../services/houses.service"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { useEffect } from "react"
import uploadService from "../../services/upload.service"



const NewHouseForm = () => {

    const { user } = useContext(AuthContext)


    const [houseState, setHouseState] = useState({
        name: '',
        description: '',
        priceDay: 0,
        services: '',
        roomsDescription: '',
        maxGuests: 0,
        images: [],
        availableDaysLeft: 0,
        maxGuests: 0,
        lat: 0,
        lng: 0,
        village: '',
        owner: user?._id
    })

    useEffect(() => {
        setHouseState({
            ...houseState,
            owner: user?._id
        })
    }, [user])

    const navigate = useNavigate()

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target
        setHouseState({
            ...houseState,
            [name]: value
        })
    }

    const uploadHouseImages = e => {

        setLoadingImage(true)

        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('photos', e.target.files[i]);
        }

        uploadService
            .uploadImage(formData)
            .then(({ data }) => {
                setLoadingImage(false)
                console.log(data.cloudinary_urls)
                setHouseState({ ...houseState, images: data.cloudinary_urls })
            })
            .catch(err => console.log(err))

    }

    function handleSubmit(e) {
        e.preventDefault()

        housesService
            .createHouse(houseState)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Nombre de la casa</Form.Label>
                <Form.Control type="text" name="name" value={houseState.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" name="description" value={houseState.description} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Precio / día</Form.Label>
                <Form.Control type="number" name="priceDay" value={houseState.priceDay} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Instalaciones</Form.Label>
                <Form.Control as="textarea" name="services" value={houseState.services} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Habitaciones</Form.Label>
                <Form.Control as="textarea" name="roomsDescription" value={houseState.roomsDescription} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Capacidad</Form.Label>
                <Form.Control type="number" name="maxGuests" value={houseState.maxGuests} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Imágenes</Form.Label>
                <Form.Control type="file" onChange={uploadHouseImages} multiple />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Días disponibles</Form.Label>
                <Form.Control type="number" name="availableDaysLeft" value={houseState.availableDaysLeft} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lat</Form.Label>
                <Form.Control type="number" name="lat" value={houseState.lat} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lng</Form.Label>
                <Form.Control type="number" name="lng" value={houseState.lng} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Pueblo</Form.Label>
                <Form.Control type="text" name="village" value={houseState.village} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Registrar</Button>

        </Form>
    )
}

export default NewHouseForm