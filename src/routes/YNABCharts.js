import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import { connect } from 'react-redux';
import * as actions from '../actions';


class YNABCharts extends Component {


  componentWillMount() {
    this.props.GET_YNAB_DATA('test')
    console.log('environment', process.env.NODE_ENV, process.env.YNAB_API_KEY)
  }

  






  render() {

    const data2 = []

    this.renderProps = () => {
      if (this.props.loadingYNAB){
        console.log("updated props: ", this.props)

        return <div>LOADING</div>
      } else if (this.props.YNABData.budget) {
        console.log("updated props3: ", this.props.YNABData.budget.accounts)
        var i;
        for (i = 0; i < this.props.YNABData.budget.accounts.length; i++) { 
            console.log("accounts: ", this.props.YNABData.budget.accounts[i].name)
            data2.push({
              label: this.props.YNABData.budget.accounts[i].name,
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: [65, 59, 80, 81, 56, 55, 40]
            })
        }
        return <div>LOADING HERE</div>
      } else {
        console.log("updated props2: ", this.props.YNABData.budget)
        return <div>NOT LOADING</div>
      }

    
    }





    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: data2
    };

    const chartOptions = {
        legend: {
            display: true
        },
        tooltips: {
            enabled: true
        },
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }

    return (
      <div style={{ padding: 24 }}>
          <p>YNAB</p>
          {this.renderProps()}
          <Bar
              data={data}
              width={100}
              height={50}
              options={chartOptions}
          />
      </div>
    );
  }
}


const mapStateToProps = ({ YNABReducer }) => {
  const { loadingYNAB, YNABData, ynabError, YNABDataMonthlyChart } = YNABReducer
  return { loadingYNAB, YNABData, ynabError, YNABDataMonthlyChart }
}

export default connect(mapStateToProps, actions)(YNABCharts);