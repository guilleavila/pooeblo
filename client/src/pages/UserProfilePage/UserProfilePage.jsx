import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import MyHouses from "../../components/MyHouses/MyHouses"
import { Container, Row } from "react-bootstrap"
import MyFollowedVillages from "../../components/MyFollowedVillages/MyFollowedVillages"
import { useEffect } from "react"
import userService from "../../services/user.service"
import ResultsHouses from "../../components/ResultsHouses/ResultsHouses"
import MyRentings from "../../components/MyRentings/MyRentings"
import subscriptionsService from "../../services/subscriptions.service"

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [userDetails, setUserDetails] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [subscriptions, setSubscriptions] = useState([])
    const [subsLoaded, setSubsLoaded] = useState(false)

    useEffect(() => {
        if (user) {
            getDetails()
            getSubscriptions()
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

    const getSubscriptions = () => {
        subscriptionsService
            .getAllSubscriptionsOfOneUser(user?._id)
            .then(({ data }) => {
                setSubscriptions(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    return (

        <Container>

            <h1>Bienvenid@ {user?.firstName}</h1>

            <h2>Aquí deberían ir los pueblos a los que sigues</h2>
            <Row>
                {isLoaded && < MyFollowedVillages followedVillages={userDetails.followedVillages} />}
            </Row>

            <h2>Aquí deberían ir tus casas favoritas</h2>
            <Row>
                {isLoaded && < ResultsHouses houses={userDetails.favHouses} width={6} />}
            </Row>

            <h2>Aquí deberían ir tus rentings</h2>
            <Row>
                {subsLoaded && < ResultsHouses houses={subscriptions} width={4} />}
            </Row>
            <MyRentings />

            <h2>Aquí deberían ir tus casas</h2>
            <MyHouses />

        </Container>
    )
}

export default UserProfilePage