import React from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { TokenBalance } from './components/TokenBalance';
// import { TotalSupply } from './components/TotalSupply';
import { MoreInfo } from './components/MoreInfo';
import { SendToken } from './components/SendToken';
import { Footer } from './components/Footer';
import { GlobalProvider } from './context/GlobalContext';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <div className='container py-4'>
        <Header />
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
            <TokenBalance />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
            {/* <TotalSupply /> */} <SendToken />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
            <MoreInfo />
          </div>
        </div>
      </div>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
