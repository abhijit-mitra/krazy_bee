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
      selectedProduct:null,
      selectedBand:null,
      selectedSubBand:null
    };
  }
  componentDidMount= async ()=> {
    try{
      const res = await axios.get('http://s3.ap-south-1.amazonaws.com/ypui-resources/InterviewQns/Products.json');
      const data = res.data;
      const products = data.map((elm)=>(elm.Productid))
      this.setState({products, data});
    }catch(err){

    }

  }

  handleProductClick = (id)=>{
    const {data} = this.state;
    const bands = data.filter((elm)=>(elm.Productid.id===id)).map((elm)=>(elm.Band));
    console.log(bands);
    this.setState({bands, subbands:[], selectedProduct:id})
  }

  handleBandClick = (id)=>{
    const {data} = this.state;
    const subbands = data.filter((elm)=>(elm.Band.id===id)).map((elm)=>(elm.Subband));
    console.log(subbands);
    this.setState({subbands, selectedBand:id})
  }

  handleSubBandClick = (id)=>{
    this.setState({selectedSubBand:id});
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
          {`Product_id:${selectedProduct}`}
        </div>
        <div className="col-md-4">
          {`Band_id:${selectedBand}`}
        </div>
        <div className="col-md-4">
          {`SubBand_id:${selectedSubBand}`}
        </div>
      </div>
    )
  }

}

export default App;
