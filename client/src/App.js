import React from "react";
import "./App.css";
import Routes from './Routes';
import { Route } from 'react-router-dom';
import SearchBar from '../src/components/SearchBar';

function App({onSearch}) {
  return (
    <div className="App">
      <Routes />
      <Route path = "/products" render = {() => <SearchBar onSearch = {onSearch}/>}/>
    </div>
  );
}

export default App;
