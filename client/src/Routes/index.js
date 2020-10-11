import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Catalogue from '../pages/Catalogue';

const Routes = () => {
  return (
    <>      
        <Route exact path = "/" component={Home}></Route>
        <Route path= "/products" component = {Catalogue}></Route>
    </>
  );
};

export default Routes;
