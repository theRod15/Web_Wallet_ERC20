import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const MoreInfo = () => {
  const { totalSupply } = useContext(GlobalContext);

  return (
    <div className='mainTab'>
      <h2 className='Bal-Heading'>More Info</h2>

      <p>
        Total Supply: <strong> MAS Token PIAIC</strong>
      </p>
      <p>
        Symbl:<strong> MST</strong>
      </p>
      <p>
        Total Supply: <strong>{totalSupply}</strong>
      </p>
      <p>
        Decimals: <strong>2</strong>
      </p>

      <small className='form-text '>See on Blockchain</small>
      <button type='submit' className='btn btn-primary mt-2 btn-block'>
        Full History
      </button>
    </div>
  );
};
