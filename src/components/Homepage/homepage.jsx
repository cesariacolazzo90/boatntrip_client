import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

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






export default Homepage