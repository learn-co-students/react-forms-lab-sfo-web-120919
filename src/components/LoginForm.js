import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = (e) => {
    e.persist();
    this.setState(previousState => {
      return{
      ...previousState, 
      [e.target.name]: e.target.value
      }
    })
  }


  render() {
    return (
      <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
        <div>
          <label>
            Username
            <input onChange={this.onChange} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.onChange} value={this.state.password} id="password" name="password" type="password" />
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
