import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FavBtn from "../../components/FavBtn/FavBtn"
import NewSubscriptionForm from "../../components/NewSubscriptionForm/NewSubscriptionForm"
import { AuthContext } from "../../context/auth.context"
import housesService from "../../services/houses.service"
import userService from "../../services/user.service"
import { Container, Col, Row } from 'react-bootstrap'
import './HouseDetailsPage.css'
import subscriptionsService from "../../services/subscriptions.service"
import Bookings from "../../components/Bookings/Bookings"

const HouseDetailsPage = () => {

    const [houseDetails, setHouseDetails] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [isMine, setIsMine] = useState(false)

    const [isFav, setIsFav] = useState()
    const [btnState, setBtnState] = useState('Cargando...')

    const [isSuscriber, setIsSuscribed] = useState()

    const { house_id } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        housesService
            .getOneHouse(house_id)
            .then(({ data }) => {
                setHouseDetails(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        houseDetails.name && checkIfFav()
    }, [user, houseDetails])

    useEffect(() => {
        houseDetails.name && checkIfSubscribed()
    }, [user, houseDetails])

    const checkIfFav = () => {
        userService
            .getUserDetails(user?._id)
            .then(({ data }) => {

                let foundFavHouse = ''

                data?.favHouses.forEach(elm => {
                    if (elm.name === houseDetails.name) {
                        foundFavHouse = elm.name
                    }
                })

                if (foundFavHouse !== '') {
                    setIsFav(true)
                    setBtnState('Eliminar de favoritos')
                } else {
                    setIsFav(false)
                    setBtnState('Añadir a favoritos')
                }

            })
    }

    const checkIfMine = () => {
        // en procesooooooooo
        userService
            .getAllPropertiesOfOneUser(user?._id)
            .then(({ data }) => {

                let foundMyHouse = ''

                console.log(data)
            })


    }

    const handleFavBtn = () => {

        if (!isFav) {
            housesService
                .addHouseToFavs(house_id, user?._id)
                .then(() => {
                    setIsFav(true)
                    setBtnState('Eliminar de favoritos')
                })
                .catch(err => console.log(err))
        } else if (isFav) {
            housesService
                .substractHouseFromFavs(house_id, user?._id)
                .then(() => {
                    setIsFav(false)
                    setBtnState('Añadir a favoritos')
                })
                .catch(err => console.log(err))
        }
    }

    const checkIfSubscribed = () => {

        subscriptionsService
            .getAllSubscriptionsOfOneUser(user?._id)
            .then(({ data }) => {
                console.log(data)
                let foundSubsHouse = ''

                data.forEach(elm => {
                    console.log('soy el id de la casa', elm.house._id)
                    if (house_id === elm.house._id) {
                        foundSubsHouse = elm.house.name
                    }

                })

                if (foundSubsHouse !== '') {
                    console.log('estas suscrito a esta casa')
                    setIsSuscribed(true)
                } else {
                    console.log('no estás suscrito a la casa')
                    setIsSuscribed(false)
                }
            })
    }



    return (
        <Container>
            <Row>
                <Col sm={9}>
                    <h1>{houseDetails?.name} </h1>
                    <FavBtn btnState={btnState} handleFavBtn={handleFavBtn} />
                    {isSuscriber ? <Bookings house={house_id} /> : <NewSubscriptionForm {...houseDetails} />}
                </Col>
                <Col sm={3}>
                    <FavBtn btnState={btnState} handleFavBtn={handleFavBtn} />
                </Col>
            </Row>

            {
                isLoaded && (houseDetails?.images.length === 0) &&
                <Row>
                    <Col sm={7}>
                        <img className="houseImg" src="https://img.freepik.com/vector-gratis/casa-gris-paredes-ruinas_1308-73951.jpg?w=1480" alt="default" />
                    </Col>
                </Row>
            }

            {
                isLoaded && (houseDetails?.images.length === 5) &&
                <Row>
                    <Col sm={6}>
                        <img className="houseImg" src={houseDetails?.images[0]} alt="default" />
                    </Col>

                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <img className="houseImg" src={houseDetails?.images[1]} alt="default" />
                            </Col>
                            <Col sm={6}>
                                <img className="houseImg" src={houseDetails?.images[2]} alt="default" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <img className="houseImg" src={houseDetails?.images[3]} alt="default" />
                            </Col>
                            <Col sm={6}>
                                <img className="houseImg" src={houseDetails?.images[4]} alt="default" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }

        </Container>
    )
}

export default HouseDetailsPage