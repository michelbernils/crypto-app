
import './App.css';
import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails } from './components'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId"> 
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

      <footer className="footer">
        <Typography.Title level={5} style={{color: 'white', textAlign: "center"}}>
          Cryptoverse <br /> All rights reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchange</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
        </Space>
      </footer>
      </main>
    </div>
  );
}

export default App;
