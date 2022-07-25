import React, { useContext, useEffect } from 'react'
import { NotesContext } from '../Contexts/NotesContextProvider'
import { useNavigate, useParams } from 'react-router-dom'
import DeleteModal from './Modals/DeleteModal';

const Open = () => {
  
  const { id } = useParams();
  const Navigate = useNavigate();
  const { note, getNote } = useContext(NotesContext);
  const { title, tag, description } = note;

  useEffect(() => {
    getNote(id);
  }, [])

  return (
    <div className='container my-5'>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-end my-3">
        <button className="btn btn-primary me-md-2 mx-2" type="button" onClick={() => Navigate(`/editnote/${id}`)}>Edit Note</button>
        <DeleteModal symbol="Delete" id={id} title={title} />
        <button className="btn btn-info me-md-2 mx-2" type="button" onClick={() => Navigate(`/home`)}>Back</button>
      </div>
      
      <div style={{position:"relative", border: "solid 2px black",whiteSpace:'pre-wrap',wordBreak:"break-word" }} className='py-3 px-3 rounded'>
        <h3 className='text-center' >{title}</h3>
        <h5 className='text-center'>{tag}</h5>
        <br />
        <hr />
        <p>{description}</p>
      </div>

    </div>
  )
}

export default Open