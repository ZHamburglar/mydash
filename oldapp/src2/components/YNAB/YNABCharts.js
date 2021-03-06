import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import PropTypes from 'prop-types';

import { Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber, Dropdown, Menu, Button, Icon, message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


import { connect } from 'react-redux';
import * as actions from '../../actions';


class YNABCharts extends Component {
    static propTypes = {
    	GET_YNAB_DATA: PropTypes.func,
    };



    componentWillMount() {
    	this.props.GET_YNAB_DATA();
    	console.log('environment', process.env.NODE_ENV, process.env.YNAB_API_KEY)
    };
    
    handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    }

    handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      }

      handleChange = (value) => {
        console.log(`selected ${value}`);
      }
      



    render() {
        const data2 = []
        const menu = (
            <Select     
                placeholder="Select a person"
                style={{ width: 120 }} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          );




    	this.addTransAmounts = (transaction) => {
    		const amount = transaction.amount / 1000;
    		let month = transaction.date.split('-')[1] -1
    		let accountId = data2.find(account => account.id === transaction.account_id)
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
                <Dropdown.Button onClick={this.handleButtonClick} overlay={menu}>
                    Dropdown
                </Dropdown.Button>
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