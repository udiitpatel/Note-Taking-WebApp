import Home from './components/Home';
import './App.css';
import { Route, Routes, HashRouter as Router, Navigate } from 'react-router-dom'
import About from './components/About';
import Navbar from './components/Navbar';
import NotesContextProvider from './Contexts/NotesContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Open from './components/Open';
import UpdateProfile from './components/UpdateProfile';

function App() {

  return (
    <Router>
      <NotesContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addnote" element={<AddNote />} />
          <Route path="/editnote/:id" element={<EditNote />} />
          <Route path="/open/:id" element={<Open />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
        </Routes>
      </NotesContextProvider>
    </Router>

  );
}

export default App;
