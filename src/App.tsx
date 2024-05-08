import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Boosts from './components/Boosts';
import Frens from './components/Frens';
import Trade from './components/Trade';



function App() {
  return (
    <div>

<div className="App">
         
         
         <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        
                        path="/"
                        element={<Main />}
                    />
 
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/boosts"
                        element={<Boosts />}
                    />
 
                    {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
                    <Route
                        path="/frens"
                        element={<Frens />}
                    />
                    <Route
                        path="/frens"
                        element={<Frens />}
                    />
                    <Route
                        path="/trade"
                        element={<Trade />}
                    />
 
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        
    </div>
        
    </div>
   
  );
}

export default App;
