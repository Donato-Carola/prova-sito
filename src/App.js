import React from 'react';
import './components/style.css';
import './components/navBar.css';

import { Main } from './components/Main';
import { Route, Routes } from "react-router-dom";
import { Marvel } from './components/Marvel';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cartoon from './components/Film';
import Fumetti from './components/Fumetti';
import Autenticazione from './components/Autenticazione';
import Footer from './components/footer';
import Film from './components/Film';

function App() {
  return (
    <>
   
    <Navbar/>
      <Routes>
        
        <Route exact path='/eroi' element={<Main />}/>
        <Route path='/:id' element={<Marvel/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/film' element={<Film/>}/>
        <Route path='/fumetti' element={<Fumetti/>}/>
        <Route path='/login' element={<Autenticazione/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
