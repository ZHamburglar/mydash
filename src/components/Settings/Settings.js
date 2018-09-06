import React, { Component } from 'react';
import Switch from "react-switch";

import SettingGeneral from '../SettingsForms/SettingsGeneral';
import SettingCalendar from '../SettingsForms/SettingCalendar';
import SettingYNAB from '../SettingsForms/SettingsYNAB';



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
			<div style={{ padding: 24 }}>
				<p>Google Login</p>
				<SettingGeneral />
				<SettingCalendar />
				<SettingYNAB />
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