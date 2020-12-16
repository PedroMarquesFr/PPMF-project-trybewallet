// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";
const FAILED_REQUEST = "FAILED_REQUEST";

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
