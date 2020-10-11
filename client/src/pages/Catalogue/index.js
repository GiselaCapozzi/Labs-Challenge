import React, { useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

const Catalogue = () => {
    const [query, setQuery] = useState('');
const [contador, setContador] = useState(0);
const [productos, setProductos] = useState([]);
const [inicio, setInicio] = useState(0);
const [pagina, setPagina] = useState(0);
const limite = 3;

const onSearch = (search) => {
    setQuery(search);
    console.log(search);
    fetch(`http://localhost:4000/api/search?q=${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setContador(Math.ceil(data.results.length / limite));
            setProductos(data.results.slice(inicio, inicio + limite));
        })
        .catch(err => {
            console.log(err);
        });
};

useEffect(() => {
  onSearch('vino')
}, []);

const MayMen = productos.sort((a, b) => {
  return a.price - b.price;
});

const handleChange = (e, value) => {
  var select = value * limite;
  setPagina(value);
  if (select >= 50) {
    select = 0;
  }
  setInicio(select);
  onSearch(query);
}


    return (
        <div>
        <Route path = "/products" render = {() => <SearchBar onSearch = {onSearch}/>}/>
        <Route exact path = "/products" component = {Card}></Route>
        </div>
    );
};

export default Catalogue;