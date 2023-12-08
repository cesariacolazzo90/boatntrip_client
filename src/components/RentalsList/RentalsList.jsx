import { Row } from 'react-bootstrap'
import RentalCard from '../RentalCard/RentalCard'

const RentalsList = ({ rentals }) => {

    return (
        !rentals ?
            <h1> Wait please</h1>
            :
            <>
                <Row>
                    {
                        rentals.map(elm => <RentalCard {...elm} key={elm._id} />)
                    }
                </Row>
            </>
    )

}

export default RentalsList