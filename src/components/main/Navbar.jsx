import React from 'react'
import '../../style/styleNavbar.css'
import image from '../../assets/svg/logo-blockBuster.svg'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/authActions'

const Navbar = () => {
    const dispatch = useDispatch()
    const {name} = useSelector(state => state.auth)
    return (
        <header id="navbar">
            <nav id="nav">
                <div className="navbar-enlace">
                    <button className="toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                    <img src={image} alt="logo" />
                    <ul id="nav-ul">
                        <li><a className="link" href="#welcome-section">Todas</a></li>
                        <li><a className="link" href="#projects">Más valoradas</a></li>
                        <li><a className="link" href="#section-contact">Menos valoradas</a></li>
                    </ul>
                </div>
                <div>
                    <form action="" className="search m-0 d-flex">
                        <input type="text" className=""/>
                        <button className=""><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="d-flex align-items-center">
                    <p id="enlace-descargar">{name}</p>
                    <div  onClick={()=>{ dispatch(startLogout()) }} id="sign-out"><i className="fas fa-sign-out-alt"></i></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
