import React from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* <NavLink  className="navbar-brand fst-italic fw-medium" to="/">{props.title}</NavLink> */}
                    <a  className="navbar-brand fst-italic fw-medium" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
                            <li className="nav-item">
                                {/* <NavLink  exact className="nav-link fw-medium" aria-current="page" to="/">Home</NavLink> */}
                                <a  exact className="nav-link fw-medium" aria-current="page" href="/about">About</a>
                                
                            </li>
                            {/* <li className="nav-item"> */}
                                {/* <NavLink  exact className="nav-link fw-medium" to="/aboutUs">{props.about}</NavLink> */}
                                {/* <a  exact className="nav-link fw-medium" href="/aboutUs">{props.about}</a> */}
                            {/* </li> */}
                        </ul>


                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}> 
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string,
// };

// Navbar.defaultProps = {
//     title: 'Set title here',
//     about: 'About text here'
// };