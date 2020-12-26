// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";
const FAILED_REQUEST = "FAILED_REQUEST";
const DELETE_EXP = "DELETE_EXP";

const initialState = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

export default function reducer(state = initialState, { type, expense }) {
  switch (type) {
    case REQUESTING_DATA:
      return { ...state, isFetching: true };
    case RECEIVED_DATA:
      return {
        ...state,
        expenses: [...state.expenses, expense],
        isFetching: false,
      };
    case FAILED_REQUEST:
      return { ...state, error: state.expenses, isFetching: false };
    case DELETE_EXP:
      const {expenses}= state;
      const newExpenses = expenses;
      console.log(expense);

      const index = expenses.findIndex(({ id }) => id === expense);
      newExpenses.splice(index, 1);
      return {
        ...state,
        expenses:[...newExpenses],
        isFetching: false,
      };
    default:
      return state;
  }
}

// {
//     user: {
//       email: '',
//     },
//     wallet: {
//       currencies: [],
//       expenses: []
//     }

//   }
