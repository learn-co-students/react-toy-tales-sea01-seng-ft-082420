import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

const URL = 'http://localhost:3000/toys'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(toys => {
      this.setState({
        toys
      })
    })
  }


  handleDonate = (toy) => {
    this.setState({
      toys: this.state.toys.filter(t => (t.id !== toy.id))
    })
    fetch((URL + `/${toy.id}`), {
      method: "DELETE"
    })
  }

  addToy = (toy, e) => {
    e.preventDefault()
    this.handleClick()
    let ntoy;
    
    fetch((URL), {
      method: "POST",
      headers:  {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: toy.name,
        image: toy.image,
        likes: 0
      })
    })
    .then(res => res.json())
    .then(toy => 
      this.setState({
        toys: [...this.state.toys, toy]
      })
    
      )
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleDonate ={this.handleDonate}/>
      </>
    );
  }

}

export default App;
