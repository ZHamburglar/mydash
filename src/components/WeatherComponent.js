import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions'

class WeatherComponent extends Component {

  componentWillUnmount() {
  }


  componentWillMount() {
    this.props.getWeather()

  }


  renderWeather = () => {
    console.log("weather stuff")
    if( 2 > 1){

    }

  }

  

  render() {


    return (
      <div>
          <p>Weather</p>
          {this.renderWeather()}
          
      </div>
    );
  }
}

const mapStateToProps = ({ generalSettingsReducer }) => {
  const { loadingWeather , weather, weatherError } = generalSettingsReducer
  return { loadingWeather , weather, weatherError }
}


export default connect(mapStateToProps, actions)(WeatherComponent);