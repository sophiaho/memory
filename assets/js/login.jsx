import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="login">
        <Form>
          <FormGroup>
            <Label>Enter user associated with game</Label>
            <Input type="text" placeholder="i.e. sophia" />
          </FormGroup>
          <a href="http://memorytwo.sushiparty.blog">Play memory game!</a>
        </Form>
      </div>
    )
  }
}
