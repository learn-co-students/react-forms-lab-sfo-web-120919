import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mesg: '',length: props.maxChars};
  }
// state ={mesg: '',length: this.props.maxChars}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.mesg} onChange={(event) => this.handleChange(event)}/>
        Remaining characters {this.state.length}
      </div>
    );
  }
  
  handleChange = (event) => {
    // event.persist()
    let msg = event.target.value
    this.setState((prevState) => {
      let count = prevState.length
    
      return {length:count-1,mesg:msg}
    },
      () => {console.log(this.state)})
    
  }
  
}

export default TwitterMessage;
