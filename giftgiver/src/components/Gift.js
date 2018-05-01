import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap'

class Gift extends Component {
  state = {
    person: '',
    gift: '',
  }

  handlePersonChange = e => {
    this.setState({
      person: e.target.value,
    })
  }

  handlePresentChange = e => {
    this.setState({
      present: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className="input-person"
              onChange={this.handlePersonChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              className="input-present"
              onChange={this.handlePresentChange}
            />
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Gift
