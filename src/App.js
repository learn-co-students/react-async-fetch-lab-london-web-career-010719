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
      .then(({ people }) => this.setState({ peopleInSpace: people }));
  };

  //   showAstronauts = () => {
  //     this.state.peopleInSpace.map(person => <li>{person.name}</li>));
  //   };

  render() {
    return (
      <div>
        <h1>{this.state.peopleInSpace.map(person => person.name)}</h1>
      </div>
    );
  }
}
