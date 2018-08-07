import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions'

import WeatherComponent from '../components/WeatherComponent'

class Home extends Component {

  componentWillUnmount() {
  }

  componentWillMount() {
    console.log('this is props: ', this.props.zipCode)
    this.props.getWeather(this.props.zipCode)
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
    } else {
      return (
        <div>Booooo</div>
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

const mapStateToProps = ({ generalSettingsReducer, permanentSettingsReducer }) => {
  const { loadingWeather , weather, weatherError } = generalSettingsReducer
  const { zipCode } = permanentSettingsReducer

  return { loadingWeather , weather, weatherError, zipCode }
}


export default connect(mapStateToProps, actions)(Home);