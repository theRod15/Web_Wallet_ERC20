import React from 'react';
import { CONTRACT_ADDRESS } from '../smartContract/web3Config';

export const Header = () => {
  return (
    <div className='header'>
      <span>MAS Token PIAIC ( MST ) | </span>
      <div>
        <span className=''> Contract Address: {CONTRACT_ADDRESS}</span>
      </div>
    </div>
  );
};
