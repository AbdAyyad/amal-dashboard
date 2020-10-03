import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from './components/dashboard/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Route path={'/'} exact={true} component={Login}/>
            <Route path={'/dashboard'} exact={true} component={Dashboard} />
        </BrowserRouter>
    );
}

export default App;
