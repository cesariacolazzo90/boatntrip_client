import { useState } from "react"
import userServices from "../../services/user.services"




const UserSearchBar = ({ usersFiltered, loadUsers }) => {


    const [searchValue, setSearchValue] = useState("")
    

    const handleInputChange = (event) => {
        const { value } = event.target
        setSearchValue(value)

        const searchQuery = value
        console.log(searchQuery)

        if (searchQuery.trim() === "") {
            loadUsers()

        } else {
            userServices
                .searchByCity(searchQuery)
                .then(response => {
                    if (response && response.data) {
                        usersFiltered(response.data)
                    } else {
                        console.log()
                    }
                })
                .catch(err => console.log(err))
        }

    }







    return (
        <div className="search-bar">
            
            <input type="text" placeholder="Search users by City" value={searchValue} name="city" onChange={handleInputChange} />
        </div>

    )
}


export default UserSearchBar