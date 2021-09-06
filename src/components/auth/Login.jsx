import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../../style/styleLogin.css';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogle } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import { loginEmailPassword } from '../../actions/authActions';

const Login = () => {

  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.ui)

  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password))

    reset();
  }

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());

    reset();
  }
  return (
    <div className="superLogin">
      <div className="login-div">
        <Form onSubmit={handleLogin} className="form-login">
          <h1 className="h4 mb-3 font-weight-normal">
            Inicio de sesión
          </h1>
          <Form.Control
            className="mb-1"
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleInputChange} />

          <Form.Control
            className="mb-1"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange} />
          <Button variant="primary" type="submit" disabled={loading}>
            Enviar
          </Button>


        </Form>

        <div className="auth">
          <Button
            variant="primary" className="google-btn"
            onClick={handleLoginGoogle}>
            <div className="google-icon-wrapper d-flex align-items-center justify-content-center">
              <img className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button" />

              <p className="btn-text m-1">
                <b>Sign in with google</b>
              </p>
            </div>
          </Button>

          <Button
            variant="primary" className="google-btn"
            onClick={handleLoginGoogle}>
            <div className="google-icon-wrapper d-flex align-items-center justify-content-center">
              <img className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png"
                alt="google button"
                width="30px" />

              <p className="btn-text m-1">
                <b>Sign in with Facebook</b>
              </p>
            </div>
          </Button>
        </div>

        <Link className="redirect" to="/auth/register">Registrate</Link>
      </div>
    </div>
  )
}

export default Login
