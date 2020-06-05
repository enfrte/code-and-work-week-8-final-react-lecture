import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AppModal from "./AppModel";
import './App.css';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function App() {
  return (
    <div className="App">
      <h1>App</h1>
        <AppModal />
    </div>
  );
}

export default App;
