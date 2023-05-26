import React, { useState } from "react";
import './Autenticazione.css'

import { Login } from "./Login";
import { Register } from "./Register";

function Autenticazione() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="Box1">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Autenticazione;
