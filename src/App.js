// create your App component here
import React from "react";

const URL = "http://api.open-notify.org/astros.json";

export default class App extends React.Component {
  state = {
    peopleInSpace: []
  };

  componentWillMount() {
    this.getAstronauts();
    this.showAstronauts();
  }

  getAstronauts = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(astronauts => this.setState({ peopleInSpace: astronauts }));
  };

  showAstronauts = () => {};

  render() {
    return (
      <ul>
        {this.state.peopleInSpace.map((person, id) => (
          <h1 key={id}>{person.name}</h1>
        ))}
      </ul>
    );
  }
}
