import React, { useContext, useRef} from 'react'
import { NotesContext } from '../../Contexts/NotesContextProvider';
import { useNavigate } from 'react-router-dom'
const DeleteModal = ({ symbol, id, title }) => {
  const ref = useRef(null);
  const Navigate = useNavigate();
  const { deleteNote } = useContext(NotesContext);
  const onDelete = (e) => {
    e.preventDefault();
    deleteNote(id);
    Navigate('/home')
    ref.current.click();
  }

  return (
    <div >

      <button type="button" ref={ref} className="btn btn-danger me-md-2 " style={{ width: "96%" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        {symbol}
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">

          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Delete</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body">
              Are you sure you want to delete {title} ?
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

export default DeleteModal