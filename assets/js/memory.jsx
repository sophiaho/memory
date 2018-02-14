import React from 'react';
import ReactDOM from 'react-dom';
import MemoryCard from './card.jsx';
import Login from './login';
import { Card, CardText } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
import Button from 'reactstrap';

export default function memory_init(root, channel) {
  ReactDOM.render(<Memory channel={channel}/>, root);
}

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardLetter: this.randomizeCards(),
      cardComplete: this.initializeCardComplete()
    };
  }

  initializeCardComplete() {
    var allFalse = [];
    for (var i = 0; i <= 15; i++) {
      allFalse.push(false);
    }
    return allFalse;
  }
  randomizeCards() {
    var cardArray = ["A", "A", "B", "B", "C", "C", "D", "D", "E",
                      "E", "F", "F", "G", "G", "H", "H"];
    var temp = [];
    for (var i = cardArray.length - 1; i >= 0; i--) {
      var letter = cardArray.splice(Math.floor(Math.random()*cardArray.length), 1);
      temp.push(letter);
    }
  //this.setState({cardComplete:this.state.cardComplete, cardLetter:temp});
    return temp;
  }

  render() {
    console.log(this.state);
    return (
  // created with the help of the Boostrap documentation for grid
  <div>
    <div>
          <div className="row">
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[0]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[1]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[2]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[3]}/></div>
          </div>
          <div className="row">
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[4]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[5]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[6]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[7]}/></div>
          </div>
          <div className="row">
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[8]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[9]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[10]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[11]}/></div>
          </div>
          <div className="row">
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[12]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[13]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[14]}/></div>
            <div className=".col">
            <MemoryCard letter={this.state.cardLetter[15]}/></div>
          </div>
        </div>
  </div>
    )
  }
}
