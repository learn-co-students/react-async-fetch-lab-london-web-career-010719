// create your App component here
import React, { Component } from 'react'

export default class FetcherComponent extends Component {

  constructor(){
    super()

    this.state = {
      astronaughts: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
      return (
        <div>
          {this.state.astronaughts.map(person => person.name)}
        </div>
      )
    }

}
