import React from 'react';
import { auth } from "./config/firebase";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import { Home } from "./pages/home/home";
import { Login } from "./pages/login";
import { useAuthState } from "react-firebase-hooks/auth";

interface User {
  displayName: string | null;
  photoURL: string | null;
  uid: string;
}

function App(): JSX.Element {

  const user: User | null | undefined = useAuthState(auth)[0];

  return (
    <div className="App">
      <Router>            
      <Routes>
        <Route path="/" element={user ? <Home/>  : <Login/>} />
        <Route path="/home" element={user ? <Home/> : <Login/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
