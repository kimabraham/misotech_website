import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from '../Routes/Home/Home';
import Footer from './Footer';
import Header from './Header/Header';
import Intro from '../Routes/Company/Intro';
import Map from '../Routes/Company/Map';
import Products from '../Routes/Product/Products';
import Portfolio from '../Routes/Portfolio/Portfolio';
import ProductCatalogue from '../Routes/Catalogue/ProductCatalogue';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/company/intro" exact component={Intro} />
        <Route path="/company/map" exact component={Map} />
        <Route path="/products/:id" exact component={Products} />
        <Route path="/portfolio/:id" exact component={Portfolio} />
        <Route path="/promotion/product" exact component={ProductCatalogue} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </Router>
);
