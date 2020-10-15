import React, { useState } from 'react';
import './searchBar.css';
import meli from '../../meli.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import Menu from '../../pages/Menu';

const SearchBar = ({ onSearch }) => {
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
        <div className="col-12 rectangulo">
            <div className="imagen">
                <img
                    className="mercadoLibre"
                    src={meli}
                    alt="Mercado Libre"
                    onClick = {() => history.push("/")}
                />
            </div>

            <div className="formulario">
                <p>
                {/* <FontAwesomeIcon className = "menu" icon = {faBars} /> */}
                </p>
                <form
                    onSubmit={onSubmit}
                    className="searchBar"
                >
                    <input
                        className="input"
                        type="text"
                        name="input"
                        placeholder="Buscar ..."
                        id="buscador"
                        value={category}
                        onChange={onChange}
                    />
                    <button
                        className="presionar"
                        style={{ fontSize: "14px", color: "black" }}
                        type="submit"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;