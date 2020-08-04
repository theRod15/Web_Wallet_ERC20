import React from 'react';

export const MoreInfo = () => {
  return (
    <div className='mainTab'>
      <h2 className='Bal-Heading'>More Info</h2>

      <form className='mt-2'>
        <div className='form-group '>
          <label>Token Contract Address</label>
          <input
            type='text'
            className='form-control form-control-sm'
            placeholder='0xf4d3057BC68D4b48714c30Bea06fFA22f1C443dd'
          />
        </div>
        <small className='form-text '>See on Blockchain</small>
        <button type='submit' className='btn btn-primary mt-2 btn-block'>
          Full History
        </button>
      </form>
    </div>
  );
};
