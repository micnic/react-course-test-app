import React, { Component } from 'react';

export default class Clock extends Component {

	constructor(props) {
		super(props);

		let { time } = props;

		if (time === undefined) {
			time = 0;
		}

		this.state = {
			time
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState(({ time }) => {

				return {
					time: time + 1
				};
			});

			/*
			this.setState(({ time }) => ({ time: time + 1 }));
			*/
		}, 1000);
	}

	render() {

		return (
			<div>Time: {this.state.time}</div>
		);
	}
}