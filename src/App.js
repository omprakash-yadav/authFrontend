import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import AllStudents from "./components/AllStudents";
import AddStudents from "./components/AddStudents";
import EditStudent from './components/EditStudent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="profile"  element={<Profile />} />
          <Route path="/add-student" element={<AddStudents />} />
          <Route path="/all-students" element={<AllStudents />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
