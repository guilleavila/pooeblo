import { Card } from 'react-bootstrap'

const VillageCard = ({ name }) => {

    return (
        <Card className='villageCard'>
            <Card.Body>
                <Card.Title>SOY LA CARTA DE {name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default VillageCard