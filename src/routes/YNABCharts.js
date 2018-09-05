import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class YNABCharts extends Component {

  componentWillMount() {
    this.props.GET_YNAB_DATA('test')
    console.log('environment', process.env.NODE_ENV, process.env.YNAB_API_KEY)
  }

  renderProps = () => {
    if (this.props.loadingYNAB){
      console.log("updated props: ", this.props)

      return <div>LOADING</div>
    } else {
      console.log("updated props2: ", this.props)

      return <div>NOT LOADING</div>
    }
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


// const mapStateToProps = ({ YNABReducer }) => {
//     const { loadingYNAB, ynabError } = YNABReducer
//     return { loadingYNAB, ynabError }
// }

const mapStateToProps = ({ YNABReducer }) => {
  const { loadingYNAB, YNABData, ynabError } = YNABReducer
  return { loadingYNAB, YNABData, ynabError }
}

export default connect(mapStateToProps, actions)(YNABCharts);