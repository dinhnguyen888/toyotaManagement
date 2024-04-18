import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Template from './template/template';

import Navbar from './components/navbar';
import ListTable from './components/table';

export default function App() {
  

  return (
    <>
       <Template>
    <div>
    <Routes>
      <Route path='/' element={<ListTable />} />


    </Routes>

    
    </div>
   </Template>


    
    </>



  )
}

