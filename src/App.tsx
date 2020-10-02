import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Login from "./components/login/login";

function App() {
    return (
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    );
}

export default App;
