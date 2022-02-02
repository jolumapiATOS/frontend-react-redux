import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { add } from './features/signUpSlice';
import { useState } from 'react'
import Layout from './components/Layout';
import Landing from './components/Landing';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        
            <Routes>
              <Route path='/' element={ <Landing/> } />  
              <Route path='/info' element={ <Users/> }  />
            </Routes>
        
      </Layout>
   </BrowserRouter>
  )
}

export default App;
