import React, { useContext, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NotesContext } from '../Contexts/NotesContextProvider';

const EditNote = () => {
  
  const { id } = useParams();
  const Navigate = useNavigate();
  const { editNote, note, getNote } = useContext(NotesContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    editNote(e.target.title.value, e.target.tag.value, e.target.description.value, id);
    Navigate('/home');
  }

  useEffect(() => {
    getNote(id);
  }, [])
  
  return (
    <div className='mx-4 my-4' >
      
      <h3 className='text-center'>Edit Note</h3>
      
      <form onSubmit={onSubmit}>
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label" >Title</label>
          <input type="text" className="form-control" id="title" name="title" defaultValue={note.title} required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" defaultValue={note.tag} />
        </div>
        
        <div className="mb-3">
          <label htmlFor="description" className="form-label" style={{ display: "block" }}>Description</label>
          <textarea name="description" id="description" style={{ width: '100%' }} rows="10" required defaultValue={note.description}></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Edit Note</button>

      </form>

    </div>
  )
}

export default EditNote