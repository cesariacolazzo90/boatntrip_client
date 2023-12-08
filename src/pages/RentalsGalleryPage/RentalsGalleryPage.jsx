import { Button, Container, Modal } from 'react-bootstrap'
import RentalsList from '../../components/RentalsList/RentalsList'
import { useContext, useEffect, useState } from 'react'
import rentalServices from '../../services/rental.services'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchBar2 from '../../components/SearchBar2/SearchBar2'
const RentalsGalleryPage = () => {

    const [rentals, setRentals] = useState()
    const [refreshedRentals, setRefreshedRentals] = useState(rentals)







    useEffect(() => {
        loadRentals()
    }, [])

    const loadRentals = () => {
        rentalServices
            .getRentals()
            .then(({ data }) => {
                setRentals(data)
            })
            .catch(err => console.log(err))
    }





    const [searchValue, setSearchValue] = useState([])
    const [value, setValue] = useState([])


    const handleInputChange = (event) => {
        const { value } = event.target
        setSearchValue(value)




        const searchQuery = value
        console.log(searchQuery)

        if (searchQuery.trim() === "") {
            loadRentals()

        } else {
            rentalServices
                .searchByCity(searchQuery)
                .then(response => {
                    if (response && response.data) {
                        handleFilteredRentals(response.data)
                        setValue(response.data)
                        console.log("---------------------RESPONSE DE SEACH BAR", response.data)

                    }
                })
                .catch(err => console.log(err))
        }



    }

    const rentalsFiltered = (filter) => {
        setRentals(filter)
    }

    const rentalsFiltered2 = (filter2) => {
        setRentals(filter2)
    }








    return (
        <div>
            <Container>
                <h1>Explore  the latest boat rentals</h1>
                <SearchBar rentalsFiltered={rentalsFiltered} loadRentals={loadRentals} />
                <SearchBar2 rentalsFiltered2={rentalsFiltered2} loadRentals={loadRentals} />
                <Link to={'/newrental'} className='btn'>Rent now a boat </Link>
                <RentalsList rentals={rentals} />
            </Container>
        </div >
    )

}





export default RentalsGalleryPage
