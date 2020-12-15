import React, { Component } from "react";
import fetchAPI from "../services/fetchAPI";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const resp = await fetchAPI();
    this.setState({
      currencies: Object.keys(resp),
    });
  }

  render() {
      const {currencies} = this.state
    return (
      <div>
        <form>
          <div>
            <label htmlFor="disp">despesas</label>
            <input type="number" data-testid="value-input" id="disp"></input>
          </div>
          <div>
            <label htmlFor="desc">Descrição</label>
            <input
              type="text"
              data-testid="description-input"
              id="desc"
            ></input>
          </div>
          <div>
            <select name="cars" id="cars" data-testid="currency-input">
              {currencies.map((curr) => (
                <option key={curr} data-testid={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    );
  }
}
