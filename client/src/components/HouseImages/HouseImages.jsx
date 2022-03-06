import { useEffect } from "react"
import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import housesService from "../../services/houses.service"
import './HouseImages.css'


const HouseImages = ({ images, _id, isMine, updataeImagesState }) => {


    // const [houseImages, setHouseImages] = useState([])
    const [showBtn, setShowBtn] = useState('hidden')

    // useEffect(() => {
    //     setHouseImages(images)
    // },[])

    // EDIT IMAGES BTN
    const handleEditBtn = () => {
        if (showBtn === 'hidden') setShowBtn('shown')
        else setShowBtn('hidden')

        console.log(images)
        console.log(_id)
    }

    const handleDeleteBtn = (imgUrl) => {

        console.log('Estas son las imágenes al inicio --->', images)
        const newImages = images.filter(eachImage => {
            console.log('Cada imagen ----------------', eachImage)
            return eachImage !== imgUrl
        })

        updataeImagesState(newImages)
        console.log('despues del filter --->', newImages)
        console.log('despues del setHouseImages --->', images)

        housesService
            .deleteOneImage(_id, newImages)
            .then(({ data }) => updataeImagesState(data.images))
            .catch(err => console.log(err))

    }


    return (


        <Container>

            {
                (images.length === 0) &&
                <Row>
                    <Col sm={7}>
                        <img className="houseImg" src="https://img.freepik.com/vector-gratis/casa-gris-paredes-ruinas_1308-73951.jpg?w=1480" alt="default" />
                    </Col>
                </Row>
            }

            {
                (images.length === 1) &&
                <Row>
                    <Col sm={7}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(images[0])}>Eliminar</Button>
                        <img className="houseImg" src={images[0]} alt="default" />
                    </Col>
                </Row>
            }

            {
                (images.length === 2) &&
                <Row>
                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(images[0])}>Eliminar</Button>
                        <img className="houseImg" src={images[0]} alt="default" />
                    </Col>

                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(images[1])}>Eliminar</Button>
                        <img className="houseImg" src={images[1]} alt="default" />
                    </Col>
                </Row>
            }

            {
                (images.length === 3) &&
                <Row>
                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(images[0])}>Eliminar</Button>
                        <img className="houseImg" src={images[0]} alt="default" />
                    </Col>

                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[1])}>Eliminar</Button>
                                <img className="houseImg" src={images[1]} alt="default" />
                            </Col>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[2])}>Eliminar</Button>
                                <img className="houseImg" src={images[2]} alt="default" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }

            {
                (images.length === 4) &&
                <Row>
                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(images[0])}>Eliminar</Button>
                        <img className="houseImg" src={images[0]} alt="default" />
                    </Col>

                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[1])}>Eliminar</Button>
                                <img className="houseImg" src={images[1]} alt="default" />
                            </Col>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[2])}>Eliminar</Button>
                                <img className="houseImg" src={images[2]} alt="default" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[3])}>Eliminar</Button>
                                <img className="houseImg" src={images[3]} alt="default" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }

            {
                (images.length === 5) &&
                <Row>
                    <Col sm={6}>
                        <Button className={showBtn} onClick={() => handleDeleteBtn(images[0])}>Eliminar</Button>
                        <img className="houseImg" src={images[0]} alt="default" />
                    </Col>

                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[1])}>Eliminar</Button>
                                <img className="houseImg" src={images[1]} alt="default" />
                            </Col>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[2])}>Eliminar</Button>
                                <img className="houseImg" src={images[2]} alt="default" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[3])}>Eliminar</Button>
                                <img className="houseImg" src={images[3]} alt="default" />
                            </Col>
                            <Col sm={6}>
                                <Button className={showBtn} onClick={() => handleDeleteBtn(images[4])}>Eliminar</Button>
                                <img className="houseImg" src={images[4]} alt="default" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }
            {isMine && <Button onClick={handleEditBtn}>Editar imágenes</Button>}
        </Container >
    )
}

export default HouseImages