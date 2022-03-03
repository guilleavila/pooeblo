import './VillagesFilter.css'

import { useState } from 'react'

const VillagesFilter = ({ villages }) => {

    const [filteredVillages, setFilteredVillages] = useState([])

    const handleFilter = e => {
        const newFilter = villages.filter(village => {
            return village.name.toLowerCase().includes(e.target.value.toLowerCase())
        })

        e.target.value === '' ? setFilteredVillages([]) : setFilteredVillages(newFilter)
    }

    return (
        <div className='villagesFilter'>

            <input type='text' placeholder='busca un pueblo' onChange={handleFilter} />

            {
                filteredVillages.length != 0 && (
                    <div className='villagesResult'>
                        {
                            filteredVillages.map(village => {
                                return <a className='villageItem' key={village._id} href="/iniciar-sesion"><p>{village.name}</p></a>
                            })
                        }
                    </div>)
            }

        </div>
    )
}

export default VillagesFilter