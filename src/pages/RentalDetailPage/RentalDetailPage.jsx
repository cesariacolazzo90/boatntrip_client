import { useContext, useEffect, useState } from "react"
import rentalServices from "../../services/rental.services"
import { useParams, Link } from "react-router-dom"
import { Container, Row, Col, Button, ButtonGroup, Card, CardBody } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"


import { useNavigate } from "react-router-dom"



const RentalDetailsPage = () => {

    
    const navigate = useNavigate()
    const { loggedUser } = useContext(AuthContext)

    const { rental_id } = useParams()
    const [successMessage, setSuccessMessage] = useState('')
    const [unsuccessMessage, setUnSuccessMessage] = useState('')


    const [rental, setRental] = useState({
        owner: ''

    })


    
    useEffect(() => {
        loadRentalDetails()
    }, [])

    const loadRentalDetails = () => {
        rentalServices
            .getRentalDetails(rental_id)
            .then(({ data }) => setRental(data))
            .catch(err => console.log(err))
    }



    const deleteRentalSubmit = e => {
        e.preventDefault()

        rentalServices
            .deleteRental(rental_id)
            .then(() => {
                navigate('/gallery')
            })
            .catch(err => console.log(err))
    }





    const handleJoinSubmit = () => {
        console.log(rental_id)



        rentalServices
            .joinRental(rental_id)
            .then(() => {

               
                loadRentalDetails()
                setSuccessMessage('Congratulations! You successfully joined the trip!')
            })


            .catch(err => console.log(err))
    }



    const handleNOJoinSubmit = () => {
        console.log(rental_id)



        rentalServices
            .unjoinRental(rental_id)
            .then(() => {

                
                loadRentalDetails()
                setUnSuccessMessage('We are sorry to know you decided to leave the trip.  We hope to see you soon!!')
            })

    }

    return (
        <Container>


            <Col lg={{ span: 3 }} md={{ span: 6 }}>
                <article className='mb-3'>
                    <Card>
                        
                        <Card.Img variant="top" src={rental.imageUrl} alt="image" />
                        <Card.Body>
                            <Card.Title>{rental.title}</Card.Title>
                            <Card.Text>Harbor's city : {rental.city}</Card.Text>
                            <Card.Text> Trip required /organized by : {rental.dueno}</Card.Text>
                            
                            <Card.Body>
                                <div className="d-grid">

                                    <Link to="/gallery" className="btn btn-dark">Go back to gallery</Link>
                                    {loggedUser._id === rental.owner &&
                                                
                                    <Link to={`/edit/${rental_id}`} className="btn btn-dark btn-sm">Modify the trip
                                       
                                        
                                    </Link>}
                                    {loggedUser._id === rental.owner &&


                                        <Button variant="danger" size="lg" className="ms-2" onClick={deleteRentalSubmit}>Eliminate</Button>}
                                    <Button onClick={handleJoinSubmit}>Join the trip </Button>
                                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                    <Button onClick={handleNOJoinSubmit}> Abandon  the trip </Button>
                                    {unsuccessMessage && <div className="alert alert-success">{unsuccessMessage}</div>}




                                </div>


                            </Card.Body >
                        </Card.Body>
                    </Card>
                </article >
            </Col >









        </Container >





    )
}



export default RentalDetailsPage