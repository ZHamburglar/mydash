import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions'

class WeatherComponent extends Component {




  componentWillMount() {
  }

  componentWillUnmount() {
  }


  renderWeather = () => {
    console.log("weather stuff")
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