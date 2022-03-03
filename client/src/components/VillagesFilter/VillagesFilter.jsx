import './VillagesFilter.css'

import villagesService from '../../services/villages.service'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const VillagesFilter = () => {

    const [filteredVillages, setFilteredVillages] = useState([])

    const handleFilter = e => {

        if (e.target.value === '') {
            setFilteredVillages([])
        } else {
            villagesService
                .getVillagesByName(e.target.value)
                .then(({ data }) => {
                    setFilteredVillages(data)
                })
                .catch(err => console.log(err))
        }

        // const newFilter = villages.filter(village => {
        //     return village.name.toLowerCase().includes(e.target.value.toLowerCase())
        // })

        // e.target.value === '' ? setFilteredVillages([]) : setFilteredVillages(newFilter)
    }

    return (
        <div className='villagesFilter'>

            <input type='text' placeholder='busca un pueblo' onChange={handleFilter} />

            {
                filteredVillages.length != 0 && (
                    <div className='villagesResult'>
                        {
                            filteredVillages.map(village => {
                                return <Link key={village._id} to={`/pueblos/${village._id}`}>
                                    <p className='villageItem' key={village._id}>{village.name}</p>
                                </Link>
                            })
                        }
                    </div>)
            }

        </div>
    )
}

export default VillagesFilter