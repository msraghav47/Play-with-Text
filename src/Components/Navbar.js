import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props)
{
    return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" >{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.about}</Link>
          </li>
          </ul>
          <div class={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
          </div> 
        </div>
      </div>
    </nav>
  )
};
Navbar.propTypes = {
    title : propTypes.string.isRequired,
    about : propTypes.string.isRequired
};