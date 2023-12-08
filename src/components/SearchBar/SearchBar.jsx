import { useState } from "react"
import rentalServices from "../../services/rental.services"
import './SearchBar.css'
import pointer from './../../assets/pointer.png'



const SearchBar = ({ rentalsFiltered, loadRentals }) => {


    const [searchValue, setSearchValue] = useState("")
    // const [value, setValue] = useState([])

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
                        rentalsFiltered(response.data)
                    } else {
                        console.log("there is no rental in the searched city at the moment")
                    }
                })
                .catch(err => console.log(err))
        }

    }







    return (
        <div className="search-bar">
            <img src={pointer} alt="" style={{ with: '20px', height: '20px', paddingLeft: '10px' }} />
            <input type="text" placeholder="Search rentals by City" value={searchValue} name="city" onChange={handleInputChange} />
        </div>

    )
}








export default SearchBar