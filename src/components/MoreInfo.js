import React from 'react';

export const MoreInfo = () => {
  return (
    <div className='mainTab'>
      <span className='Bal-Heading'>More Info</span>

      <form className='mt-2'>
        <div class='form-group '>
          <label>Token Contract Address</label>
          <input
            type='text'
            class='form-control form-control-sm'
            placeholder='0x00000000000000000000000000000000000000000'
            readonly
          />
        </div>
        <small class='form-text '>See on Blockchain</small>
        <button type='submit' class='btn btn-primary mt-2 btn-block'>
          Full History
        </button>
      </form>
    </div>
  );
};
