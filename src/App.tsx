import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Login from "./components/login/login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    );
}

export default App;
