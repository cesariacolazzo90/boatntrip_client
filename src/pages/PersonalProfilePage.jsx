import { useContext, useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, ButtonGroup, Card } from "react-bootstrap"
import { AuthContext } from "../context/auth.context"
import userService from "../services/user.services"




const PersonalProfile = () => {
    const { loggedUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [rentals, setRentals] = useState([])
    


    useEffect(() => {
        loadUserDetails()
        
    }, [])

    const loadUserDetails = () => {
        userService
            .getMyUser(loggedUser._id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }

    


    const deleteUserSubmit = e => {
        e.preventDefault()
        userService
            .deleteUser(loggedUser._id)
            .then(() => {
                navigate('/allusers')
            })
            .catch(err => console.log(err))
    }



    



    return (
        <Container>


            <Row>

                <Col lg={{ span: 12, offset: 1 }} md={{ span: 12, offset: 1 }}>
                    <article className='mb-3'>
                        <Card className="uP">
                           
                            <Card.Body>
                                <Card.Title>Hello, {loggedUser.name}</Card.Title>
                                <h2>These are your personal data </h2>
                                <Card.Body>Email:<br /> {loggedUser.email}</Card.Body>
                                <Card.Body> Profile Pic :<br />{loggedUser.imageUrl}</Card.Body>
                                <Card.Body> Bank Account :<br />{loggedUser.bankAccount}</Card.Body>
                                <Col md={{ span: 2 }}>
                                    
                                </Col>
                                

                                <Card>
                                    
                                    



                                    <div className="d-grid">

                                        <Link to="/allusers" className="btn btn-dark my-2">Find travel peers!</Link>
                                        <Link to="/placeabooking" className="btn btn-dark my-2">Reserve the trip of your dreams now</Link>
                                        <Link to="/newrental" className="btn btn-dark my-2">Offer to host travellers now</Link>

                                        

                                            

                                        <ButtonGroup>

                                            <Button variant="dark" size="lg" className="ms-2 my-2" onClick={deleteUserSubmit}>Delete my profile</Button>
                                        </ButtonGroup>

                                    </div>
                                </Card>
                            </Card.Body>
                        </Card>
                    </article>
                </Col>






                








            </Row >

        </Container >
    )
}





export default PersonalProfile


