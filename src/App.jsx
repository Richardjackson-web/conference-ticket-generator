import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from './Component/NavBar';
import SelectTicket from './Pages/SelectTicket';
import AttendeeDetails from './Pages/AttendeeDetails';
import TicketReady from './Pages/TicketReady';

function App() {

  return (
    <>
    <Router>
      <div className='bg-[#02191D]'>
        <NavBar />
        <Routes>
          <Route path='/' element={<SelectTicket />} />
          <Route path='/attendeedetails' element={<AttendeeDetails />} />
          <Route path='/ticketready' element={<TicketReady />} />
        </Routes>
      </div>
    </Router>
    
    </>
  )
}

export default App
