import { useContext } from "react"
import { useState, useEffect } from "react"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import VillageCard from "../VillageCard/VillageCard"


const MyFollowedVillages = () => {

    const { user } = useContext(AuthContext)

    const [myFollowedVillages, setMyFollowedVillages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (user) {
            getFollowedVillages()
        }
    }, [user])

    const getFollowedVillages = () => {
        userService
            .getUserDetails(user?._id)
            .then(({ data }) => {
                setMyFollowedVillages(data.followedVillages)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                isLoaded && myFollowedVillages.map(eachVillage => {
                    return <VillageCard key={eachVillage._id} {...eachVillage} />
                })
            }
            <hr />

        </>
    )
}

export default MyFollowedVillages