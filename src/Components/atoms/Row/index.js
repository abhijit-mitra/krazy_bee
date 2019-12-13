import React from 'react';

const Row = ({obj, config_arr}) => (
  <div className='table-header row border'>
    {
      config_arr.map((elm, index)=>(
        <div className="col-md-3">
          <center>{obj[elm]}</center>
        </div>
      ))
    }
  </div>
);

export default Row;
