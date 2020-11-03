import React, { Component } from 'react';

const URL = 'http://localhost:3000/toys'

class ToyCard extends Component {



  state = {
    likes: this.props.toy.likes
  }


  handleLike = () => {
    let nlikes = this.state.likes + 1
    this.setState({
      likes: nlikes
    })

    fetch(URL+`/${this.props.toy.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: nlikes
      })
    })


  }

  render() {
    let {name, image} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick= {() => this.props.handleDonate(this.props.toy)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;

// "id": 2,
// "name": "Buzz Lightyear",
// "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
// "likes": 8