import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../smartContract/web3Config';
import Web3 from 'web3';

const initState = {
  web3: null,
  contract: null,
  totalSupply: null,
  tokenBalance: null,
};

// Create context
export const GlobalContext = createContext(initState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  useEffect(() => {
    loadBlockData();
  }, []);

  async function loadBlockData() {
    try {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      setWeb3(web3);
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      setContract(contract);

      // get total supply
      const tSupply = await contract.methods.totalSupply().call();
      setTotalSuppy(tSupply);

      const account = await web3.eth.getCoinbase();

      const tBalance = await contract.methods.balanceOf(account).call();
      setTokenBalance(tBalance);
    } catch (error) {
      console.log(
        'Error in loading Web3.... Please Connect Metamask Wallet',
        error
      );
    }
  }

  async function transfer(transfer) {
    const { web3, contract } = state;

    const account = await web3.eth.getAccounts();

    const res = await contract.methods
      .transfer(transfer.address, transfer.amount)
      .send({ from: account[0] });
    console.log(res);
  }

  // Actions
  function setWeb3(web3) {
    dispatch({
      type: 'SET_WEB3',
      payload: web3,
    });
  }

  function setContract(contract) {
    dispatch({
      type: 'SET_CONTRACT',
      payload: contract,
    });
  }

  function setTotalSuppy(tSup) {
    dispatch({
      type: 'SET_TOTAL_SUPPLY',
      payload: tSup,
    });
  }

  function setTokenBalance(tBal) {
    dispatch({
      type: 'SET_TOKEN_BALANCE',
      payload: tBal,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        web3: state.web3,
        contract: state.contract,
        totalSupply: state.totalSupply,
        tokenBalance: state.tokenBalance,
        transfer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
