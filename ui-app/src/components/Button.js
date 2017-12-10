import React, { Component } from 'react';
import './Button.css'


const DeleteAccount = () => (
  <div>
    <p>Are you sure?</p>
    <DangerButton>Yep</DangerButton>
    <Button color='blue'>Cancel</Button>
  </div>
);


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'button1',
    };
  }  

  render() {
    return <button className="Button" >
      {this.state.text}
    </button>
  }
}

export default Button; // Don’t forget to use export default!
