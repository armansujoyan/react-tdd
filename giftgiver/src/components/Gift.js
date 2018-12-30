import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ContorlLabel, Button} from 'react-bootstrap';

export default class Gift extends Component {
  constructor(){
    super();

    this.state = {
      person: '',
      present: '',
    }
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ContorlLabel>Person</ContorlLabel>
            <FormControl className='input-person'
              onChange={event => this.setState({ person: event.target.value })}/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
