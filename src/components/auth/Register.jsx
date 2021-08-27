import React from 'react'
import { Form, Button } from 'react-bootstrap';
import '../../style/styleRegister.css'
import { useForm } from '../../hooks/useForm';
import { registerEmailPasswordName } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import validator from 'validator'
import { removeError, setError } from '../../actions/uiErrors';


const Register = () => {
    const history = useHistory();
    const { msjError } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        pass1: '',
        pass2: ''
    })

    const { name, email, pass1, pass2 } = values;

    const formValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("Nombre requerido"));
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email requerido"));
            return false
        } else if (pass1 !== pass2 || pass1 < 5) {
            dispatch(setError("La contraseña es invalida"));
            return false
        }

        dispatch(removeError(''))
        return true
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (formValid()) {
            dispatch(registerEmailPasswordName(email, pass1, name))

            reset();

            setTimeout(() => {
                history.push("/auth/login");
            }, 2500);

        }
    }

    return (
        <div className="py-5 container text-center w-50">
            {
                msjError &&
                (
                    <div className="alert alert-danger">
                        {msjError}
                    </div>
                )
            }
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
