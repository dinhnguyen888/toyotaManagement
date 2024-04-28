import React from 'react';
import { Route, Routes } from 'react-router';
import Template from './template/template';
import Report from './components/reportbox';
import ListTable from './components/table';

import Chartpie from './components/chart';

export default function App() {
  return (
    <>
      <Template>
        <div>
          <Routes>
            <Route path='/dashboard' element={<Report />} />
            <Route path='/danhsach' element={<ListTable />} />
          </Routes>
      
        </div>
      </Template>
    </>
  );
}
