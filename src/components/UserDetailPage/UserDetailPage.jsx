import { useContext, useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, ButtonGroup, Card } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import authService from "../../services/auth.services"
import userService from "../../services/user.services"
import rentalServices from "../../services/rental.services"


const UserDetailsPage = () => {
    const { loggedUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const { user_id } = useParams()

    const [user, setUser] = useState({})
    const [rentals, setRentals] = useState([])




    useEffect(() => {
        loadUserDetails()
        loadUserRentals()
    }, [])

    const loadUserDetails = () => {
        console.log("soy el ID", user_id)
        userService
            .getUserDetails(user_id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }

    const loadUserRentals = () => {
        rentalServices.getRentalByOwner(user_id)
            .then(({ data }) => {
                console.log("estoy aqui", data)
                setRentals(data)
            }
            )
            .catch(err => console.log(err))
    }


    const deleteUserSubmit = e => {
        e.preventDefault()

        userService
            .deleteUser(user_id)
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
                        <Card className="tarjeta">
                            {/* <Card.Img variant="top" src="" /> */}
                            <Card.Body>
                                <Card.Title>Name:{user.name}</Card.Title>
                                <Card.Body>Email:{user.email}</Card.Body>
                                <Card.Body>Role:{user.role}</Card.Body>
                                <Card>
                                    <Card.Img variant="top" src={user.imageUrl} alt="Profile Picture" />
                                    <Card.Body>
                                        <p>Trips to attend: {rentals.map((elm, index) => (


                                            <ul >
                                                <li>
                                                    {elm.title}
                                                </li>
                                            </ul>

                                        )
                                        )}</p>
                                    </Card.Body>
                                </Card>


                                <div className="d-grid">

                                    <Link to="/gallery" className="btn btn-dark">Go back to gallery</Link>
                                    {loggedUser._id === user._id &&
                                        <Link to={`/edit_user/${user_id}`} p-class className="colorButton"> Modify user profile</Link>}
                                    <ButtonGroup>
                                        {loggedUser._id === user._id &&
                                            <Button variant="danger" size="lg" className="ms-2" onClick={deleteUserSubmit}>Delete</Button>}
                                    </ButtonGroup>

                                </div>
                            </Card.Body>
                        </Card>
                    </article>
                </Col>











            </Row >

        </Container >
    )
}

export default UserDetailsPage