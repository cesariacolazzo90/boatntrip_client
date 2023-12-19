import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import uploadServices from './../../services/upload.services'
import rentalServices from './../../services/rental.services'
import { useNavigate } from "react-router-dom"

const NewRentalForm = () => {
    const navigate = useNavigate()
    const [loadingImage, setLoadingImage] = useState(false)

    const [rentalData, setRentalData] = useState({
        title: '',
        date: '',
        city: '',
        description: '',
        imageUrl: 'https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg',
        price: '',
        boatType: "",
        role: ''


    })



    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setRentalData({ ...rentalData, [name]: value })
    }

    const handleRentalSubmit = e => {

        e.preventDefault()

        rentalServices
            .saveRental(rentalData)
            .then(() => {
                navigate('/gallery')
            })

        
    }




    const handleFileUpload = e => {

        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)

            .then(res => {
                setRentalData({ ...rentalData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }



    return (
        <div className="NewForm">
            <Form onSubmit={handleRentalSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={rentalData.title} name="title" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={rentalData.date} name="date" onChange={handleInputChange} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={rentalData.city} name="city" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={rentalData.description} name="description" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price per day </Form.Label>
                            <Form.Control type="text" value={rentalData.price} name="price" onChange={handleInputChange} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="boatType">
                            <Form.Label> Type of boat you offer </Form.Label>
                            <Form.Control type="text" value={rentalData.boatType} name="boatType" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Insert here the picture of your boat</Form.Label>
                            <Form.Control type="file" name="imageUrl" id="fileInput" onChange={handleFileUpload} />

                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid">
                    <Button variant="dark" type="submit" style={{ backgroundColor: '#66cdaa' }} > Place you rental now</Button>
                </div>
            </Form>
        </div>
    )
}





export default NewRentalForm






