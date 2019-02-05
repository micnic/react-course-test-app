import React, { Component } from 'react';
import { SomeContext } from '../context';

export default class FancyInput extends Component {

	static contextType = SomeContext;

	render() {

		const { inputValue, handleInputChange, handleInputReset } = this.context;

		return (
			<>
				<input type="text" value={inputValue} onChange={handleInputChange}/>
				<button onClick={handleInputReset}>Reset</button>
			</>
		);
	}
}