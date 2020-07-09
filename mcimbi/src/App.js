import React from 'react';
import logo from './logo.svg';
import './App.css';
import Events from './components/Events';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(()=> [], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
    <h1>MCIMBI RSVP</h1>
      </header>
      <Events />
    </div>
    </Provider>
  );
}

export default App;
