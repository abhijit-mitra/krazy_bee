import React from 'react';

const TableHeader = ({data}) => (
  <div className='table-header row border'>
    {
      data.map((elm, index)=>(
        <div className="col-md-3" key={index}>
          <center><h3>{elm}</h3></center>
        </div>
      ))
    }
  </div>
);

export default TableHeader;
