import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

function TableComp({ expenses }) {
  //   expensesTable = () => {
  //     expenses.map(({}))
  //   };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(
            ({
              id,
              currency,
              value,
              description,
              method,
              tag,
              exchangeRates,
            }) => {
              return (
                <tr key={id}>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>
                    {parseFloat(value * exchangeRates[currency].ask).toFixed(2)}
                  </td>
                  <td>Real</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(TableComp);
