import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotesContext } from '../Contexts/NotesContextProvider';

const AddNote = () => {
  
  const Navigate = useNavigate();
  const { addNote } = useContext(NotesContext);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    addNote(e.target.title.value, e.target.tag.value, e.target.description.value);
    Navigate('/home');
  }
  
  return (
    <div className='mx-4 my-4'>
      
      <h3 className='text-center'>Add Note</h3>
      
      <form onSubmit={onSubmit}>
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="description" className="form-label" style={{ display: "block" }}>Description</label>
          <textarea name="description" id="description" style={{ width: '100%' }} rows="10" required></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Add This Note</button>

      </form>

    </div>
  )
}

export default AddNote