import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import housesService from "../../services/houses.service"

const HouseDetailsPage = () => {

    const [houseDetails, setHouseDetails] = useState({})

    const { house_id } = useParams()

    useEffect(() => {
        housesService
            .getOneHouse(house_id)
            .then(({ data }) => setHouseDetails(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <section>
            <h1>SOY LA PÁGINA DE DETALLES DE LA CASA: {houseDetails?.name} </h1>
        </section>
    )
}

export default HouseDetailsPage