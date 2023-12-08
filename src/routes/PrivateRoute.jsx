import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context";



const PrivateRoute = () => {
    const { loggedUser } = useContext(AuthContext)
    if (!loggedUser) {
        return <Navigate to="/login"></Navigate>

    }


    return <Outlet />
}

export default PrivateRoute