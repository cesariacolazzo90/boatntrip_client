import { Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

// import { useState } from "react"

// import uploadServices from './../../services/upload.services'
// import rentalServices from './../../services/rental.services'
// import { useNavigate } from "react-router-dom"
// import FormError from "../FormError/FormError"
const Homepage = () => {


    return (
        <Container>
            <div>
                <h1>Hello sailover! Would you like to join one of our community memebr and join them in a new trip? Start your trip now.....</h1>
                <Link to="/placeabooking" className="colorButton"> Make a request now!</Link>

            </div>
        </Container>
    )

}




// "btn btn-dark p-2

export default Homepage