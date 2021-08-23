import React from 'react'
import { Form, Button } from 'react-bootstrap';
import '../../style/styleRegister.css'
import { useForm } from '../../hooks/useForm';
import { registerEmailPasswordName } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Register = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        pass1: '',
        pass2: ''
    })

    const { name, email, pass1, pass2 } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, pass1, pass2);
        dispatch(registerEmailPasswordName(email, pass1, name))
    }

    return (
        <div className="py-5 container text-center w-50">
            <Form onSubmit={handleRegister} className="d-flex flex-column m-0">
                <h1 className="h3 mb-3 font-weight-normal">
                    ¡Registrate en nuestro sistema!
                </h1>
                <Form.Control
                    className="mb-1"
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
                <Form.Control
                    className="mb-1"
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <Form.Control
                    className="mb-1"
                    type="password"
                    placeholder="Password"
                    name="pass1"
                    value={pass1}
                    onChange={handleInputChange}
                />
                <Form.Control
                    className="mb-1"
                    type="password"
                    placeholder="Password"
                    name="pass2"
                    value={pass2}
                    onChange={handleInputChange}
                />

                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/auth/login">Registrate</Link>

            </Form>

        </div>
    )
}

export default Register
