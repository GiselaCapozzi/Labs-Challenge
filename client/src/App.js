import React, { useEffect, useState } from "react";
import "./App.css";
import Routes from '../src/Routes';
import { Route } from 'react-router-dom';
import SearchBar from '../src/components/SearchBar';
import Cards from '../src/components/Cards';
import Paginacion from "./components/Paginación";


function App() {
const [inicio, setInicio] = useState(0);
const [pagina, setPagina] = useState(0);
const [query, setQuery] = useState('');
const [contador, setContador] = useState(0);
const [productos, setProductos] = useState([]);
const limite = 30;
  
const onSearch = (search) => {
  console.log(search)
  setQuery(search);
  fetch(`http://localhost:4001/api/search?q=${search}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setContador(Math.ceil(data.results.length / limite));
      console.log(data.results.length / limite)
      setProductos(data.results.slice(inicio, inicio + limite))
      console.log(inicio + limite);
    })
    .catch(error => {
      console.log(error);
    });
};

useEffect(() => {
  onSearch("camara")
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

const MayMen = productos.sort((a,b) => {
  return a.price - b.price;
});

const handleChange = (value) => {
  var select = value * limite;
  setPagina(value);
  if (select >= 50) {
    select = 0;
    // console.log(select)
  }
  setInicio(select);
  onSearch(query);
};
  return (
    <div className="App">
      <Routes />
      <Route path = "/products" render = {() => <SearchBar onSearch = {onSearch}/>}/>
      <Route path = '/products' render = {() => <Cards resultado = {MayMen} />}/>
      <Paginacion count={contador} page={pagina} onChange={handleChange} />
    </div>
  );
}

export default App;
