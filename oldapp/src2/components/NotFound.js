import React, { Component } from 'react';
import { Col, Row } from 'antd';
import notFoundImage from '../assets/images/error-triangle.png';


// export default function NotFound(props) {
class NotFound extends Component {
    
	render(){
		return(
		// <div className="not-found">There was an error loading the component. Boo</div>
			<Col span={24} style={{ textAlign: 'center'}}>
				<Row>
					<img src={notFoundImage} width="25%" height="25%" />
				</Row>
				<Row>
					<div className="not-found">
                    Page Not Found.
					</div>
				</Row>
			</Col>
		)
	}

}

export default NotFound;