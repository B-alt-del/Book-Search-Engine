import React from 'react';
import {Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<SearchBooks />} />
          <Route path='/saved' element={<SavedBooks />} />
          <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>}/>
        </Routes>
      </div>
  );
}

export default App;

