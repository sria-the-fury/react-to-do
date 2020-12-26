import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer/>

           <Navbar/>
            <Switch>

                <Route exact path="/" component={Dashboard}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>

            </Switch>

        </BrowserRouter>

    );
}

export default App;
