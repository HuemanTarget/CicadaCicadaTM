import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Story from './Components/Story';
import Actors from './Components/Actors';
import Footer from './Components/Footer';
import SeaCaptain from './Components/SeaCaptain';
import Ticket from './Components/Ticket';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Story />
      <Actors />
      <SeaCaptain />
      <Ticket />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
