import React, { Component } from 'react';
import { Bar, Scatter } from 'react-chartjs-2';

import { connect } from 'react-redux';
import * as actions from '../../actions';


class YNABCharts extends Component {


  componentWillMount() {
    this.props.GET_YNAB_DATA('test')
    console.log('environment', process.env.NODE_ENV, process.env.YNAB_API_KEY)
  }

  render() {
    const data2 = []

    this.addTransAmounts = (transaction) => {
      var amount = transaction.amount / 1000;
      var month = transaction.date.split('-')[1] -1
      var accountId = data2.find(account => account.id === transaction.account_id)
      accountId.data[month] += amount
    }

    this.renderProps = () => {
      if (this.props.loadingYNAB){
        console.log("updated props: ", this.props.YNABData)
        return <div>LOADING</div>
      } else if (this.props.YNABData.budget) {
        // console.log("updated props3: ", this.props.YNABData.budget.accounts)
        var i;
        for (i = 0; i < this.props.YNABData.budget.accounts.length; i++) { 
            // console.log("accounts: ", this.props.YNABData.budget.accounts[i].name)
            data2.push({
              label: this.props.YNABData.budget.accounts[i].name,
              id: this.props.YNABData.budget.accounts[i].id,
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            })
        }

        for (i = 0; i < this.props.YNABData.budget.transactions.length; i++) {
            this.addTransAmounts(this.props.YNABData.budget.transactions[i])
        }
        console.log('data2: ', data2)
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

  
    const data3= {
         datasets: [{
            data: [
              {x: 1, y: 1}, 
              {x: 3, y: 7}, 
              {x: 6, y: 5}, 
              {x: 1,y: 1}
            ],
            borderColor: 'black',
            borderWidth: 1,
            pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
            pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
            pointRadius: 5,
            pointHoverRadius: 5,
            fill: false,
            tension: 0,
            showLine: true
         }, {
            data: [{
               x: 3.5,
               y: 4.5
            }],
            pointBackgroundColor: 'orange',
            pointBorderColor: 'darkorange',
            pointRadius: 10,
            pointHoverRadius: 10
         }]
      }


      const options2= {
         legend: false,
         tooltips: false,
         scales: {
            xAxes: [{
               ticks: {
                  min: 0,
                  max: 10
               },
               gridLines: {
                  color: '#888',
                  drawOnChartArea: false
               }
            }],
            yAxes: [{
               ticks: {
                  min: 0,
                  max: 8,
                  padding: 10
               },
               gridLines: {
                  color: '#888',
                  drawOnChartArea: false
               }
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
          {/* <Scatter
              data={data3}
              width={100}
              height={50}
              options={options2}
          /> */}
          
      </div>
    );
  }
}


const mapStateToProps = ({ YNABReducer }) => {
  const { loadingYNAB, YNABData, ynabError, YNABDataMonthlyChart } = YNABReducer
  return { loadingYNAB, YNABData, ynabError, YNABDataMonthlyChart }
}

export default connect(mapStateToProps, actions)(YNABCharts);