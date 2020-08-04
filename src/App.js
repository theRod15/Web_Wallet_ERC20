import React from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { TokenBalance } from './components/TokenBalance';
import { TotalSupply } from './components/TotalSupply';
import { MoreInfo } from './components/MoreInfo';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
            <TokenBalance />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
            <TotalSupply />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
            <MoreInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
