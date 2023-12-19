import { useContext, useEffect, useState } from "react"
import rentalServices from "../../services/rental.services"
import { useParams, Link, useNavigate } from "react-router-dom"
import {  Row, Col, Button,  Form } from "react-bootstrap"
import uploadServices from './../../services/upload.services'



const EditRentalDetail = () => {

    const { rental_id } = useParams();
    const [loadingImage, setLoadingImage] = useState(false)
    const navigate = useNavigate()
    const [rental, setRental] = useState({
        title: '',
        city: '',
        description: '',
        imageUrl: '',
        date: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setRental({ ...rental, [name]: value })
    }

    useEffect(() => {
        loadRentalDetails();
    }, []);

    const loadRentalDetails = () => {
        rentalServices
            .getRentalDetails(rental_id)
            .then(({ data }) => {
                setRental(data)
            })
            .catch(err => console.log(err));
    };




    const handleFormSubmit = e => {
        e.preventDefault()
        rentalServices
            .editRental(rental_id, rental)
            .then(() => {
                navigate("/gallery")
                console.log(rental)

            })
            .catch(err => console.log(err))


    }


    const handleFileUpload = e => {

        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)

            .then(res => {
                setRental({ ...rental, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }




    return (



        <div className="EditForm">
            <Form onSubmit={handleFormSubmit} >
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={rental.title} name="title" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={rental.date} name="date" onChange={handleInputChange} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={rental.city} name="city" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={rental.description} name="description" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Change the picture of your boat</Form.Label>
                            <Form.Control type="file" name="imageUrl" id="fileInput" onChange={handleFileUpload} />

                        </Form.Group>
                    </Col>
                </Row>
              
                <div className="d-grid">
                    <Button variant="dark" type="submit" style={{ backgroundColor: '#66cdaa' }} > Modify the trip</Button>
                </div>
            </Form>
        </div>
    )
}






export default EditRentalDetail