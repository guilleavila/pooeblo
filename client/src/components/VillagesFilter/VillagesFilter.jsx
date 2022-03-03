import './VillagesFilter.css'

import villagesService from '../../services/villages.service'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const VillagesFilter = () => {

    const [filteredVillagesByName, setFilteredVillagesByName] = useState([])
    const [filteredVillagesByProvince, setFilteredVillagesByProvince] = useState([])

    const handleVillagesByNameFilter = e => {

        if (e.target.value === '') {
            setFilteredVillagesByName([])
        } else {
            villagesService
                .getVillagesByName(e.target.value)
                .then(({ data }) => {
                    setFilteredVillagesByName(data)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='villagesFilter'>

            <input type='text' placeholder='busca un pueblo' onChange={handleVillagesByNameFilter} />

            {
                filteredVillagesByName.length != 0 && (
                    <div className='villagesResult'>
                        {
                            filteredVillagesByName.map(village => {
                                return <Link key={village._id} to={`/pueblos/${village._id}`}>
                                    <p className='villageItem' key={village._id}>{village.name}</p>
                                </Link>
                            })
                        }
                    </div>)
            }

            <input type="text" placeholder='busca por provincia' />

        </div>
    )
}

export default VillagesFilter