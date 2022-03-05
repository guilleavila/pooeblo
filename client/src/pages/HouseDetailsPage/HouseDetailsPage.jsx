import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FavBtn from "../../components/FavBtn/FavBtn"
import NewSubscriptionForm from "../../components/NewSubscriptionForm/NewSubscriptionForm"
import { AuthContext } from "../../context/auth.context"
import housesService from "../../services/houses.service"
import userService from "../../services/user.service"
import subscriptionsService from "../../services/subscriptions.service"

const HouseDetailsPage = () => {

    const [houseDetails, setHouseDetails] = useState({})

    const [isFav, setIsFav] = useState()
    const [btnState, setBtnState] = useState('Cargando...')

    const [isSuscriber, setIsSuscribed] = useState()

    const { house_id } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        housesService
            .getOneHouse(house_id)
            .then(({ data }) => setHouseDetails(data))
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
        <section>
            <h1>SOY LA PÁGINA DE DETALLES DE LA CASA: {houseDetails?.name} </h1>
            <FavBtn btnState={btnState} handleFavBtn={handleFavBtn} />
            {isSuscriber ? <p>Ya estás suscrito</p> : <NewSubscriptionForm {...houseDetails} />}
        </section>
    )
}

export default HouseDetailsPage