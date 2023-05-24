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
            <div className="mt-6 mb-6">
                <TitleWithPhoto/>
            </div>
            <Skills/>
            <div className="mt-6 mb-6">
                <Works/>
            </div>
            <Hire/>
            <div className="mt-6 mb-6">
                <Contacts/>
            </div>
            <div className="mt-6 mb-6">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
