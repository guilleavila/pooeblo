import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FavBtn from "../../components/FavBtn/FavBtn"
import { AuthContext } from "../../context/auth.context"
import housesService from "../../services/houses.service"
import userService from "../../services/user.service"

const HouseDetailsPage = () => {

    const [houseDetails, setHouseDetails] = useState({})

    const [isFav, setIsFav] = useState()
    const [btnState, setBtnState] = useState('Cargando...')

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


    return (
        <section>
            <h1>SOY LA PÁGINA DE DETALLES DE LA CASA: {houseDetails?.name} </h1>
            <FavBtn btnState={btnState} handleFavBtn={handleFavBtn} />
        </section>
    )
}

export default HouseDetailsPage