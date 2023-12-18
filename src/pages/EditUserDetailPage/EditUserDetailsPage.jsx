import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import userService from "../../services/user.services"
import uploadServices from "../../services/upload.services"
import { Col, Row,Form, Button } from "react-bootstrap"




const EditUserDetail = () => {
    const { user_id } = useParams();
    const [loadingImage, setLoadingImage] = useState(false)
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        email: '',
        imageUrl: '',
        city: ''
    });

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = () => {
        userService
            .getUserDetails(user_id)
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
        e.preventDefault()
        console.log("USER YA EDITADO", user)
        userService
            .editUser(user_id, user)
            .then(() => {
                navigate(`/allusers`)
                console.log("SE HA EDITADOOOOO!!")
            })
            .catch(err => console.log(err))
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




        <div className="EditForm">
            <Form onSubmit={handleFormSubmit} >
                <Form.Group className="mb-3" controlId="name">
                    <h2>Edit your information</h2>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={user.name} name="name" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={user.email} name="email" onChange={handleInputChange} />
                </Form.Group>

                <Row>
                    
                        

                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Change your profile picture</Form.Label>
                            <Form.Control type="file" name="imageUrl" id="fileInput" onChange={handleFileUpload} />

                        </Form.Group>
                    </Col>
                </Row>
               
                <div className="d-grid">
                    <Button variant="dark" type="submit" style={{ backgroundColor: '#66cdaa' }} > Modify your information</Button>
                </div>
            {/* </Form> */}
        {/* </div>
        <> */}
            {/* <h2>Edit here your profile</h2>
            <div className="Edit Form" >
                <Form onSubmit={handleFormSubmit}>
                    Name: <input type="text" value={user.name} onChange={handleInputChange} name="name" />
                    <br /><br />

                    email: <input type="text" value={user.email} onChange={handleInputChange} name="email" />
                    <br /><br />
                    Profile Image: <input type="file" onChange={handleFileUpload} name="imageUrl" />
                    <br /><br />
                    <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Change your picture </Form.Label>
                            <Form.Control type="file" name="imageUrl" id="fileInput" onChange={handleFileUpload} />

                        </Form.Group>
                    City : <input type="text" value={user.city} onChange={handleInputChange} name="city" />
                    <br /><br />
                   





                    <input type="submit" value="Save" /> */}
                </Form>
            </div>
        
    )
}

export default EditUserDetail