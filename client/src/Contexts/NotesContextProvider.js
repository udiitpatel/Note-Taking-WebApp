import React, { createContext, useState } from 'react'
export const NotesContext = createContext();

const NotesContextProvider = (props) => {

  let host = "http://localhost:5000";
  if(process.env.NODE_ENV==='production') host="";
  const [note, setNote] = useState({ id: "", title: "", tag: "", description: "" })
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", id: "" });


  const logOut = () => {
    localStorage.removeItem('auth-token');
  }



  const getUser = async () => {
    const res = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        'auth-token': localStorage.getItem('auth-token')
      }
    })
    const data = await res.json();
    setNotes(data.Notes);
    setUser({ name: data.name, email: data.email, id: data._id });
  }



  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
      }
    })
    setNotes(notes.filter(x=>x._id!==id));
  }



  const addNote = async (title, tag, description) => {
    const res=await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
      },
      body: JSON.stringify({
        title, tag: tag ? tag : "general", description
      })
    })
    const data=await res.json();
    setNotes(data.Notes);
  }



  const editNote = async (title, tag, description, id) => {
    await fetch(`${host}/api/notes/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
      },
      body: JSON.stringify({
        title, tag: tag ? tag : "general", description
      })
    })

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      if (newNotes[i]._id === id) {
        newNotes[i].title = title; newNotes[i].tag = tag; newNotes[i].description = description;
        setNotes(newNotes);
        break;
      }
    }
  }



  const getNote = async (id) => {
    const res = await fetch(`${host}/api/notes/getnote/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
      }
    })
    const data = await res.json();
    setNote(data);
  }



  return (
    <NotesContext.Provider value={{ logOut, getUser, user, host, notes, deleteNote, addNote, editNote, note, getNote }}>
      {props.children}
    </NotesContext.Provider>
  )
}

export default NotesContextProvider