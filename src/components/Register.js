import React from 'react'
import { Form, Button} from 'react-bootstrap';
import '../style/styleRegister.css'
import { useForm } from '../hooks/useForm';
import { registerEmailPasswordName } from '../actions/actions';
import { useDispatch } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm({
        name: '',
        email: '',
        pass1: '',
        pass2: ''
    })

    const {name, email, pass1, pass2} = values;

    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(name, email, pass1, pass2);
        dispatch(registerEmailPasswordName(email, pass1, name))
    }

    return (
        <div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrarse
                </Button>


            </Form>

        </div>
    )
}

export default Register
