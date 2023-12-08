import { Card, Button, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './UserCard.css'



const UserCard = ({ _id, name, email, role, imageUrl, city }) => {

    console.log("user card", _id, name, email, role, imageUrl, city)


    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article className='mb-3'>
                <Card>
                    {/* <Card.Img variant="top" src="" /> */}
                    <Card.Body>
                        <Card.Title>Name:{name}</Card.Title>
                        <Card.Title>Email:{email}</Card.Title>
                        <Card.Title>Role:{role}</Card.Title>
                        <Card.Title> City:{city}</Card.Title>

                        <Card.Img variant="top" src={imageUrl} alt="image" />
                        <div className="d-grid">
                            <Link to={`/user/${_id}`} className="colorButton"> I want to have more information</Link>
                        </div>
                    </Card.Body>
                </Card>
            </article>
        </Col>
    )
}

export default UserCard