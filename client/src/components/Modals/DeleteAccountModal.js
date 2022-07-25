import React, { useContext, useRef } from 'react'
import { NotesContext } from '../../Contexts/NotesContextProvider';
import { useNavigate } from 'react-router-dom'

const DeleteAccountModal = () => {
  const ref = useRef(null);
  const Navigate = useNavigate();
  const { host } = useContext(NotesContext);
  
  const onDelete = async (e) => {
    e.preventDefault();
    await fetch(`${host}/api/auth/deleteaccount`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('auth-token')
      }
    })
    localStorage.removeItem('auth-token');
    Navigate('/signup')
    ref.current.click();
  }

  return (
    <div >

      <button type="button" ref={ref} className="btn btn-danger me-md-2 mx-2 mt-2" style={{ width: "96%" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Delete Account
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">

          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Delete</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <p>You will loose all your data on deleting the account.</p>
              <p>Are you sure you want to delete your account?</p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={onDelete}>Yes</button>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default DeleteAccountModal