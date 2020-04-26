export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        laoding: false,
        transactions: payload,
      };
    case "TRANSACTIONS_ERROR":
      return {
        ...state,
        error: payload,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    default:
      return state;
  }
};
