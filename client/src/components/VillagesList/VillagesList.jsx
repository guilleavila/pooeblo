import { Row, Col } from 'react-bootstrap'
import VillageCard from "../../components/VillageCard/VillageCard"

const VillagesResultsList = ({ villages }) => {

    return (
        <Row>
            {
                villages.map(village => {
                    return <Col md={4} key={village._id} > <VillageCard {...village} /> </Col>
                })
            }
        </Row>
    )
}

export default VillagesResultsList