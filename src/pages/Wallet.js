import React from "react";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";
import Form from "../components/Form";

class Wallet extends React.Component {
  expenseCounter = (expenses) => {
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const multiplier = exchangeRates[currency].ask;
      return acc + value * multiplier;
    }, 0);
  };
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Trybe Wallet</Navbar.Brand>
            <div className="d-flex">
              <span data-testid="email-field">{email}</span>
              <p data-testid="total-field">{this.expenseCounter(expenses)}</p>
              <p data-testid="header-currency-field">BRL</p>
            </div>
          </Navbar>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

export default connect(mapStateToProps)(Wallet);
