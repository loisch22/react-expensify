import React from 'react';
//connect function connects component to redux store
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';


const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
);

//automatically reruns - gets current values
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
