import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class YNABCharts extends Component {

  componentWillMount() {
    this.props.GET_YNAB_DATA()
    console.log('environment', process.env.NODE_ENV, process.env.YNAB_API_KEY)
  }

  renderProps = () => {
    console.log("updated props: ", this.props)
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
          {this.renderProps()}
      </div>
    );
  }
}


const mapStateToProps = ( YNABReducer ) => {
    const { YNABData, loadingYNAB, ynabError} = YNABReducer
    return { YNABData, loadingYNAB, ynabError}
}

export default connect(mapStateToProps, actions)(YNABCharts);