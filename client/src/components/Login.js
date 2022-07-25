import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { NotesContext } from '../Contexts/NotesContextProvider';

const Login = () => {
  
  const { host } = useContext(NotesContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {

    const emailText = document.querySelector('#emailHelp');
    const passwordText = document.querySelector('#passwordHelp');

    e.preventDefault();

    emailText.innerText = "";
    passwordText.innerText = "";

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    const data = await res.json();

    if (data.error && data.error.email) emailText.innerText = data.error.email;
    if (data.error && data.error.password) passwordText.innerText = data.error.password;

    if (data.ok) { localStorage.setItem('auth-token', data.authToken); navigate('/home'); };
  }

  return (
    <div className='container my-5'>
      <h2 className='text-center mx-3 my-3 text-info'>Please Login to continue</h2>
     

      <form onSubmit={onSubmit} >
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Password" autoComplete="on" required />
          <small id="passwordHelp" className="form-text text-muted"></small>
        </div>

        <button type="submit" className="btn btn-primary my-3">Login</button>
        <h3 className='text-center mx-3 my-3 text-success'><Link to='/signup'>Sign Up</Link> to create new account</h3>
      </form>

    </div>
  )
}

export default Login