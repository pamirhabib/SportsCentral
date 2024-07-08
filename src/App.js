// src/App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import FacetedSearch from './FacetedSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <FacetedSearch />
        <Main />
      </div>
    </div>
  );
}

export default App;
