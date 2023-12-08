import { Container } from 'react-bootstrap'
import NewRentalForm from '../../components/NewRentalForm/NewRentalForm'

const NewRentalPage = () => {

    return (
        <div className="NewRentalPage">
            <Container>
                <h1>New rental </h1>
                <hr></hr>
                <NewRentalForm />
            </Container>
        </div>
    )
}

export default NewRentalPage
