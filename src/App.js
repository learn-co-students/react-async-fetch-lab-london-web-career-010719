// create your App component here
import React, { Component } from 'react';

class App extends React.Component{
  state={
    peopleInSpace: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(res=>res.json())
      .then(val=>{this.setState(
        {peopleInSpace:val.people}
      )
      })
  }

  render(){
    return(
      <div>
        {this.state.peopleInSpace.map(ppl=>ppl.name)}
      </div>
    )
  }
}

export default App
