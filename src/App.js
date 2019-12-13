import React, { PureComponent } from 'react';
import axios from 'axios';
import {Dropdown} from './Components/atoms/';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      products:[],
      bands:[],
      subbands:[],
      selectedProduct:'',
      selectedBand:'',
      selectedSubBand:''
    };
  }
  componentDidMount= async ()=> {
    try{
      const res = await axios.get('http://s3.ap-south-1.amazonaws.com/ypui-resources/InterviewQns/Products.json');
      const data = res.data;
      const set = new Set();
      data.forEach((elm)=>{
        set.add(elm.Productid.name);
      })
      const products = [...set];
      this.setState({products, data});
    }catch(err){

    }

  }

  handleProductClick = (title)=>{
    const {data} = this.state;
    let bands = data.filter((elm)=>(elm.Productid.name===title));
    const set = new Set();
    data.forEach((elm)=>{
      set.add(elm.Band.val);
    })
    bands = [...set];
    this.setState({bands, subbands:[], selectedProduct:title})
  }

  handleBandClick = (title)=>{
    const {data} = this.state;
    let subbands = data.filter((elm)=>(elm.Band.name===title));
    const set = new Set();
    data.forEach((elm)=>{
      set.add(elm.Subband.val);
    })
    subbands = [...set];
    this.setState({subbands, selectedBand:title})
  }

  handleSubBandClick = (title)=>{
    this.setState({selectedSubBand:title});
  }

  render() {
    const {products, bands, subbands, selectedProduct, selectedBand, selectedSubBand} = this.state;
    return (
      <div className="row p-50">
        <div className="col-md-4">
          <Dropdown data={products} title={'Products'} onItemSelect={this.handleProductClick} config={'name'}/>
        </div>
        <div className="col-md-4">
          <Dropdown data={bands} title={'Bands'} disabled={!bands.length} config={'val'} onItemSelect={this.handleBandClick}/>
        </div>
        <div className="col-md-4">
          <Dropdown data={subbands} title={'Sub Bands'} disabled={!subbands.length}
          config={'val'}
          onItemSelect={this.handleSubBandClick}
          />
        </div>
        <div className="col-md-4">
          {`Product_name: ${selectedProduct}`}
        </div>
        <div className="col-md-4">
          {`Band_name: ${selectedBand}`}
        </div>
        <div className="col-md-4">
          {`SubBand_name: ${selectedSubBand}`}
        </div>
      </div>
    )
  }

}

export default App;
