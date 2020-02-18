import React from "react";

class TwitterMessage extends React.Component {
   
    state = {
      message: ""
    }

    handleChange = (e) => {
         const currentLength = e.target.value.length
         if (currentLength <= 280) this.setState({
           message: e.target.value
         })
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
    <label>Remaining characters: {this.props.maxChars - this.state.message.length}</label>
      </div>
    );
  }
}

export default TwitterMessage;
