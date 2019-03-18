import React, { Component } from 'react'
import { stat } from 'fs'

class App extends Component {
  state = {
    astros: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(respObj => this.setState({ astros: respObj.people }))
  }

  render() {
    return <div>{this.state.astros.map(astro => astro.name).join(', ')}</div>
  }
}

export default App
