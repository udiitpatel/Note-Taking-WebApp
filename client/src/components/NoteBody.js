import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoteBody = ({ title, description, tag, id }) => {

  const Navigate = useNavigate();
  return (
    <div style={{ position: "relative", width: "100%",whiteSpace:"pre-wrap"}} >

      <div className="card" style={{ height: "24rem",overflowY:"scroll"  }}>
        <div className="card-body">
          <h5 className="card-title text-center ">{title}</h5>
          <hr></hr>
          <h6 className="card-subtitle mb-2 text-muted text-center">{tag}</h6>
          <p className="card-text">{description}</p>
        </div>
      </div>
      
      <div className="d-grid gap-2" style={{ position: "absolute", bottom: "8px", left: "8px", right: "8px" }}>
        <button className="btn btn-primary" type="button" onClick={(e) => { e.preventDefault(); Navigate(`/open/${id}`) }}>OPEN</button>
      </div>
      
    </div>
  )
}

export default NoteBody