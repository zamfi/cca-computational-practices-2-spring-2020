import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: <p>Welcome, traveler! How would you like to get to your destination?</p>,
    buttons: [
      { label: "Train", page: "onthetrain" },
      { label: "Ship", page: "ontheship" }
    ]
  },
  onthetrain: {
    text: <p>
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
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.text}
        {pageData.buttons.map(button => (
          <button onClick={() => this.goToPage(button.page)}>
            {button.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
