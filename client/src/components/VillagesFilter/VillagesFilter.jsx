import { useState } from 'react'

const VillagesFilter = ({ showFilteredVillages }) => {

    const [searchVillage, setSearchVillage] = useState("")

    const handleInput = e => {
        setSearchVillage(e.target.value)
        showFilteredVillages(e.target.value)
    }

    return (
        <div className='villagesFilter'>
            <form>
                <input type='search' placeholder='busca un pueblo' onChange={handleInput} />
            </form>
        </div>
    )
}

export default VillagesFilter