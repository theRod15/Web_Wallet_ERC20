import React from 'react';

export const TokenBalance = () => {
  return (
    <div className='mainTab'>
      <span className='Bal-Heading'>My Balance</span>
      <p className='balAmount'> 10,000.00 MST </p>

      <form>
        <div class='form-group '>
          <label>My Wallet Address</label>
          <input
            type='text'
            class='form-control form-control-sm'
            placeholder='0x00000000000000000000000000000000000000000'
            readonly
          />
        </div>
      </form>
    </div>
  );
};
