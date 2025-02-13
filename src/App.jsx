import { useState } from 'react'
import './App.css'
import NavBar from './Component/NavBar';
// import SelectTicket from './Pages/SelectTicket';
import AttendeeDetails from './Pages/AttendeeDetails';
// import TicketReady from './Pages/TicketReady';

function App() {

  return (
    <>
    <div className='bg-[#02191D]'>

    
      <NavBar />
      {/* <SelectTicket /> */}
      <AttendeeDetails />
      {/* <TicketReady /> */}
    </div>
    </>
  )
}

export default App
