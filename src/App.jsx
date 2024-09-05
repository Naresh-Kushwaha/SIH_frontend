

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import ProtectedRoute from './ProtectedRoute';
import StudentProfile from './components/Student/StudentProfile';
import FacultyProfile from './components/Faculty/FacultyProfile';
import AdminProfile from './components/Admin/AdminProfile';
import HomePage from './components/pages/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      {/* <Route path='/studentProfile' element={<StudentProfile></StudentProfile>}></Route> */}
      <Route  path="/studentProfile" element={
      <ProtectedRoute>
        <StudentProfile></StudentProfile>
        
        </ProtectedRoute>}/>
     
      <Route  path="/facultyProfile" element={
      <ProtectedRoute>
        <FacultyProfile></FacultyProfile>
        
        </ProtectedRoute>}/>
       
        
        <Route  path="/adminProfile" element={
          
      <ProtectedRoute>
       <AdminProfile></AdminProfile>
        
        </ProtectedRoute>}/>


        <Route  path="/" element={
          
          <ProtectedRoute>
           <HomePage></HomePage>
            
            </ProtectedRoute>}/>
        
      </Routes>
      
  </Router>
  );
}

export default App;

