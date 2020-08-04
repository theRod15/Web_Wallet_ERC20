import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const TokenBalance = () => {
  const { web3, tokenBalance } = useContext(GlobalContext);

  const [account, setAccount] = useState('');
  const [ethBalance, setEthBalance] = useState(0);

  useEffect(() => {
    (async () => {
      if (web3) {
        const account = await web3.eth.getCoinbase();

        setAccount(account);

        const ethBalance = await web3.eth.getBalance(account);
        setEthBalance(web3.utils.fromWei(ethBalance, 'ether'));
      }
    })();
  }, [web3]);

  return (
    <div className='mainTab'>
      <h2>My Balance</h2>

      <p>
        {Math.abs(ethBalance).toFixed(8)} ETH <br />
        <span> {Math.abs(tokenBalance).toFixed(2)} MST </span>
      </p>

      <strong>My Wallet Address</strong>

      <small className='form-text '>{account}</small>
    </div>
  );
};
