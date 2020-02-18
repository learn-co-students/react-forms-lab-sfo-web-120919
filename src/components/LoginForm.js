import React from "react";

class LoginForm extends React.Component {
    
  state = {
    username: "",
    password: ""
  }

  handleInputChange = (e) => {

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password.length > 0 && this.state.username.length > 0) {
      this.props.handleLogin(this.state)
    } 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
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
