import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../Contexts/NotesContextProvider';

const UpdateProfile = () => {
  const { host, user, getUser } = useContext(NotesContext);
  const Navigate = useNavigate();
  const onSubmit = async (e) => {

    e.preventDefault();


    const name = e.target.name.value;
    const email = e.target.email.value;

    await fetch(`${host}/api/auth/updateprofile`, {
      method: "PUT",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('auth-token')
      }
    })

    Navigate('/profile');

  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='container my-5'>
      <h3 className='text-center mx-3 my-3 text-primary' ><u>Update Profile</u></h3>
      
      <form onSubmit={onSubmit} >
        
        <div className="form-group my-4">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" required defaultValue={user.name} />
        </div>
        
        <div className="form-group my-4">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required defaultValue={user.email} />
        </div>

        <button type="submit" className="btn btn-primary my-3">Update Profile</button>
      </form>


    </div>
  )
}

export default UpdateProfile