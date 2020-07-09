import React from 'react';
import logo from './logo.svg';
import './App.css';
import Events from './components/Events';
import { Provider } from 'react-redux';
import store from './components/store'
import Orders from './components/Oders';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>MCIMBI RSVP</h1>
        </header>
        <Events />
        <Orders />
      </div>
    </Provider>
  );
}

export default App;
