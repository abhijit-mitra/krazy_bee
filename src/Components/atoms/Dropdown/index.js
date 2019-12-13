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

  handleItemClick = (id)=>(e)=>{
    const {onItemSelect} = this.props;
    this.toggleDropdown();
    onItemSelect(id);
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
        {open &&
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{display:'block'}}>
            {data.map((elm, index)=>(
              <button key={index} className="dropdown-item" type="button" onClick={this.handleItemClick(elm.id)}>{elm[config]}</button>
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
