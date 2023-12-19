import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from "react-router-dom"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/login'))
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Write here your name </Form.Label>
                <Form.Control type="text" value={signupData.name} onChange={handleInputChange} name="name" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Choose your password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>


           


            <div className="d-grid">

                <Button style={{ backgroundColor: '#66cdaa' }} variant="success" type='submit' >Sign me in ! </Button>

            </div>

        </Form >
    )
}

export default SignupForm
