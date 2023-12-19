import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewRentalPage from '../pages/NewRentalPage/NewRentalPage'
import RentalsGalleryPage from '../pages/RentalsGalleryPage/RentalsGalleryPage'
import RentalDetailPage from '../pages/RentalDetailPage/RentalDetailPage'
import UserGalleryPage from '../pages/UserGalleryPage/UsersGallerypage'
import UserDetailPage from '../components/UserDetailPage/UserDetailPage'
import EditRentalDetail from '../pages/EditRentalDetail/EditRentalDetail'
import Homepage from '../components/Homepage/homepage'
import PrivateRoute from './PrivateRoute'
import EditUserDetail from '../pages/EditUserDetailPage/EditUserDetailsPage'
import PersonalProfile from '../pages/PersonalProfilePage'
import PlaceBooking from '../pages/PlaceBookingOffer/PlaceBookingOffer'




const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Homepage />} />
            <Route path={'/gallery'} element={<RentalsGalleryPage />} />

            <Route path={'/edit/:rental_id'} element={<EditRentalDetail />} />
            <Route path={'*'} element={<h1>Error!!</h1>} />
            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/allusers'} element={<UserGalleryPage />} />
            <Route element={<PrivateRoute />}>
                <Route path={'/newrental'} element={<NewRentalPage />} />
                <Route path={'/placeabooking'} element={<PlaceBooking />} />


                <Route path={'/profile'} element={<PersonalProfile />} />
              <Route path={'/user/:user_id'} element={<UserDetailPage />} />
                <Route path={'/edit_user/:user_id'} element={<EditUserDetail />} />
                <Route path={'/details/:rental_id'} element={<RentalDetailPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
