// create your App component here
import React from "react";

const URL = "http://api.open-notify.org/astros.json";

export default class App extends React.Component {
  state = {
    peopleInSpace: []
  };

  componentWillMount() {
    this.getAstronauts();
  }

  getAstronauts = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(astronauts => this.setState({ astronauts }));
  };

  //   showAstronauts = () => {};

  render() {
    return <ul />;
  }
}
