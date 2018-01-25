export const getExpensesTotal = (expenses) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const amount = [];

  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses.map((expense) =>
      expense.amount).reduce(reducer);
  }
};
