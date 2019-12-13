import React, { PureComponent } from 'react';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }

  toggleDropdown=()=>{
    this.setState((state)=>({
      ...state,
      open: !state.open
    }))
  }

  handleDropDownClick = ()=>{
    this.toggleDropdown()
  }

  handleItemClick = (elm)=>(e)=>{
    const {onItemSelect} = this.props;
    this.toggleDropdown();
    onItemSelect(elm);
  }

  render() {
    const {open} = this.state;
    const {data, disabled, title, config} = this.props;
    return (
      <div className="dropdown">
        <button
          disabled={disabled}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          onClick={this.handleDropDownClick}
          >
          {title}
        </button>
        {open && Boolean(data.length) &&
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{display:'block'}}>
            {data.map((elm)=>(
              <button key={elm} className="dropdown-item" type="button" onClick={this.handleItemClick(elm)}>{elm}</button>
            ))}
          </div>
        }
    </div>
    );
  }

}

Dropdown.defaultProps={
  disabled:false
}


export default Dropdown;
