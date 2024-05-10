import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import StudentForm from './components/studentForm';
import MarksForm from './components/marksForm';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/studentForm' element={<StudentForm/>}></Route>
      <Route path='/marksForm' element={<MarksForm/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
