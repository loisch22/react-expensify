import React from 'react';
//connect function connects component to redux store
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};
//hoc - connect(whatInfoFromStoreYouWantComponentToAccess)ComponentYouWantToConnect
export default connect(mapStateToProps)(ExpenseList);
//more common syntax for exporting default
// export default ConnectedExpenseList;
