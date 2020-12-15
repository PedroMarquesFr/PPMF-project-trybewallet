import React from "react";
import { connect } from "react-redux";
import { actionUserLogin } from "../actions";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      isValid: false,
      isClicked: false,
    };
  }

  isInputValid = () => {
    const { email, senha } = this.state;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
    if (regexEmail.test(String(email).toLowerCase()) && senha.length >= 6) {
      return this.setState({
        isValid: true,
      });
    }
    return this.setState({
      isValid: false,
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      this.isInputValid
    );
  };

  render() {
    const { isValid, isClicked } = this.state;
    const { actionUserLogin } = this.props;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          placeholder="email"
          onChange={this.handleChange}
          name="email"
        ></input>
        <input
          type="password"
          data-testid="password-input"
          placeholder="senha"
          onChange={this.handleChange}
          name="senha"
        ></input>
        <button
          disabled={!isValid}
          onClick={() => {
            actionUserLogin(this.state.email);
            this.setState({ isClicked: true });
          }}
        >
          Entrar
        </button>
        {isClicked && <Redirect to="/carteira" />}
      </div>
    );
  }
}

const mapDispatchToProps = { actionUserLogin };

export default connect(null, mapDispatchToProps)(Login);
