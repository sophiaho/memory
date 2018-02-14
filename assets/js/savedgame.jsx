import React from 'react';
import ReactDOM from 'react-dom';
import { InputGroup, Input } from 'reactstrap';
import Button from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SavedGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName : "",
      modal : true
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange(event) {
    this.setState({gameName : event.target.value});
  }

  render() {
    return (
      <div className="savedgame">
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Start or Resume Your Game!</ModalHeader>
          <ModalBody>
             <InputGroup>
               <Input placeholder="i.e. sophia" onChange={this.handleChange}/>
             </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>Enter Game</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
