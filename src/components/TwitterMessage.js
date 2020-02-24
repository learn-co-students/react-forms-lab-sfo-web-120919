import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  onChange = (e) => {
    e.persist()
    this.setState(previousState => {
      return {
        ...previousState,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
  <strong>Your message: </strong><br></br>
        <p>{this.state.message}</p>
        <p>{this.props.maxChars - this.state.message.length}</p>
        <input onChange={this.onChange} value={this.state.message} type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
