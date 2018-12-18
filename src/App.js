import React from 'react';
import List from './components/List';
import './App.css';

const App = () => {
  return (
    <div className="App" id="app">
      <h1>To-Do List</h1>
      <List />
    </div>
  );
};

export default App;
