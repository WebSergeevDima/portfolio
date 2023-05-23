import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import TitleWithPhoto from "./components/TitleWithPhoto/TitleWithPhoto";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Hire from "./components/Hire/Hire";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <TitleWithPhoto/>
            <Skills/>
            <Works/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
