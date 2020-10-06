import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import LogIn from './Components/LogIn/LogIn';
import Registration from './Components/Registration/Registration';
import PrivateAuth from './Components/PrivateAuth/PrivateAuth';
import RegisteredInformation from './Components/RegisteredInformation/RegisteredInformation';
import Admin from './Components/Admin/Admin';


export const userContext = createContext();

function App() {
  const [logedInUser,setLogedInUser] = useState({});
  return (
    <userContext.Provider value={[logedInUser,setLogedInUser]}>
    <Router>
    
      <Switch>
        <Route exact path="/">
            <HomePage></HomePage>
        </Route>

        <Route path="/login">
          <LogIn></LogIn>
        </Route>

        <Route path="/registeredUserInfo">
          <RegisteredInformation></RegisteredInformation>
        </Route>

        <Route path="/admin">
           <Admin></Admin>
        </Route>

        <PrivateAuth path="/registration/:id">
            <Registration></Registration>
          </PrivateAuth>

      </Switch>
  </Router>
  </userContext.Provider>
  );
}

export default App;
