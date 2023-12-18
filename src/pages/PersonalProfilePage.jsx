import { useContext, useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, ButtonGroup, Card } from "react-bootstrap"
import { AuthContext } from "../context/auth.context"
import authService from "../services/user.services"
import userService from "../services/user.services"
// import rentalServices from "../services/rental.services"
// import uploadServices from "../services/upload.services"


const PersonalProfile = () => {
    const { loggedUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [rentals, setRentals] = useState([])
    const [unsuccessMessage, setUnSuccessMessage] = useState()



    useEffect(() => {
        loadUserDetails()
        // loadUserRentals()
    }, [])

    const loadUserDetails = () => {
        userService
            .getMyUser(loggedUser._id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }

    // const loadUserRentals = () => {
    //     rentalServices
    //         .getRentalByOwner(loggedUser._id)
    //         .then(({ data }) => {
    //             console.log("estoy aqui", data)
    //             setRentals(data)
    //         }
    //         )
    //         .catch(err => console.log(err))
    // }


    const EditUserSubmit = e => {
        e.preventDefault()
        console.log("USER YA EDITADO", user)
        userService
            .editUser(loggedUser._id, user)
            .then(() => {
                // navigate(`allusers`)
                console.log("SE HA EDITADOOOOO!!")
            })
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



    // const handleNOJoinSubmit = () => {
    //     console.log(rental_id)


    //     rentalServices
    //         .unjoinRental(rental_id)
    //         .then(() => {

    //             // setRental(response.data)
    //             loadRentalDetails()
    //             setUnSuccessMessage('We are sorry to know you decided to leave the trip.  We hope to see you soon!!')
    //         })



    return (
        <Container>


            <Row>

                <Col lg={{ span: 12, offset: 1 }} md={{ span: 12, offset: 1 }}>
                    <article className='mb-3'>
                        <Card className="uP">
                            {/* <Card.Img variant="top" src="" /> */}
                            <Card.Body>
                                <Card.Title>Hello, {loggedUser.name}</Card.Title>
                                <h2>These are your personal data </h2>
                                <Card.Body>Email:<br /> {loggedUser.email}</Card.Body>
                                <Card.Body> Profile Pic :<br />{loggedUser.imageUrl}</Card.Body>
                                <Card.Body> Bank Account :<br />{loggedUser.bankAccount}</Card.Body>
                                <Col md={{ span: 2 }}>
                                    {/* <img src={loggedUser.imageUrl} alt="photo"
                                        style={{
                                            width: '200px',
                                            height: 'auto',
                                            borderColor: '#332623',
                                            borderStyle: 'solid',
                                            borderWidth: '3px',
                                            marginLeft: '-13px'
                                        }} /> */}
                                </Col>
                                {/* <Card.Img> Personal picture <br />{loggedUser.imageUrl}</Card.Img> */}


                                <Card>
                                    {/* <Card.Img variant="top" src={user.imageUrl} alt="Profile Picture" />
                                    <Card.Body> */}
                                    <p>Trips to attend: {rentals.map((elm, index) => (


                                        <ul >
                                            <li>
                                                {elm.title}
                                            </li>
                                        </ul>

                                    )
                                    )}</p>



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






                <Container>
                    <Row>
                        <Col md={{ span: 2 }}>
                            {/* <img src={loggedUser.imageUrl} alt="photo"
                                style={{
                                    width: '200px',
                                    height: 'auto',
                                    borderColor: '#332623',
                                    borderStyle: 'solid',
                                    borderWidth: '3px',
                                    marginLeft: '-13px'
                                }} /> */}
                        </Col>
                        <Col>
                            <p>



                                {/* {profile.aboutUs} */}
                            </p>


                            <ul style={{ padding: '0' }}>
                                {/* {profile.children.map((elm, i) => (
                                    <li key={i} style={{ listStyleType: 'none', display: 'flex', alignItems: 'center' }}>
                                        <img src={loveheart} alt="loveheart icon" style={{ width: '35px', marginRight: '3px' }} />
                                        <p style={{ margin: '0' }}>{elm.gender} - {calculateAge(elm.birthday)} años </p>
                                    </li>
                                ))} */}
                            </ul>
                        </Col>
                    </Row>
                </Container >









            </Row >

        </Container >
    )
}





export default PersonalProfile


