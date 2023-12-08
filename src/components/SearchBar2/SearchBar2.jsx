
import { useState } from "react"
import rentalServices from "../../services/rental.services"
import pointer from './../../assets/pointer.png'



const SearchBar2 = ({ rentalsFiltered2, loadRentals }) => {


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
                .searchByBoat(searchQuery)
                .then(response => {
                    if (response && response.data) {
                        rentalsFiltered2(response.data)
                    } else {
                        console.log("there is no rental at the moment")
                    }
                })
                .catch(err => console.log(err))
        }

    }







    return (
        <div className="search-bar">
            <img src={pointer} alt="" style={{ with: '20px', height: '20px', paddingLeft: '10px' }} />
            <input type="text" placeholder="Search rentals by Boat" value={searchValue} name="boatType" onChange={handleInputChange} />
        </div>

    )
}








export default SearchBar2





