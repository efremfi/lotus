import React from 'react';
import Masonry from 'masonry-layout';

class Discover extends React.Component{
	constructor() {
		super();
	}

	componentDidMount() {
		//masonry options
		let grid = document.querySelector('.grid');
		let msnry = new Masonry( grid, {
	  		itemSelector: '.grid-item',
	  		columnWidth: 10
		});
	}
	//TODO: get images and render below
	render() {
		return (
			<div className="grid">
          		<h2 className="text-center">Coming Soon</h2>
			</div>
		);
	}
}

export default Discover;