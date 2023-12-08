import { useContext, useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Container, Row, Col, Button, ButtonGroup, Card } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
// import authService from "../services/user.services"

// import rentalServices from "../services/rental.services"
// import uploadServices from "../services/upload.services"
import uploadServices from "../../services/upload.services"
import userService from "../../services/user.services"

const EditPersonalProfile = () => {

    const [loadingImage, setLoadingImage] = useState(false)
    const navigate = useNavigate()


    const [user, setUser] = useState({});

    console.log(", user que viene de ddbb", user)

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = () => {
        userService
            .getMyUser()
            .then(({ data }) => {
                setUser(data)
            })
            .catch(err => console.log(err));
    };

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setUser({ ...user, [name]: value })

    }

    const handleFormSubmit = e => {
        // e.preventDefault()
        // console.log("USER YA EDITADO", user)
        // userService
        //     .editMyUser(loggedUser._id, user)
        //     .then(() => {
        //         navigate(`/profile`)
        //         console.log("SE HA EDITADOOOOO!!")
        //     })
        //     .catch(err => console.log(err))
    }


    const handleFileUpload = e => {

        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setUser({ ...user, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }



    return (
        <>
            <h2>EDITA TU PERFIL</h2>
            <div className="Edit Form">
                <form onSubmit={handleFormSubmit}>
                    Name: <input type="text" value={user.name} onChange={handleInputChange} name="name" />
                    <br /><br />

                    email: <input type="text" value={user.email} onChange={handleInputChange} name="email" />
                    <br /><br />
                    Profile Image: <input type="file" onChange={handleFileUpload} name="imageUrl" />
                    <br /><br />
                    {/* Bank Account: <input type="text" value={loggedUser.bankAccount} onChange={handleInputChange} name="email" />
                    <br /><br /> */}
                    {/* Bank Account : <input type="text" value={user.bankAccount} onChange={handleInputChange} name="bankAccount" />
                    <br /><br /> */}

                    <input type="submit" value="Save" />
                </form>
            </div>
        </>
    )

}










export default EditPersonalProfile