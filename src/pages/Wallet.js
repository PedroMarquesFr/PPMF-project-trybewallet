import React from "react";
import { connect } from "react-redux";
import { Navbar} from "react-bootstrap";
import Form from '../components/Form'

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Trybe Wallet</Navbar.Brand>
            <div className="d-flex">
              <span data-testid="email-field">{email}</span>
              <p data-testid="total-field">0</p>
              <p data-testid="header-currency-field">BRL</p>
            </div>
          </Navbar>
        </header>
        <Form/>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

export default connect(mapStateToProps)(Wallet);
