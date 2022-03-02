import { useState, useEffect } from "react"

import villagesService from "../../services/villages.service"

import VillagesFilter from "../../components/VillagesFilter/VillagesFilter"
import VillagesList from "../../components/VillagesList/VillagesList"

const VillagesListPage = () => {

    const [villages, setVillages] = useState([])
    const [villagesCopy, setVillagesCopy] = useState([])

    useEffect(() => {
        loadVillages()
    }, [])

    const loadVillages = () => {
        villagesService
            .getAllVillages()
            .then(({ data }) => {
                setVillages(data)
                setVillagesCopy(data)
            })
            .catch(err => console.log(err))
    }

    const filter = str => {

        let filteredVillages

        if (str) {
            filteredVillages = villagesCopy.filter(elm => elm.name.includes(str))
        } else {
            filteredVillages = villagesCopy
        }
    }

    return (
        <section>
            <h1>SOY LA LISTA DE LOS PUEBLOS</h1>
            <VillagesFilter filter={filter} />
            <VillagesList villages={villages} />
        </section>
    )
}

export default VillagesListPage