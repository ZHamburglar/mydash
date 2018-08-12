import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions'

import WeatherComponent from '../components/WeatherComponent'

class Home extends Component {

  componentWillUnmount() {
  }

  componentWillMount() {
    // console.log('this is props: ', this.props.zipCode)
    this.props.getWeather(this.props.zipCode)
    this.props.getQuotes()

  }

  renderWeather = () => {
    // console.log("weather stuff", this.props.weather, "props", this.props, this.props.weather.dt)
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

  renderQuotes = () => {
    console.log("getting quotes: ", this.props.quote, this.props.quote.quote)
    if (this.props.quote.quote !== ''){
      return (
        <div>
          <div>{this.props.quote.quote} - {this.props.quote.author}</div>
          <img src={this.props.quote.background}/>
        </div>
      )
    }
  }



  render() {
    return (
      <div>
          {this.renderWeather()}
          {this.renderQuotes()}

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

const mapStateToProps = ({ generalSettingsReducer, permanentSettingsReducer, quotesReducer }) => {
  const { loadingWeather , weather, weatherError } = generalSettingsReducer
  const { zipCode } = permanentSettingsReducer
  const { quote, loadingQuote, errorQuote } = quotesReducer
  return { loadingWeather , weather, weatherError, zipCode, quote, loadingQuote, errorQuote }
}


export default connect(mapStateToProps, actions)(Home);