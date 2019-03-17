import React, { Component } from "react"

class App extends Component {
  state = {
    people: []
  }

  renderPerson(person) {
    return (
      <div>
        <h1>{person.name}</h1>
      </div>
    )
  }

  personList(people) {
    return (
      <div>
        {people.map(person => {
          return this.renderPerson(person)
        })}
      </div>
    )
  }

  componentDidMount() {
    return fetch(`http://api.open-notify.org/astros.json`)
      .then(res => res.json())
      .then(message => this.setState({ people: message["people"] }))
  }

  render() {
    return <div>{this.personList(this.state.people)}</div>
  }
}

export default App
