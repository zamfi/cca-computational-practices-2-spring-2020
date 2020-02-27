import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) =>
      <p>
        What is your name?
        <br />
        <br />
        <input type="text" value={getData("name")} onChange={event => setData("name", event.target.value)} />
        <br />
        <br />
        What is your birthday?
        <br />
        <br />
        <input type="date" value={getData("birthday")} onChange={event => setData("birthday", event.target.value)} />
      </p>,
    buttons: [{ label: "Continue", page: "welcome" }]
  },
  welcome: {
    content: (getData, setName) => 
      <p>Welcome, {getData("name")}! How would you like to get to your destination?</p>,
    buttons: [
      { label: "Train", page: "onthetrain" },
      { label: "Ship", page: "ontheship" }
    ]
  },
  onthetrain: {
    content: (getData, setName) => 
      <p>
        Welcome aboard the choo-choo train! Please make your way to your seat.
        What's the number?
      </p>,
    buttons: [{ label: "12E", page: "death" }, { label: "97C", page: "life" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content((dataName) => this.state[dataName], (name, value) => this.setData(name, value))}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
