import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import MyHouses from "../../components/MyHouses/MyHouses"
import { Container } from "react-bootstrap"
import MyFollowedVillages from "../../components/MyFollowedVillages/MyFollowedVillages"


const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (

        <Container>
            <h1>Bienvenid@ {user?.firstName}</h1>
            <h2>Aquí deberían ir los pueblos a los que sigues</h2>
            <MyFollowedVillages />
            <h2>Aquí deberían ir tus casas favoritas</h2>
            <h2>Aquí deberían ir tus rentings</h2>
            <h2>Aquí deberían ir tus casas</h2>
            <MyHouses />
        </Container>
    )
}

export default UserProfilePage