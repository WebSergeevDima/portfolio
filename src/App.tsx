import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import TitleWithPhoto from "./components/TitleWithPhoto/TitleWithPhoto";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Hire from "./components/Hire/Hire";

function App() {
    return (
        <div className="App">
            <Header/>
            <TitleWithPhoto/>
            <Skills/>
            <Works/>
            <Hire/>
        </div>
    );
}

export default App;
