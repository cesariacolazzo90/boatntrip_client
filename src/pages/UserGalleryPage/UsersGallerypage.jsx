
import {  Container } from 'react-bootstrap'
import {  useEffect, useState } from 'react'
import userService from '../../services/user.services'
import UsersList from '../../components/UserList/Userlist'
import UserSearchBar from '../../components/UserSearchBar/UserSearchBar'

const UserGalleryPage = () => {

    const [users, setUsers] = useState()


    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        userService
            .getUsers()
            .then(({ data }) => {
                setUsers(data)
            })
            .catch(err => console.log(err))
    }




    const usersFiltered = (filter3) => {
        setUsers(filter3)
    }






    return (
        <div className="UsersGalleryPage">
            <Container>
                <h1>Explore our community
                </h1>
                {/* <Button className="colorButton" size='sm'> Rent a boat now</Button> */}
                <hr></hr>
                <UserSearchBar usersFiltered={usersFiltered} loadUsers={loadUsers} />
                <UsersList users={users} />
                 
            </Container>
        </div>
    )
}

export default UserGalleryPage


