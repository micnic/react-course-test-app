import React, { Component } from 'react';

/*
function ActionLink() {
	function handleClick(e) {
	  e.preventDefault();
	  console.log('The link was clicked.');
	}

	return (
	  <a href="#" onClick={handleClick}>
		Click me
	  </a>
	);
  }
*/

export default class ActionLink extends Component {

	handleClick = (event) => {
		event.preventDefault();
		console.log('The link was clicked.', this.props.title);
	}

	render() {

		return (
			<a href="#" onClick={this.handleClick}>
				Click me
			</a>
		);
	}
}