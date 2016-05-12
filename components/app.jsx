import './app.scss';
import $ from 'jquery';
import React from 'react';
import Nav from './partials/nav/Nav.jsx';

class App extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Nav></Nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;