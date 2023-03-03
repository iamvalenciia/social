import React from "react";
import "./App.css";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile/profile";
import { Search } from "./pages/search/search";


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
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/home" element={user ? <Home /> : <Login />} />
          <Route path="/profile" element={user ? <Profile /> : <Login />} />
          <Route path="/searchbar" element={user ? <Search /> : <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
