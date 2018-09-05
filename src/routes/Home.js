import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class Home extends Component {

  componentWillUnmount() {
  }

  componentWillMount() {
    // console.log('this is props: ', this.props.zipCode)
    this.props.getWeather(this.props.zipCode)
    this.props.getQuotes()
  }

  componentDidMount() {
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

  getQuoteStyle = () => {
    
  }

  renderQuotes = () => {
    // console.log("getting quotes: ", this.props.quote, this.props.quote.quote)
    if (this.props.quote.quote !== ''){
      return (
        <div style={imageStyle}>
          <div style={quoteStyle}>{this.props.quote.quote} - {this.props.quote.author}</div>
          <img ref="ImageRef" resizemode={'cover'} style={{ flex: 1}} src={this.props.quote.background}/>
        </div>
      )
    }
  }



  render() {
    return (
      <div style={homePageStyle}>
          {/* {this.renderWeather()} */}
          {this.renderQuotes()}
      </div>
    );
  }
}

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}

const quoteStyle = {
  position : 'absolute',
  bottom : 0,
  top : 400,
  left : 0,
  right : 0,
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white'
}

const homePageStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
}

const mapStateToProps = ({ generalSettingsReducer, permanentSettingsReducer, quotesReducer }) => {
  const { loadingWeather , weather, weatherError } = generalSettingsReducer
  const { zipCode } = permanentSettingsReducer
  const { quote, loadingQuote, errorQuote } = quotesReducer
  return { loadingWeather , weather, weatherError, zipCode, quote, loadingQuote, errorQuote }
}




export default connect(mapStateToProps, actions)(Home);

