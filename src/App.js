import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Customer from "./pages/Customer";
import Admin from "./pages/Admin";
import Engineer from "./pages/Engineer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material';
import Auth from "../src/hoc/Auth";
import React from "react";
import { useState } from 'react';
import Custom from './pages/Custom';

// creating context
const ThemeContext = React.createContext();

function App() {

   const defaultMaterialTheme = createTheme();
   // define state
   const [theme, setTheme] = useState("light");

  return (
    <div >

       <ThemeProvider theme={defaultMaterialTheme}> 
       <ThemeContext.Provider value= {{theme, setTheme}}>
      
    

      <Router>

        <Routes>

          <Route path="/" element= {<Login/>}/>
          {/*<Route path="/Customer" element ={  <Customer/> }/>
          <Route path ="/Engineer" element= {  <Engineer/>}/>
          <Route path ="/Admin" element= { <Admin/> }/>*/}

           <Route path="/Customer" element ={ <Auth> <Customer/> </Auth>}/>
           <Route path="/Customer/CreateTicket" element ={ <Auth> <Customer/> </Auth>}/>
            <Route path ="/Engineer" element= { <Auth> <Engineer/> </Auth>}/>
           <Route path ="/Admin"  element= {<Auth> <Admin/> </Auth>}/>
           <Route exact path ="/Admin/CreateUser" element = {  <Admin/> }/>
           <Route path ="/Admin/:userId"  element= {<Auth> <Admin/> </Auth>}/>
           <Route path = "/Custom" element = { <Custom/> }/>
        </Routes>
  </Router>
  </ThemeContext.Provider>
   </ThemeProvider>
      
      

    </div>
  );
}

export default App;
export {ThemeContext};
