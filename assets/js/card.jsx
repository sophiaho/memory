import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardText } from 'reactstrap';

export default class MemoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden:true
    };
    this.clickCard = this.clickCard.bind(this);
  }

  clickCard() {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden
    }));
  }

  render () {
    return (
    <div className="card">
      <div onClick={this.clickCard} className='card-body'>
        {!this.state.isHidden ? this.props.letter : ''}
      </div>
  </div>
  )
  }

}
