
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';
import logo from './../../assets/logo.png'

const Navigation = () => {
    const { loggedUser, logout } = useContext(AuthContext)
    // console.log(loggedUser)

    return (

        <Navbar style={{ backgroundColor: '#66cdaa', color: '#66cdaa', }} variant="success"  >

            < img src={logo} style={{ width: "100px", height: "100px" }} />
            <Nav className="me-auto">
                <Link to={"/"} className='nav-link' >Home</Link>

                <Link to={'/gallery'} className='nav-link'>All boat rentals </Link>
                <Link to={'/newrental'} className='nav-link'> Offer now a trip </Link>
                <Link to={'/profile'} className='nav-link'>my profile</Link>

                {
                    loggedUser
                        ?
                        <>
                            <span className='nav-link' onClick={logout}> Log out </span>
                            <Link to={'/allusers'} className='nav-link'>See all Users list </Link>
                        </>
                        :
                        <>
                            <Link to={'/signup'} className='nav-link'>Join now our community!</Link>
                            <Link to={'/login'} className='nav-link'>Start session</Link>

                        </>
                }



            </Nav>
            <Navbar.Text className='justify-content-end'>
                {loggedUser && <Navbar.Text>Hola, {loggedUser.name}</Navbar.Text>}
            </Navbar.Text>


        </Navbar >



    );
}








export default Navigation