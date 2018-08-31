import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5'



function Calendar(props) {

    return (
      <div style={{ padding: 24}}>

          <p>Calendar Page</p>
          <p>Calendar Page</p>
          <p>Calendar Page</p>
          <p>Calendar Page</p>
          <p>Calendar Page</p>


      </div>
    );
  
}

export default connect(routeNodeSelector('calendar'))(Calendar)
