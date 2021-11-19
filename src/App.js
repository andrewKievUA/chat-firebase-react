
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import React from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader"


function App() {
    const {auth} = React.useContext(Context)
    const [user,loading,error]=useAuthState(auth)
    if (loading){
        return  <Loader/>
    }
  return (
    <BrowserRouter className="App">
          <Navbar/>
          <AppRouter/>

    </BrowserRouter>
  );
}

export default App;
