import React from "react";

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      senha:''
    }
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="email-input"
            placeholder="email"
          ></input>
          <input
            type="password"
            testid="password-input"
            placeholder="senha"
          ></input>
        </form>
      </div>
    );
  }
}

export default Login;
