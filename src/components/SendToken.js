import React from 'react';

export const SendToken = () => {
  return (
    <div className='mainTab'>
      <h2>Send Tokens</h2>
      <form>
        <div className='form-group'>
          <label>Send to</label>
          <input
            type='text'
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
