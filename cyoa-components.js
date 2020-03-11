import React, { Component } from "react";

import "./styles.css";

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  validateAndGoToPage(page) {
    var anyErrors = false;
    if (this.props.getData("name") == "") {
      anyErrors = true;
      this.setState({
        nameHasError: true
      });
    } else {
      this.setState({
        nameHasError: false
      });
    }
    if (Number(this.props.getData("birthday").split("-")[0]) < 1900) {
      anyErrors = true;
      this.setState({
        birthdayHasError: true
      });
    } else {
      this.setState({
        birthdayHasError: false
      });
    }

    if (anyErrors == false) {
      this.props.goToPage(page);
    }
  }

  render() {
    var nameStyle = {}
    if (this.state.nameHasError) {
      nameStyle.border = "2px solid red";
    }
    var birthdayStyle = {}
    if (this.state.birthdayHasError) {
      birthdayStyle.border = "2px solid red";
    }
    return <div>
      <p>
        What is your name?
        <br />
        <br />
        <input type="text" style={nameStyle} value={this.props.getData("name")} onChange={event => this.props.setData("name", event.target.value)} />
        <br />
        <br />
        What is your birthday?
        <br />
        <br />
        <input type="date" style={birthdayStyle} value={this.props.getData("birthday")} onChange={event => this.props.setData("birthday", event.target.value)} />
      </p>
      <button onClick={() => this.validateAndGoToPage(WelcomePage)}>Continue...</button>
    </div>
  }
}
class WelcomePage extends Component {
  render() {
    return <div>
        <p>Welcome, {this.props.getData("name")}! How would you like to get to your destination?</p>
        <button onClick={() => this.props.goToPage(TrainPage)}>Train</button>
        <button onClick={() => this.props.goToPage(ShipPage)}>Ship</button>
      </div>
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: StartPage,
      name: ""
    };
  }

  goToPage(page) {
    this.setState({
      page: page
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  getData(dataName) {
    return this.state[dataName] || "";
  }

  render() {
    return (
      <div className="App">
        <this.state.page 
          getData={(name) => this.getData(name)}
          setData={(name, value) => this.setData(name, value)}
          goToPage={(page) => this.goToPage(page)} />
      </div>
    );
  }
}

export default App;
