import React from 'react';
//connect function connects component to redux store
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
  </div>
);

//hoc - connect(whatInfoFromStoreYouWantComponentToAccess)ComponentYouWantToConnect
const ConnectedExpenseList = connect((state) => {
  return {
    expenses: state.expenses
  };
})(ExpenseList);

export default ConnectedExpenseList;
