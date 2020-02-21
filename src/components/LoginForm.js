import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: '',password: ''};
  }

  handleUsername = (event) => {
    this.setState({username:event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // (this.state.username != '' && this.state.password!= '') ? 
    // (this.props.handleLogin(this.state.username,this.state.password,event)) : console.log("no data")
    if ((!this.state.username && !this.state.password))
    {
      return this.props.handleLogin(this.state.username,this.state.password,event)
    }
  }

  render() {
    return (
      // <form>
      <form onSubmit = {(event) =>  {(this.state.username != '' && this.state.password!= '') ? 
     (this.props.handleLogin(this.state.username,this.state.password,event)) : console.log("no data")
      }}> 
      {/* <form onSubmit = {() =>  this.handleSubmit}>  */}
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value = {this.state.username} onChange = {event => this.handleUsername(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value = {this.state.password} onChange = {event => this.handlePassword(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
