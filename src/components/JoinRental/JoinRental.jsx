import { useContext, useState } from "react"
import eventServices from "../../services/event.services"
import { Button } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import rentalServices from "../../services/rental.services"

const joinRental = ({ refreshRentals }) => {

    const { loggedUser } = useContext(AuthContext)

    const [joinRental, setJoinRental] = useState({
        participants: [],


    })

    const handleJoinSubmit = (_id) => {
        rentalServices
            .joinRental(_id)
            .then(({ data }) => {
                setJoinRental(data),
                
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                rentals.map(elm => {
                    <h1>{elm._id}</h1>
                })
            }
        </>
    )
}

export default joinRental