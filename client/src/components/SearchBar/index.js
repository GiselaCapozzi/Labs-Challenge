import React, { useState } from 'react';
import './searchBar.css';
import meli from '../../meli.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const SearchBar = () => {
    const [category, setCategory] = useState('');
    const history = useHistory();

    const onChange = (e) => {
        setCategory(e.target.value);
        console.log(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(category);
        setCategory('');
    }

    return (
        <div className = "rectangulo">
            <div className = "imagen">
                <img 
                    className = "mercadoLibre"
                    src = {meli}
                    alt = "Mercado Libre"
                />
            </div>
            <form
                onSubmit = {onSubmit}
                className = "searchBar"
            >
            <input
                className = "input"
                type = "text"
                name = "input"
                placeholder = "Buscar ..."
                id = "buscador"
                value = {category}
                onChange = {onChange}
            />
            <button
                className= "presionar"
                style = {{fontSize: "14px", color: "black"}}
                type = "submit"
            >
                <FontAwesomeIcon icon = {faSearch}/>
            </button>
            </form>
        </div>
    );
};

export default SearchBar;

const [query, setQuery] = useState('');
const [contador, setContador] = useState(0);
const [productos, setProductos] = useState([]);
const [inicio, setInicio] = useState(0);
const limite = 3;

export const onSearch = (search) => {
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