import { useState, useEffect } from "react"

import villagesService from "../../services/villages.service"

import VillagesFilter from "../../components/VillagesFilter/VillagesFilter"
import VillagesResultsList from "../../components/VillagesList/VillagesList"

const VillagesResultsListPage = () => {

    const [villages, setVillages] = useState([])

    useEffect(() => {
        loadVillages()
    }, [])

    const loadVillages = () => {
        villagesService
            .getAllVillages()
            .then(({ data }) => {
                setVillages(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <section>
            <h1>SOY LA LISTA DE LOS RESULTADOS DE LOS PUEBLOS</h1>
            <VillagesFilter villages={villages} />
            <VillagesResultsList villages={villages} />
        </section>
    )
}

export default VillagesResultsListPage