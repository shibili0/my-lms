import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './dashboard';
import Courses from './courses';
import Loginpage from './loginpage';
import Library from './library';
import Mylists from './mylists';
function Routing() {
  return (
    <div>
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/mylists" element={<Mylists />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing