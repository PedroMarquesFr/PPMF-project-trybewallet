import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { actionDelete, actionChangeEditState, idBeingEdited } from '../actions';

function TableComp({
  expenses,
  actionDelete,
  actionChangeEditState,
  idBeingEdited,
}) {
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
            }) => (
              <tr key={ id }>
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
                <td>
                  <Button
                    variant="warning"
                    data-testid="edit-btn"
                    onClick={ () => {
                      actionChangeEditState();
                      idBeingEdited(id);
                    } }
                  >
                    Editar
                  </Button>
                  {' '}
                  <Button
                    variant="danger"
                    data-testid="delete-btn"
                    onClick={ () => actionDelete(id) }
                  >
                    Remover
                  </Button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = {
  actionDelete,
  actionChangeEditState,
  idBeingEdited,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComp);
