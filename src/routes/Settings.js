import React, { Component } from 'react';
import Switch from "react-switch";



class Settings extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
          <p>Settings Page</p>
          <p>Settings Page</p>
          <p>Settings Page</p>
          <p>Settings Page</p>
          <p>Settings Page</p>
          <p>Settings Page</p>
          <label htmlFor="normal-switch">
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              id="normal-switch"
            />
          </label>
      </div>
    );
  }
}


export default Settings;