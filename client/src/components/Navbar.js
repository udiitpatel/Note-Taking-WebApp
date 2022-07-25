import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { NotesContext } from '../Contexts/NotesContextProvider';
const Navbar = () => {
    
    const Navigate = useNavigate();
    const { logOut } = useContext(NotesContext);
    let login = false;
    if (localStorage.getItem('auth-token')) login = true;

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark text-dark">
                
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className={`nav-link text-light`} aria-current="page" to="/home" >Home</Link>
                            <Link className={`nav-link text-light`} aria-current="page" to="/about">About</Link>
                        </div>
                    </div>
                    
                    <form className="form-inline my-2 my-lg-0">
                        {!login && <button className="btn btn-outline-light my-2 my-sm-0 mx-3" onClick={(e) => { e.preventDefault(); Navigate('/login') }}>Login</button>}
                        {!login && <button className="btn btn-outline-light my-2 my-sm-0 mx-3" onClick={(e) => { e.preventDefault(); Navigate('/signup') }}>Sign Up</button>}
                        {login && <button className="btn btn-outline-light my-2 mx-sm-0 mx-3" onClick={(e) => { e.preventDefault(); Navigate('/profile') }}>Profile</button>}
                        {login && <button className="btn btn-outline-light my-2 my-sm-0 mx-3" onClick={(e) => { e.preventDefault(); logOut(); Navigate('/login') }} >Log Out</button>}
                    </form>
                
                </div>
            </nav>
        </div>
    )
}

export default Navbar