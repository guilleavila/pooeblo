import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import villagesService from "../../services/villages.service"

const VillageDetailsPage = () => {

    const [villageDetails, setVillageDetails] = useState({})
    const { pueblo_id } = useParams()

    useEffect(() => {
        villagesService
            .getOneVillage(pueblo_id)
            .then(({ data }) => setVillageDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section>

            <Container>
                <h1>Detalles de {villageDetails.name}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>CCAA</h3>
                        <p>{villageDetails.CCAA}</p>
                        <h3>Provincia</h3>
                        <p>{villageDetails.province}</p>
                    </Col>
                    <Col md={6}>
                        {/* <img style={{ width: '100%' }} src={coasterDetails.imageUrl} alt={coasterDetails.title} /> */}
                    </Col>
                    {/* <Link to="/galeria">
                        <Button variant="dark">Volver</Button>
                    </Link> */}
                </Row>

            </Container>
        </section>
    )
}

export default VillageDetailsPage
