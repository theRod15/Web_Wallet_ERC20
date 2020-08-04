import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const SendToken = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState(0);

  const { transfer } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const tra = {
      address: address,
      amount: amount,
    };

    transfer(tra);
  };

  return (
    <div className='mainTab'>
      <h2>Send Tokens</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Send to</label>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='form-control'
            placeholder='0x00000000000000000000000000000000000000000000'
          />
          <small className='form-text text-muted '>
            Please make sure your address is correct or not!
          </small>
        </div>
        <div className='form-group'>
          <label>Amount</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='form-control'
            placeholder='123456789'
          />
          <small className='form-text text-muted '>
            Please make sure value is less then & equal to your balance!
          </small>
        </div>

        <button type='submit' className='btn btn-success btn-block'>
          Send
        </button>
      </form>
    </div>
  );
};
