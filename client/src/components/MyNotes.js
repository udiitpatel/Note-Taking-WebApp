import React, { useEffect, useContext } from 'react'
import { NotesContext } from '../Contexts/NotesContextProvider'
import { useNavigate } from 'react-router-dom'
import NoteBody from './NoteBody';

const MyNotes = () => {

  const Navigate = useNavigate();
  const { notes, getUser } = useContext(NotesContext);

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className='my-3'>

     

      <h3 className='text-center mt-5 text-primary' ><u>My Notes</u></h3>

      {notes.length &&
        <div className="row mx-5">
          {
            notes.map(obj => (<div className="col-12 col-md-6 col-lg-4 d-flex justify-content-around my-4 px-4 px-0" key={obj._id}>
              <NoteBody title={obj.title} description={obj.description} tag={obj.tag} id={obj._id} />
            </div>))
          }
        </div>
      }
       

      {
        !notes.length && <h5 className='text-center my-5 py-5'>No notes Saved !</h5>
      }
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mx-3 my-2">
        <button className="btn btn-success me-md-2" type="button" onClick={(e) => { e.preventDefault(); Navigate('/addnote') }}>Add Note</button>
      </div>

    </div>
  )
}

export default MyNotes