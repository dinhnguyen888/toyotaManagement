import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Template from './template/template';

import Navbar from './components/navbar';
export default function App() {
  

  return (
    <>
       <Template>
    <><Routes>
      <Route path='/dashboard' element={<Navbar />} />


    </Routes>
sadasdd
    
    </>
   </Template>


    
    </>



  )
}

