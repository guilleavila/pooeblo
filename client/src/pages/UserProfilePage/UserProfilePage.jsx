import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import MyHouses from "../../components/MyHouses/MyHouses"
import { Container } from "react-bootstrap"
import MyFollowedVillages from "../../components/MyFollowedVillages/MyFollowedVillages"
import { useEffect } from "react"
import userService from "../../services/user.service"
import MyFollowedVillagesTwo from '../../components/MyFollowedVillagesTwo/MyFollowedVillagesTwo'
import MyFavHouses from "../../components/MyFavHouses/MyFavHouses"
import MyRentings from "../../components/MyRentings/MyRentings"

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [userDetails, setUserDetails] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (user) {
            getDetails()
        }
    }, [user])


    const getDetails = () => {

        userService
            .getUserDetails(user?._id)
            .then(({ data }) => {
                setUserDetails(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    return (

        <Container>

            <h1>Bienvenid@ {user?.firstName}</h1>

            <h2>Aquí deberían ir los pueblos a los que sigues</h2>
            <MyFollowedVillages />
            {isLoaded && < MyFollowedVillagesTwo followedVillages={userDetails.followedVillages} />}

            <h2>Aquí deberían ir tus casas favoritas</h2>
            {isLoaded && <MyFavHouses favHouses={userDetails.favHouses} />}

            <h2>Aquí deberían ir tus rentings</h2>
            <MyRentings />

            <h2>Aquí deberían ir tus casas</h2>
            <MyHouses />

        </Container>
    )
}

export default UserProfilePage