// create your App component here
import React from "react";

const URL = "http://api.open-notify.org/astros.json";

export default class App extends React.Component {
  state = {
    peopleInSpace: []
  };

  componentDidMount() {
    this.getAstronauts();
  }

  getAstronauts = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(({ people }) => this.setState({ peopleInSpace: people }));
  };

  showAstronauts = () => {
    return this.state.peopleInSpace.map((person, id) => (
      <h1 key={id}>{person.name}</h1>
    ));
  };

  render() {
    return <div>{this.showAstronauts()}</div>;
  }
}
