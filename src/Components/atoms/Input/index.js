import React from 'react';

const Input = ({prepend, append,...rest}) => (
  <div className="input-group mb-3">
  {
    prepend &&
    <div className="input-group-prepend">
      <div className="input-group-text">
        {prepend}
      </div>
    </div>
  }
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" {...rest}/>
    {
      append &&
      <div className="input-group-append">
        <div className="input-group-text p-0">
          {append}
        </div>
      </div>
    }
  </div>
);

Input.defaultProps={
  prepend:null,
  append:null,
}

export default Input;
