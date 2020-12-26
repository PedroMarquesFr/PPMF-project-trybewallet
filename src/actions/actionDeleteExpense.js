export default function deleteExpense(id) {
  return { type: "DELETE_EXP", expense: id };
}
