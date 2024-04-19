import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Template from './template/template';
import Report from './components/reportbox';
import Navbar from './components/navbar';
import ListTable from './components/table';

export default function App() {
  

  return (
    <>
       <Template>
     
    <div>
    <Routes>
      <Route path='/dashboard' element={  <Report tieude={`Today's money`} sotien={2323} />} />
      <Route path='/danhsach' element={<ListTable />} />
      


    </Routes>

    
    </div>
   </Template>


    
    </>



  )
}

