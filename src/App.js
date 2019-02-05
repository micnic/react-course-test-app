import React, { Component } from 'react';
import Clock from './components/Clock';
import ActionLink from './components/ActionLink';
import FancyInput from './components/FancyInput';
import { SomeContext } from './context';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  headerRef = React.createRef();

  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleInputReset = () => {
    this.setState({
      inputValue: ''
    });
  }

  componentDidMount() {
    console.log(this.headerRef.current);
  }

  render() {

    const {
      state,
      handleInputChange,
      handleInputReset,
      headerRef
    } = this;

    return (
      <SomeContext.Provider value={{
        ...state,
        handleInputChange,
        handleInputReset
      }}>
        <header ref={headerRef} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Clock ref="clock"/>
          <ActionLink title="Hello"/>
          <FancyInput/>
        </header>
      </SomeContext.Provider>
    );
  }
}

export default App;
