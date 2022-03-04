import { Container, Row, Col, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import villagesService from "../../services/villages.service"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import FollowBtn from "../../components/FollowBtn/FollowBtn"


const VillageDetailsPage = () => {

    const [villageDetails, setVillageDetails] = useState({})

    const [isFollowing, setIsFollowing] = useState()
    const [btnState, setBtnState] = useState('Cargando...')

    const { pueblo_id } = useParams()
    const { user } = useContext(AuthContext)



    useEffect(() => {
        villagesService
            .getOneVillage(pueblo_id)
            .then(({ data }) => setVillageDetails(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        villageDetails.name && checkIfFollowed()
    }, [user, villageDetails])

    const checkIfFollowed = () => {
        userService
            .getUserDetails(user?._id)
            .then(({ data }) => {

                console.log(data)
                console.log(data.followedVillages)

                let foundFollowedVillage = ''

                data?.followedVillages.forEach(elm => {
                    if (elm.name === villageDetails.name) {
                        foundFollowedVillage = elm.name
                    }
                })

                if (foundFollowedVillage !== '') {
                    setIsFollowing(true)
                    setBtnState('Dejar de seguir')
                } else {
                    setIsFollowing(false)
                    setBtnState('Seguir pueblo')
                }
            })
    }




    const handleFollowBtn = () => {

        if (!isFollowing) {
            villagesService
                .followVillage(pueblo_id, user?._id)
                .then(() => {
                    setIsFollowing(true)
                    setBtnState('Dejar de seguir')
                })
                .catch(err => console.log(err))
        } else if (isFollowing) {
            villagesService
                .unfollowVillage(pueblo_id, user?._id)
                .then(() => {
                    setIsFollowing(false)
                    setBtnState('Seguir pueblo')
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <section>

            <Container>
                <h1>Detalles de {villageDetails.name}</h1>
                <hr />
                <FollowBtn btnState={btnState} handleFollowBtn={handleFollowBtn} />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>CCAA</h3>
                        <p>{villageDetails.CCAA}</p>
                        <h3>Provincia</h3>
                        <p>{villageDetails.province}</p>
                    </Col>

                    {/* <Col md={{ span: 4, offset: 1 }}> */}
                    {/* </Col> */}
                </Row>

            </Container>
        </section>
    )
}

export default VillageDetailsPage
