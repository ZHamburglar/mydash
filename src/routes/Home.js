import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions'

import WeatherComponent from '../components/WeatherComponent'

class Home extends Component {

  componentWillUnmount() {
  }

  componentWillMount() {
    this.props.getWeather()
  }

  renderWeather = () => {
    console.log("weather stuff", this.props.weather, "props", this.props, this.props.weather.dt)
    if ( this.props.loadingWeather === true) {
      return (
        <div>LOADING PLACEHOLDER</div>
      )
    } else if ( this.props.loadingWeather === false && this.props.weather) {
      return (
        <div>There is weather {this.props.weather.main.temp}</div>
      )
    } 

  }



  render() {
    return (
      <div>
          {this.renderWeather()}

          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
          <p>Home Page</p>
      </div>
    );
  }
}

const mapStateToProps = ({ generalSettingsReducer }) => {
  const { loadingWeather , weather, weatherError } = generalSettingsReducer
  return { loadingWeather , weather, weatherError }
}


export default connect(mapStateToProps, actions)(Home);