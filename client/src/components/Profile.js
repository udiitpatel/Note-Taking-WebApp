import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../Contexts/NotesContextProvider'
import DeleteAccountModal from './Modals/DeleteAccountModal';

const Profile = () => {

  const { user, getUser } = useContext(NotesContext);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('auth-token')) Navigate('/login');
    getUser();
  }, [])

  return (
    <div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2 mx-2 mt-2" type="button" onClick={() => Navigate('/updateprofile')}>Update Profile</button>
        <DeleteAccountModal id={user.id} />
      </div>
      {user.name && <h4 className='mx-3 my-3'>Name : {user.name}</h4>}
      {user.email && <h4 className='mx-3 my-3'>Email : {user.email}</h4>}
    </div>
  )
}

export default Profile