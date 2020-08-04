import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const TotalSupply = () => {
  const { totalSupply } = useContext(GlobalContext);

  return (
    <div className='mainTab'>
      <h2>Total Supply</h2>
      <p> {totalSupply} MST </p>
      <div>
        <button type='submit' className='btn btn-primary btn-block'>
          Get More info
        </button>
      </div>
    </div>
  );
};
