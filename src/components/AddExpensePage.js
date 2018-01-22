import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// more testable
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.onSubmit(expense); //easier to test

        //devtool React - Add - props - history - push
        props.history.push('/');
      }}
    />
  </div>
);

// works with dispatch not state
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(addExpense(expense))
});

// undefined refers to mapStateToProps which is undefined
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
