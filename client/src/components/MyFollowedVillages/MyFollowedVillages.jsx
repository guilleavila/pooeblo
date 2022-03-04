import { useContext } from "react"
import { useState, useEffect } from "react"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"


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
                console.log(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                isLoaded && myFollowedVillages.map(eachVillage => {
                    return <p key={eachVillage._id}>Vengo sin props -- {eachVillage.name}</p>
                })
            }
            <hr />

        </>
    )
}

export default MyFollowedVillages