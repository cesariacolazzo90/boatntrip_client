import { Card, Button, Col, Container } from "react-bootstrap"
import './RentalCard.css'
import { Link } from "react-router-dom"





const RentalCard = ({ _id, title, city, imageUrl, dueno, participants, date, boatType, price }) => {




    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear().toString();
        const month = (d.getMonth() + 101).toString().substring(1);
        const day = (d.getDate() + 100).toString().substring(1);
        return day + "-" + month + "-" + year;
    }


    return (
        <Container>
            <Col lg={{ span: 3 }} md={{ span: 6 }}>
                <article className='h-100 d-flex '>
                    <Card border="MediumAquamarine" style={{ width: '25rem' }} className=" h-100 d-flex  ">
                        <Card>
                            {console.log("Image URL:", imageUrl)}
                            <Card.Img variant="top" src={imageUrl} alt="image" />
                            <Card.Body className=" flex-column">
                                <Card.Header className="text-start"> {title}</Card.Header>
                                <Card.Text className="mb-2"> Location : {city}</Card.Text>
                                <Card.Text className="mb-2"> Date: {formatDate(date)}</Card.Text>
                                <Card.Text className="mb-2"> Organized by : {dueno}</Card.Text>
                                <Card.Text className="mb-2"> Boat: {boatType}</Card.Text>
                                <Card.Text className="mb-2"> Price per day: {price}</Card.Text>
                                <Card.Text className="mb-2"> <p> Who will join the trip?</p>
                                    {participants.map(participant => (
                                        <span key={participant._id}>
                                            <ul>
                                                <li> {participant.name}
                                                </li></ul></span>
                                    ))}
                                </Card.Text>

                                <div className="d-grid">
                                    <Link to={`/details/${_id}`} className="btn btn-dark btn-sm" classId="linktext"> I want to have more details</Link>
                                </div>
                                <div className="Counter">




                                </div>

                            </Card.Body>

                        </Card>
                    </Card>
                </article >
            </Col >
        </Container>
    )
}




export default RentalCard



