import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class YNABCharts extends Component {

  componentWillMount() {
    this.props.GET_YNAB_DATA()
    console.log('environment', process.env.NODE_ENV, process.env.API_URL)
  }

  render() {
    return (
      <div style={{ padding: 24}}>

          <p>YNAB</p>
          <p>YNAB</p>
          <p>YNAB</p>
          <p>YNAB</p>
          <p>YNAB</p>
          <p>YNAB</p>
      </div>
    );
  }
}


const mapStateToProps = () => {
  
}

export default connect(mapStateToProps, actions)(YNABCharts);