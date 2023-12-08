import { Row } from 'react-bootstrap'
import UserCard from '../UserCard/UserCard'

const UsersList = ({ users }) => {

    return (
        !users ?
            <h1> Wait please</h1>
            :
            <>
                <Row>
                    {
                        users.map(elm => <UserCard {...elm} key={elm._id} />)
                    }
                </Row>
            </>
    )

}

export default UsersList